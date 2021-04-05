import{EmployeeCard} from './EmployeeCard.js'

export const EmployeeList = () =>{
    return (
    <div>
        <h2>Employees</h2>
        <article className="animals">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>
    </div>)
    }