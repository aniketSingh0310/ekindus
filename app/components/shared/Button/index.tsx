import React from "react";
import "@/app/components/shared/Button/style.module.css";
import styles from "./style.module.css";

interface ButtonProps {
    children: React.ReactNode; // Change to accept children
}

const SubmitButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div>
      <button className={styles.btn}>{children}</button>
    </div>
  );
};

export default SubmitButton;
