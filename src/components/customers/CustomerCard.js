import React from "react"
import "../animal/Animal.css"


let custs = [{ name: "Hanna Montanna", addr: "878 One Way Drive" }, { name: "Yogi Bear", addr: "878 One Way Drive" },
{ name: "Fred Flinstone", addr: "878 One Way Drive" },
{ name: "Barney Rubble", addr: "878 One Way Drive" },
{ name: "Tasmanian Devil", addr: "878 One Way Drive" },
{ name: "Gandalf", addr: "878 One Way Drive" },
{ name: "Luke Skywalker", addr: "878 One Way Drive" },
{ name: "Chewie the Wookie", addr: "878 One Way Drive" },
{ name: "Frodo Baggins", addr: "878 One Way Drive" },
{ name: " Leonard 'Bones' McCoy", addr: "878 One Way Drive" }];
export const CustomerCard = () => {
    return (
        <div className="animals">
        {   custs.map((item, index) => (
                    <section className="animal" key={index}>
                        <          h3 className="animal__name">{item.name}</h3>
                        <div className="animal__breed">Address: {item.addr}</div>
                    </section>
            ))}
        </div>
            )
}