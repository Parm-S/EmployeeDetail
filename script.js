function EmployeeDetail(firstName,lastName,dateOfBirth,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth =  dateOfBirth;
    this.address = address;

    
}
EmployeeDetail.prototype.sayHello = function(){
    console.log("adasdadasda");
}
function Employee (employeeId, employeeDesignation , firstName , lastName , dateOfBirth , address ){
    this.employeeId = employeeId;
    this.employeeDesignation = employeeDesignation;
    EmployeeDetail.call(this,firstName,lastName,dateOfBirth,address);
}

Employee.prototype = Object.create(EmployeeDetail.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.printDetail = function(){
   console.log( `Employee Id :  ${employee.employeeId}
    Designation : ${employee.employeeDesignation}
    Name : ${employee.firstName} ${employee.lastName}
    Date of  Birth : ${employee.dateOfBirth}
    Address : ${employee.address}
    `);
}

let employee =  new Employee(1 , "Developer","Parminder" ,"Singh","08-dec-1990","Agra");

employee.printDetail();


