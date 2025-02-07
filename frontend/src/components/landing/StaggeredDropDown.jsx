import { FiEdit, FiChevronDown, FiPackage, FiTruck, FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAuth } from "../../components/auth/AuthContext";  // Import useAuth to access context

const StaggeredDropDown = ({ className, onClick, variant, children }) => {
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();  // Get the logout function from context

  const handleLogout = () => {
    logout(); // Call the logout function
    setOpen(false); // Close the dropdown
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center gap-2 px-2 py-2 rounded-md bg-transparent border text-white hover:bg-blue-500 hover:border-blue-500 transition-colors duration-200 ${variant}`}
      >
        <span>{children}</span>
        <motion.span animate={open ? "open" : "closed"} variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <motion.ul
          initial={wrapperVariants.closed}
          animate={open ? "open" : "closed"}
          variants={wrapperVariants}
          className="absolute top-full left-0 mt-1 max-w-max w-auto bg-white shadow-xl rounded-lg z-10"
        >
          <Option setOpen={setOpen} Icon={FiEdit} text="Edit Profile" />
          <Option setOpen={setOpen} Icon={FiPackage} text="Orders" />
          <Option setOpen={setOpen} Icon={FiTruck} text="Track your Order" />
          <motion.li
            variants={itemVariants}
            onClick={handleLogout} // Call the handleLogout function when clicked
            className="flex items-center gap-2 p-2 text-sm font-medium whitespace-nowrap rounded-md hover:bg-red-100 text-red-500 hover:text-red-600 transition-colors cursor-pointer"
          >
            <motion.span variants={actionIconVariants}>
              <FiLogOut />
            </motion.span>
            <span>Logout</span>
          </motion.li>
        </motion.ul>
      )}
    </div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 p-2 text-sm font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

// Framer Motion variants
const wrapperVariants = {
  open: {
    scaleY: 1,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
