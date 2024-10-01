const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @returns {Promise<string>} A promise that resolves to a formatted string of the student count and list.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }

  fs.readFile(dataPath, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const reportParts = [];
    const fileLines = data.toString('utf-8').trim().split('\n');
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

/**
 * Route handlers for the server.
 */
const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', Buffer.byteLength(responseText));
      res.statusCode = 200;
      res.end(responseText);
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', Buffer.byteLength(responseText));
          res.statusCode = 200;
          res.end(responseText);
        })
        .catch((err) => {
          responseParts.push(err.message);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', Buffer.byteLength(responseText));
          res.statusCode = 500;
          res.end(responseText);
        });
    },
  },
];

/**
 * Main request handler for the server.
 */
app.on('request', (req, res) => {
  const routeHandler = SERVER_ROUTE_HANDLERS.find((route) => route.route === req.url);

  if (routeHandler) {
    routeHandler.handler(req, res);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

// Start the server and listen on the specified port and host
app.listen(PORT, HOST, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
});

module.exports = app;
