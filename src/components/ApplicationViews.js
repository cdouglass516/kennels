import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList.js"
import { CustomerList } from "./customers/CustomerList.js"
import { LocationList } from "./locations/LocationList.js"
import {EmployeeList} from "./employees/EmployeeList.js"
//import (LocationList)

export const ApplicationViews = () => {
    const person = {name :"Bill", city : "Madison"};
    console.log(person);
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalList/>
            </Route>
            {/* Render the animal list when http://localhost:3000/locations */}
            <Route path="/locations">
                <LocationList />
            </Route>

            {/* Render the animal list when http://localhost:3000/employees */}
            <Route path="/employees">
                <EmployeeList />
            </Route> 

            {/* Render the animal list when http://localhost:3000/customers */}
            <Route path="/customers">
                <CustomerList />
            </Route>             
        </>
    )
}
