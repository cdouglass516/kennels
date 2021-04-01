import React from "react";
import "./Kennel.css";
import { AnimalCard } from "./animal/AnimalCard";
import "./animal/Animal.css";
import { EmployeeCard } from "./employees/Employee.js";
import { LocationCard } from "./locations/LocationCard.js";
import { CustomerCard } from "./customers/CustomerCard.js"

const addr = "500 Puppy Way, Nashville, TN"
const bunny = 'Mighty Mouse';


export const Kennel = (props) => {
    let d = new Date(Date.now());
    let mousedate = `${d.getFullYear()} - ${d.getMonth()} - ${d.getDay()} `;
    return (
        <>
            <h2> Nashville {props.props} Kennels </h2>
            <small>Loving care when you're not there.</small>
            <address>
                <div>Visit Us at the Nashville North Location</div>
                <div>{addr}</div>
                <div className='bunny'>Managed By:{bunny} as: {mousedate}</div>
            </address>
            <h2>Animals</h2>
            <article className="animals">
                <AnimalCard />
                <AnimalCard />
                <AnimalCard />
            </article>
            <h2>Locations</h2>
            <article className="animals">
                <LocationCard />
                <LocationCard />
                <LocationCard />
            </article>
            <h2>Employees</h2>
            <article className="animals">
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
            </article>
            <h2>Customers</h2>
            <article className="animals">
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
            </article>
        </>)
}
