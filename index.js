const fs = require('fs')
const employee = [];

const employeeCreate = {
    "Id": "1001",
    "name": "Kenneth", 
    "salary": "950,000"
}

const employeeCreates = {
    "Id": "1002",
    "name": "Karen", 
    "salary": "1,050,000"
}

employee.push(employeeCreate)
employee.push(employeeCreates)

// writing to disk
fs.writeFileSync('jsonfile.json', JSON.stringify(employee))

console.log(JSON.stringify(employee))