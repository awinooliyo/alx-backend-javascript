/**
 * Prompts the user to enter their name, reads the input from STDIN,
 * and displays a message containing the username.
 *
 * When the user ends the program, a closing message is displayed.
 *
 * @example
 * Output:
 * // Welcome to Holberton School, what is your name?
 * // Erick
 * // Your name is: Erick
 * // This important software is now closing
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
