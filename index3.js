const Schema = require('./students_pb');

const Student1 = new Schema.Student();
Student1.setId(10659488);
Student1.setName("Kenneth");
Student1.setDepartment("College of basic and applied science");
Student1.setGraduated(false)
Student1.setCollege("Sciences")

console.log(`the first student in the university is ${Student1.getName()}`)
