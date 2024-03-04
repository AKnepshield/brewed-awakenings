import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employees"
                     data-id="${employee.id}"
                     data-name="${employee.name}">
                     ${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

const employeeOrders = (id) => {
    let fulfilledOrders = 0
    let allOrders = getOrders()
    for (const order of allOrders) {
        if (order.employeeId === parseInt(id)) {
            fulfilledOrders += 1            // Increment the number of fulfilled orders
        }
    }
    return fulfilledOrders                  // Return how many orders were fulfilled
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "employees") {
            let employeeId = parseInt(itemClicked.dataset.id)

            for (const employee of employees) {
                if ( employee.id === employeeId ) {

                    const orderCount = employeeOrders(employeeId)

                    window.alert(`${employee.name} sold ${orderCount} products.`)
                }
            }
        }
    }
)
// If item is clicked is data type "employees"
// We are going to set a variable to get employee ID later in code
// Set order counter
// Import getOrder()
// Iterate through orders
// If order # equal employee # add to order counter
// Window alert This employee has sold 
