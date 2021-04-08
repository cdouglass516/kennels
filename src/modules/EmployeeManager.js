const remoteURL = "http://localhost:5002"

  export const getEmployeeById = (id) => {
    //be sure your animals have good data and related to a location and customer
   return fetch(`${remoteURL}/employees/${id}?_expand=location`)
    .then(res => res.json())
  }

  export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees?_expand=location`)
    .then(result => result.json())
    .then(parsedResult => {
      let employees = [];
      parsedResult.forEach(item =>{
        employees.push({id: item.id,name: item.name, location: item.location.name })
      })
      return employees;
    })
  }

  export const deleteEmployee = (id) =>{
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }


  export const addEmployee = (employee) => {
    return fetch(`${remoteURL}/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    }).then(response => response.json())
  }