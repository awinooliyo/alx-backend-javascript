const fs = require('fs');
/**
 * Counts the students in a csv data file asynchornously.
 * @param {string} dataPath The path to the CSV data file.
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
	  // Get the header row
      const dbFieldNames = fileLines[0].split(',');
	  // Exclude the last column (field)
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      // Iterate over each line (starting from the second line)
      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
		// Skip invalid/empty lines
        if (studentRecord.length < dbFieldNames.length) continue;

        // Student details
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
		// Field/department
        const field = studentRecord[studentRecord.length - 1];

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }

        const studentEntries = studentPropNames
		  // Pair property names with values
          .map((propName, idx) => [propName, studentPropValues[idx]]);
		//Store as an object
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Calculate the total number of students
      const totalStudents = Object.values(studentGroups)
        .reduce((prev, cur) => prev + cur.length, 0);
      console.log(`Number of students: ${totalStudents}`);

      // Output number of students per field and their names
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }

      resolve(true);
    }
  });
});

module.exports = countStudents;
