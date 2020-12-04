const Schema = require('./employee_pb')
const fs = require('fs')

const Kenneth = new Schema.Employee(); 
Kenneth.setId(1001);
Kenneth.setName("Kenneth");
Kenneth.setSalary(930000);

const Karen = new Schema.Employee();
Karen.setId(1002)
Karen.setName("Karen");
Karen.setSalary(1000000);

const Kelvin = new Schema.Employee();
Kelvin.setId(1003);
Kelvin.setName("Kelvin");
Kelvin.setSalary(1500000)

// adding this to an array 
const employees = new Schema.Employees()
employees.addEmployees(Kenneth)
employees.addEmployees(Karen)
employees.addEmployees(Kelvin)

const byte = employees.serializeBinary()

// writing ti file 
fs.writeFileSync('employeesBinary', byte)

console.log(`my name is ${Kenneth.getSalary()}`);
console.log(`my name is ${Karen.getSalary()}`);
console.log(`the array is ${employees.getEmployeesList()}`);
console.log(`the byte is ${byte}`);

//deserializing things
const employees2 = Schema.Employees.deserializeBinary(byte)
console.log(employees2)