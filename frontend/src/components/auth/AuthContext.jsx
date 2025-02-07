import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode"; // Ensure this is installed: npm install jwt-decode

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
    const [accessToken, setAccessToken] = useState(() => localStorage.getItem("accessToken"));
    const [refreshToken, setRefreshToken] = useState(() => localStorage.getItem("refreshToken"));
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;

    // Register function
    const register = async (email, password, username) => {
        try {
            const response = await axios.post(`${API_URL}/register/`, { email, password, username });
            return { success: true, data: response.data };
        } catch (error) {
            console.error("Registration failed", error.response?.data || error);
            return { success: false, error: error.response?.data };
        }
    };

    // Login function
    const login = async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/login/`, { email, password });
            const { access, refresh } = response.data;

            localStorage.setItem("accessToken", access);
            localStorage.setItem("refreshToken", refresh);
            setAccessToken(access);
            setRefreshToken(refresh);

            const userInfo = await fetchUser(access);
            if (userInfo) {
                setUser(userInfo);
                localStorage.setItem("user", JSON.stringify(userInfo));
            }
            return { success: true };
        } catch (error) {
            console.error("Login failed", error.response?.data || error);
            return { success: false, error: error.response?.data };
        }
    };

    // Fetch user data
    const fetchUser = async (token) => {
        try {
            const response = await axios.get(`${API_URL}/user/`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error("Failed to fetch user info", error.response?.data || error);
            return null;
        }
    };

    // Logout function
    const logout = async () => {
        try {
            if (accessToken) {
                await axios.post(`${API_URL}/logout/`, {}, {
                    headers: { Authorization: `Bearer ${accessToken}` },
                });
            }
        } catch (error) {
            console.error("Logout request failed", error.response?.data || error);
        } finally {
            localStorage.clear(); // Clears all stored data
            setAccessToken(null);
            setRefreshToken(null);
            setUser(null);
            navigate("/"); // Navigate after clearing data
        }
    };

    // Refresh access token
    const refreshAccessToken = async () => {
        if (!refreshToken) {
            logout();
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/token/refresh/`, { refresh: refreshToken });
            const newAccessToken = response.data.access;

            localStorage.setItem("accessToken", newAccessToken);
            setAccessToken(newAccessToken);
            return newAccessToken;
        } catch (error) {
            console.error("Failed to refresh token", error.response?.data || error);
            logout();
        }
    };

    // Auto-refresh token before expiry
    useEffect(() => {
        if (!accessToken) return;

        let decodedToken;
        try {
            decodedToken = jwtDecode(accessToken);
        } catch (error) {
            console.error("Invalid token format", error);
            logout();
            return;
        }

        const expTime = decodedToken.exp * 1000; // Convert to milliseconds
        const currentTime = Date.now();
        const refreshThreshold = expTime - 5 * 60 * 1000; // Refresh 5 minutes before expiry
        const timeUntilRefresh = refreshThreshold - currentTime;

        if (timeUntilRefresh <= 0) {
            refreshAccessToken();
        } else {
            const timer = setTimeout(refreshAccessToken, timeUntilRefresh);
            return () => clearTimeout(timer);
        }
    }, [accessToken]); // ✅ Depend only on `accessToken` to avoid loops

    return (
        <AuthContext.Provider value={{ user, accessToken, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
