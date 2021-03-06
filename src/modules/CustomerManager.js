const remoteURL = "http://localhost:5002";

  export const getCustomerById = (id) => {
    //be sure your animals have good data and related to a location and customer
   return fetch(`${remoteURL}/customers/${id}?_embed=animals`)
    .then(res => res.json()).then(response =>{
      return response;
    })
  }

  export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
    .then(result => result.json())
  }

  export const deleteCustomer = (id) =>{
    return fetch(`${remoteURL}/customers/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }