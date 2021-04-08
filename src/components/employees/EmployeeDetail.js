import React, { useState, useEffect } from 'react';
import { getEmployeeById,deleteEmployee } from '../../modules/EmployeeManager';
import '../../css/detail.css';
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [employee, setEmployee] = useState({ name: "", location: "" });
    const { employeeId } = useParams();
    const history = useHistory();
    const handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        setIsLoading(true);
        deleteEmployee(employeeId).then(() =>
          history.push("/employees")
        );
      };
    useEffect(() => {
        getEmployeeById(employeeId)
            .then(employee => {
                setEmployee({
                    name: employee.name,
                    location: employee.location?.name
                });
                setIsLoading(false);
            });
    }, [employeeId]);

    return (
        <section className="animal">
            <h3 className="animal__name">{employee.name}</h3>
            <div className="animal__breed">location: {employee.location}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Delete Employee
       </button>
        </section>
    )



}