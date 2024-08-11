import { useState } from "react";
import styles from "./employeersFilter.module.scss";
import { useDispatch } from "react-redux";
import { filter } from "../../../app/features/employeesSlice";

interface EmployeeFilterProps {
    roles: string[];
}

export const EmployeersFilter = ({ roles }: EmployeeFilterProps) => {
    const dispatch = useDispatch();
    const [selectedRole, setSelectedRole] = useState<string>("all");
    const [inArchive, setInArchive] = useState<boolean>(false);

    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newRole = event.target.value;
        setSelectedRole(newRole);
        dispatch(filter({ role: newRole, inArchive }));
    };

    const handleArchiveChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newInArchive = event.target.checked;
        setInArchive(newInArchive);
        dispatch(filter({ role: selectedRole, inArchive: newInArchive }));
    };

    return (
        <div className={styles.employeersFilter}>
            <div className={styles.employeersFilter__filterField}>
                <label htmlFor="role-select">Должность:</label>
                <select
                    id="role-select"
                    value={selectedRole}
                    onChange={handleRoleChange}
                >
                    <option value="all">Все</option>
                    {roles.map((role) => (
                        <option key={role} value={role}>
                            {role}
                        </option>
                    ))}
                </select>
            </div>
            <div className={styles.employeersFilter__filterField}>
                <label htmlFor="archive-checkbox">В архиве:</label>
                <input
                    id="archive-checkbox"
                    type="checkbox"
                    checked={inArchive}
                    onChange={handleArchiveChange}
                />
            </div>
        </div>
    );
};
