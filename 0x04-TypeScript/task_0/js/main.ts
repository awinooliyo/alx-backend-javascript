interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: "Erick",
  lastName: "Awino",
  age: 31,
  location: "Nairobi"
};

const secondStudent: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "Los Angeles"
};

const studentsList: Student[] = [firstStudent, secondStudent];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
