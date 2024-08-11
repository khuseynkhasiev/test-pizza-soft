import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../../app/features/employeesSlice";
import styles from "./addEmployeeForm.module.scss";
import { Button } from "../../atoms/button/button";
export const AddEmployeeForm = () => {
    const dispatch = useDispatch();
    const [employee, setEmployee] = useState({
        name: "",
        isArchive: "",
        role: "",
        phone: "",
        birthday: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmployee({
            ...employee,
            [name]: name === "experience" ? parseInt(value) : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addEmployee(employee));
        setEmployee({
            name: "",
            isArchive: "",
            role: "",
            phone: "",
            birthday: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.addEmployeeForm}>
            <div>
                <label>Имя:</label>
                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Статус(в архиве):</label>
                <input
                    type="text"
                    name="isArchive"
                    value={employee.isArchive}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Должность:</label>
                <input
                    type="text"
                    name="role"
                    value={employee.role}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Номер телефона:</label>
                <input
                    type="text"
                    name="phone"
                    value={employee.phone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Дата рождения:</label>
                <input
                    type="date"
                    name="birthday"
                    value={employee.birthday.toString()}
                    onChange={handleChange}
                />
            </div>
            <Button type="submit">Добавить сотрудника</Button>
        </form>
    );
};
