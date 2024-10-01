/**
 * Prompts the user to enter their name, reads the input from STDIN,
 * and displays a message containing the username.
 *
 * When the user ends the program, a closing message is displayed.
 */
process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("readable", () => {
  const userName = process.stdin.read();

  if (userName) {
    process.stdout.write(`Your name is: ${userName}`);
  }
});

process.stdin.on("end", () => {
  process.stdout.write("This important software is now closing\n");
});
