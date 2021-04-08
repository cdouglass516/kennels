import React from "react"
import { Link } from "react-router-dom";
import "../animal/Animal.css"

export const EmployeeCard = ({employee, handleDeleteEmployee}) => (
    <section className="animal">
        <h3 className="animal__name">{employee.name}</h3>
        <div className="animal__breed">{employee.location}</div>
        <Link to={`/employees/${employee.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Remove</button>
    </section>
)