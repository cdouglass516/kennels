import React, { useState, useEffect } from 'react';
//import the components we will need
import { useHistory } from "react-router-dom";
import { EmployeeCard } from './EmployeeCard';
import { getAllEmployees, getEmployeeById, deleteEmployee } from '../../modules/EmployeeManager';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const history = useHistory();
    const getEmployees = () => {
        return getAllEmployees().then(EmployeesList => {
            setEmployees(EmployeesList)
        });
    };
    const handleDeleteEmployee = id => {
        deleteEmployee(id)
            .then(() => getAllEmployees().then(setEmployees))
    };
    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <React.Fragment>
            <div>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { history.push("/employees/create") }}>
                        Add New Employee
                    </button>
                </section>
            </div>
            <div className="container-cards">
                {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} handleDeleteEmployee={handleDeleteEmployee} />)}

            </div>
        </React.Fragment>
    )
}