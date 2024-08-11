import { EditEmployeeForm } from "../../organisms/editEmployeeForm/editEmployeeForm";
import { MainTemplate } from "../../templates/mainTemplate/mainTemplate";
import styles from "./editEmployeesPage.module.scss";

export const EditEmployeesPage = () => {
    return (
        <MainTemplate>
            <div className={styles.editEmployeesPage}>
                <h2>Редактирования сотрудника</h2>
                <EditEmployeeForm />
            </div>
        </MainTemplate>
    );
};
