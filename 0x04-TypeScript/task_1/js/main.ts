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

console.log(firstTeacher);
console.log(secondTeacher);
