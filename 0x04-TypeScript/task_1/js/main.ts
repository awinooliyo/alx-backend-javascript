interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
};


const firstTeacher: Teacher = {
  firstName: "John",
  lastName: "Doore",
  fullTimeEmployee: true,
  location: "New York",
  contract: false
};


const secondTeacher: Teacher = {
  firstName: "Elimuli",
  lastName: "Ekenya",
  fullTimeEmployee: true,
  location: "Kamaganmbo",
  contract: false
};

interface Directors extends Teacher {
 numberOfReports: number;
};

const firstDirector: Directors = {
  firstName: "Will",
  lastName: "Smith",
  location: "New York",
  fullTimeEmployee: true,
  numberOfReports: 22
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
};

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface studentClassConstructor {
  new(firstName: string, lastName: string): studentClassInterface;
};

interface studentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
};

class StudentClass implements studentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
	this.lastName = lastName;
  };

  workOnHomework(): string {
    return "Currently working";
  };

  displayName(): string {
    return this.firstName;
  };
};

const student = new StudentClass("Amerix", "Lechuli");

console.log(firstTeacher);
console.log(secondTeacher);
console.log(firstDirector);
console.log(printTeacher("Elimuli", "Ekenya"));

console.log(student.displayName());
console.log(student.workOnHomework());
