import styles from "./button.module.scss";
interface ButtonProps {
    children: React.ReactNode;
    type: "submit" | "button";
}
export const Button = ({ children, type }: ButtonProps) => {
    return (
        <button className={styles.button} type={type}>
            {children}
        </button>
    );
};
