import styles from "./mainTemplate.module.scss";
interface MainTemplateProps {
    children: React.ReactNode;
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
    return <div className={styles.mainTemplate}>{children}</div>;
};
