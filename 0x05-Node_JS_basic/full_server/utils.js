const fs = require('fs');

// Function that reads a CSV file and groups student names by their field
module.exports = function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        // If the file is not accessible, reject with an error
        console.error('Error reading the file:', err); // Log the error
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = {};
      const lines = data.trim().split('\n');
      const noHeader = lines.slice(1); // Remove the header line

      noHeader.forEach((line) => {
        if (line) {
          const [firstName, , , field] = line.split(',');

          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName); // Group by field with first names
        }
      });

      // Resolve with the students object (grouped by field)
      resolve(students);
    });
  });
};
