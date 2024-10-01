const express = require('express');
const fs = require('fs');

// Create an instance of Express
const app = express();

// Define the port
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Function to count students from a CSV file
 * @param {String} dataPath - The path to the CSV file
 * @returns {Promise<String>} - A formatted string containing student information
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const reportParts = [];
    const fileLines = data.trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    fileLines.slice(1).forEach((line) => {
      const studentRecord = line.split(',');
      if (studentRecord.length === dbFieldNames.length) {
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }

        const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }
    });

    const totalStudents = Object.values(studentGroups).reduce((acc, group) => acc + group.length, 0);
    reportParts.push(`Number of students: ${totalStudents}`);

    Object.entries(studentGroups).forEach(([field, group]) => {
      reportParts.push(`Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`);
    });

    resolve(reportParts.join('\n'));
  });
});

// Handle GET requests to the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Handle GET requests to '/students'
app.get('/students', (req, res) => {
  countStudents(DB_FILE)
    .then((studentData) => {
      res.setHeader('Content-Type', 'text/plain');
      res.status(200).send(`This is the list of our students\n${studentData}`);
    })
    .catch((err) => {
      res.setHeader('Content-Type', 'text/plain');
      res.status(500).send(err.message);
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Export the app variable for use in other modules
module.exports = app;
