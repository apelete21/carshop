import React, { ReactElement } from "react";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  children?: ReactElement;
};

export function PageWrapper({ className, children }: Props) {
  return (
    <motion.div
      className={`w-screen overflow-x-hidden ${className}`}
      animate={{ x: 0, y: 0 }}
      transition={{ type: "spring" }}
    >
      {children}
    </motion.div>
  );
}
