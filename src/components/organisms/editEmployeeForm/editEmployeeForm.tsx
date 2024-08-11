import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useNavigate, useParams } from "react-router-dom";
import { Employee as EmployeeI } from "../../../interfaces/interfaces";
import styles from "./editEmployeeForm.module.scss";
import { updateEmployee } from "../../../app/features/employeesSlice";
import employeesData from "../../../data/employees.json";
import { Button } from "../../atoms/button/button";

const roles = [...new Set(employeesData.map((employee) => employee.role))];

export const EditEmployeeForm = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const employee = useSelector((state: RootState) =>
        state.employees.list.find((employee) => employee.id === Number(id))
    );

    const [employeeData, setEmployeeData] = useState<EmployeeI | undefined>(
        employee
    );

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLInputElement
        >
    ) => {
        if (employeeData) {
            const { name, value, type } = e.target;
            setEmployeeData((prevData) => ({
                ...prevData!,
                [name]:
                    type === "checkbox"
                        ? (e.target as HTMLInputElement).checked
                        : value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (employeeData) {
            dispatch(updateEmployee(employeeData));
            navigate("/");
        }
    };

    if (!employeeData) {
        return <div>Сотрудник не найден</div>;
    }

    return (
        <form className={styles.editEmployeeForm} onSubmit={handleSubmit}>
            <label>
                Имя:
                <input
                    type="text"
                    name="name"
                    value={employeeData.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Телефон:
                <input
                    type="text"
                    name="phone"
                    value={employeeData.phone}
                    onChange={handleChange}
                />
            </label>
            <label>
                Дата рождения:
                <input
                    type="text"
                    name="birthday"
                    value={employeeData.birthday}
                    onChange={handleChange}
                />
            </label>
            <label>
                Должность:
                <select
                    name="role"
                    value={employeeData.role}
                    onChange={handleChange}
                >
                    {roles.map((role) => (
                        <option key={role} value={role}>
                            {role}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Статус в архиве:
                <input
                    type="checkbox"
                    name="isArchive"
                    checked={employeeData.isArchive}
                    onChange={handleChange}
                />
            </label>

            <Button type="submit">Сохранить</Button>
        </form>
    );
};
