import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList.js";
import { CustomerList } from "./customers/CustomerList.js";
import { LocationList } from "./locations/LocationList.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { AnimalDetail } from "./animal/AnimalDetail";
import { CustomerDetail } from "./customers/CustomerDetail";
import { EmployeeDetail } from "./employees/EmployeeDetail";
import { LocationDetail } from './locations/LocationDetail';
import { AnimalForm } from './animal/AnimalForm';
import {LocationForm} from './locations/LocationForm';
import {EmployeeForm} from './employees/EmployeeForm';
//import (LocationList)

export const ApplicationViews = () => {
    const person = { name: "Bill", city: "Madison" };
    console.log(person);
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/animals">
                <AnimalList />
            </Route>
            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>
            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            {/* Render the animal list when http://localhost:3000/locations */}
            <Route exact path="/locations">
                <LocationList />
            </Route>
            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>
            <Route path="/locations/create">
                <LocationForm/>
            </Route>

            {/* Render the animal list when http://localhost:3000/employees */}
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/employees/:employeeId(\d+)">
                <EmployeeDetail />
            </Route>
            <Route path="/employees/create">
                <EmployeeForm/>
            </Route>

            {/* Render the animal list when http://localhost:3000/customers */}
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            <Route path="/customers/:customerId(\d+)">
                <CustomerDetail />
            </Route>
        </>
    )
}
