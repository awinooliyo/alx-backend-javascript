const http = require('http');
const fs = require('fs');
const path = require('path');

/**
 * Function that reads the database file and returns a Promise.
 * This function is adapted from `3-read_file_async.js`.
 * @param {string} dataPath - Path to the CSV database file.
 * @returns {Promise<string>} - Promise that resolves to the student list output.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    if (data) {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');

      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        if (studentRecord.length < dbFieldNames.length) continue;

        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }

        const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object.values(studentGroups).reduce((prev, cur) => prev + cur.length, 0);
      let result = `Number of students: ${totalStudents}\n`;

      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        result += `Number of students in ${field}: ${group.length}. List: ${studentNames}\n`;
      }

      resolve(result.trim());
    }
  });
});

/**
 * HTTP server that responds with different content based on the URL path.
 * @module 5-http
 */
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    // If the URL path is '/', display the welcome message
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // If the URL path is '/students', read the database and display the student list
    const databasePath = process.argv[2];

    if (!databasePath) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Database path not provided');
      return;
    }

    countStudents(databasePath)
      .then((studentData) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${studentData}`);
      })
      .catch((err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(err.message);
      });
  } else {
    // If the URL is not recognized, return a 404 error
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Server listens on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app variable
module.exports = app;
