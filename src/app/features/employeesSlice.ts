import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "../../interfaces/interfaces";
import employeesData from "../../data/employees.json";

interface SortPayload {
    field: "name" | "birthday";
    order: "asc" | "desc";
}

const initialState = {
    list: employeesData as Employee[],
};

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        sort: (state, action: PayloadAction<SortPayload>) => {
            const { field, order } = action.payload;

            state.list.sort((a, b) => {
                let compareA, compareB;

                if (field === "birthday") {
                    compareA = new Date(
                        a[field].split(".").reverse().join("-")
                    ).getTime();
                    compareB = new Date(
                        b[field].split(".").reverse().join("-")
                    ).getTime();
                } else {
                    compareA = a[field].toString().toLowerCase();
                    compareB = b[field].toString().toLowerCase();
                }

                if (order === "asc") {
                    return compareA > compareB ? 1 : -1;
                } else {
                    return compareA < compareB ? 1 : -1;
                }
            });
        },
        filter: (
            state,
            action: PayloadAction<{ role: string; inArchive: boolean }>
        ) => {
            const { role, inArchive } = action.payload;
            state.list = employeesData.filter(
                (employee) =>
                    (role === "all" || employee.role === role) &&
                    (inArchive === false || employee.isArchive === inArchive)
            );
        },
        updateEmployee: (state, action: PayloadAction<Employee>) => {
            const index = state.list.findIndex(
                (emp) => emp.id === action.payload.id
            );
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },
        addEmployee: (state, action) => {
            // реализация добавление сотрудника (на клиенте)
        },
    },
});

export const { sort, filter, updateEmployee, addEmployee } =
    employeesSlice.actions;

export default employeesSlice.reducer;
