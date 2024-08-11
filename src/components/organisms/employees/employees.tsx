import styles from "./employees.module.scss";
import { EmployeeTable } from "../../molecules/employeeTable/employeeTable";
import { EmployeersSort } from "../../molecules/employeersSort/employeersSort";
import { EmployeersFilter } from "../../molecules/employeersFilter/employeersFilter";
import employeesData from "../../../data/employees.json";
import { Link } from "../../atoms/link/link";

export const Employees = () => {
    return (
        <div className={styles.employees}>
            <h1 className={styles.employees__title}>Список сотрудников</h1>
            <Link src="/add">Добавить нового сотрудника</Link>
            <EmployeersFilter
                roles={[
                    ...new Set(employeesData.map((employee) => employee.role)),
                ]}
            />
            <EmployeersSort />
            <EmployeeTable />
        </div>
    );
};
