import { FaFacebook, FaInstagram, FaTwitter, FaYoutube,} from "react-icons/fa";

export function Footer() {
  const API_URL = import.meta.env.VITE_API_URL;
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About GentlePaws</h3>
            <p className="text-sm">
              Your trusted destination for premium pet supplies and expert care advice. Making tails wag since 2024.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Shop", "Categories", "Footer", "Admin"].map((item) => (
                <li key={item}>
                  <a href= "" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {[
                "Shipping Policy",
                "Returns & Refunds",
                "FAQs",
                "Track Order"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: <FaFacebook className="w-6 h-6" />, label: "Facebook", link: "" },
                { icon: <FaInstagram className="w-6 h-6" />, label: "Instagram", link:"" },
                { icon: <FaTwitter className="w-6 h-6" />, label: "Twitter", link: "" },
                { icon: <FaYoutube className="w-6 h-6" />, label: "Youtube", link: "" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  className="hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div>
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <div className="flex justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 rounded-l focus:outline-none"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700">
                  Subscribe
                </button>                
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 GentlePaws. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
