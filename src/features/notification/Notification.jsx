import React, { useEffect } from "react";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { removeNotification } from "../dataSlice";

const NOTIFICATION_TTL = 3000;

const Notification = ({ id, text }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      dispatch(removeNotification({ id: id }));
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-indigo-500 pointer-events-auto"
    >
      <FiCheckSquare className=" mt-0.5" />
      <span>{text}</span>
      <button onClick={() => dispatch(removeNotification({ id: id }))} className="ml-auto mt-0.5">
        <FiX />
      </button>
    </motion.div>
  );
};

export default Notification;
