/* eslint-disable no-param-reassign */
const fs = require('fs');

/**
 * Counts the students in the csv data file.
 * @param {string} dataPath - The path to the csv.
 * @throws {Error} if the database can't be loaded.
 */
function countStudents(dataPath) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(dataPath, 'utf-8');

    // Split the file into lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Remove the first line (header) and filter out any empty entries
    const students = lines.slice(1);

    // Initialize a dictionary to store the students by field
    const fields = {};

    // Iterate over each student and organize by field
    students.forEach(student => {
      const details = student.split(',');

	  // Check for valid entries with 4 fields
      if (details.length >= 4) {
        const firstName = details[0];
        const field = details[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    });

    // Count the total number of students
    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    // Output the number of students per field and their names
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }

  } catch (err) {
    // If an error occurs, throw the specified error message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
