import { Employees } from "../../organisms/employees/employees";
import { MainTemplate } from "../../templates/mainTemplate/mainTemplate";
import styles from "./mainPage.module.scss";
export const MainPage = () => {
    return (
        <MainTemplate>
            <main className={styles.mainPage}>
                <Employees />
            </main>
        </MainTemplate>
    );
};
