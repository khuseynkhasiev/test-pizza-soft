import styles from "./employeersSort.module.scss";
import { useDispatch } from "react-redux";
import { sort } from "../../../app/features/employeesSlice";

export const EmployeersSort = () => {
    const dispatch = useDispatch();

    const handleSort = (field: "name" | "birthday", order: "asc" | "desc") => {
        dispatch(sort({ field, order }));
    };
    return (
        <div className={styles.employeersSort}>
            <button onClick={() => handleSort("name", "asc")}>
                Сортировать по имени (А-Я)
            </button>
            <button onClick={() => handleSort("name", "desc")}>
                Сортировать по имени (Я-А)
            </button>
            <button onClick={() => handleSort("birthday", "asc")}>
                Сортировать по дате рождения (по возрастанию)
            </button>
            <button onClick={() => handleSort("birthday", "desc")}>
                Сортировать по дате рождения (по убыванию)
            </button>
        </div>
    );
};
