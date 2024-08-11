import { AddEmployeeForm } from "../../organisms/addEmployeeForm/addEmployeeForm";
import { MainTemplate } from "../../templates/mainTemplate/mainTemplate";
import styles from "./addEmployessPage.module.scss";

export const AddEmployessPage = () => {
    return (
        <MainTemplate>
            <div className={styles.addEmployessPage}>
                <h2>Добавление сотрудника</h2>
                <AddEmployeeForm />
            </div>
        </MainTemplate>
    );
};
