const Schema = require('./employee_pb')

const Kenneth = new Schema.Employee(); 
Kenneth.setId(1001);
Kenneth.setName("Kenneth");
Kenneth.setSalary(930,000);

console.log(`my name is ${Kenneth.getName}`);