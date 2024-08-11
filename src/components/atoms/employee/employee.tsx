import { memo } from "react";
import { Employee as EmployeeI } from "../../../interfaces/interfaces";
import styles from "./employee.module.scss";
interface EmployeeProps {
    employee: EmployeeI;
    onClick: (employee: EmployeeI) => void;
}

export const Employee = memo(({ employee, onClick }: EmployeeProps) => {
    const { name, role, phone } = employee;
    return (
        <tr onClick={() => onClick(employee)} className={styles.employee}>
            <td>{name}</td>
            <td>{role}</td>
            <td>{phone}</td>
        </tr>
    );
});
