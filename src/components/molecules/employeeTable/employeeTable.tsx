import { useSelector } from "react-redux";
import { Employee } from "../../atoms/employee/employee";
import styles from "./employeeTable.module.scss";
import { RootState } from "../../../app/store";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const EmployeeTable = () => {
    const navigate = useNavigate();

    const { list } = useSelector((state: RootState) => state.employees);

    const handleEmployeeClick = useCallback(
        (employee: any) => {
            navigate(`/edit/${employee.id}`);
        },
        [list]
    );

    return (
        <table className={styles.employeeTable}>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Должность</th>
                    <th>Телефон</th>
                </tr>
            </thead>
            <tbody>
                {list.map((employee) => (
                    <Employee
                        key={employee.id}
                        employee={employee}
                        onClick={handleEmployeeClick}
                    />
                ))}
            </tbody>
        </table>
    );
};
