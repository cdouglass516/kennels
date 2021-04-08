import React from "react";
import { Link } from "react-router-dom";
import "../animal/Animal.css";

export const CustomerCard = ({ customer , handleDeleteCustomer }) => {
    return (
        <section className="animal">
            <h3 className="animal__name">{customer.id} - {customer.name}</h3>
            <div className="animal__breed">{customer.address}</div>
            <Link to={`/customers/${customer.id}`}>
                <button>Details</button>
            </Link>
            <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Remove</button>
        </section>

    )
}
