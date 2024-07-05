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

console.log(firstTeacher);
console.log(secondTeacher);
console.log(firstDirector);

