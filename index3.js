const Schema = require('./students_pb');

const Student1 = new Schema.Student();
Student1.setId(10659488);
Student1.setName("Kenneth");
Student1.setDepartment("College of basic and applied science");
Student1.setGraduated(false)
Student1.setCollege("Sciences")

const Student2 = new Schema.Student();
Student2.setId(10669038);
Student2.setName("Karen");
Student2.setDepartment("College of basic and applied science");
Student2.setGraduated(true)
Student2.setCollege("Sciences")

const Student3 = new Schema.Student();
Student3.setId(10609438);
Student3.setName("Kelvin");
Student3.setDepartment("College of basic and applied science");
Student3.setGraduated(true)
Student3.setCollege("Sciences")

const students = new Schema.Students();
students.addStudents(Student1)
students.addStudents(Student2)
students.addStudents(Student3)


// finding the bytes of the things



