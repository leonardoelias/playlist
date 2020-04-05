import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isVisible, onClose, children }) =>
  createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center content-center absolute top-0 left-0 w-screen h-screen"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ ease: "easeOut", duration: 0.25 }}
            className="h-screen w-64 bg-white shadow-xl p-3"
            style={{
              width: "50vw",
              boxShadow: "0 30px 80px 0 rgba(97,45,45,0.25)",
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal")
  );

export default Modal;
