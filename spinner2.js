const spinnerChars = ["|", "/", "-", "\\", "|", "/", "-", "\\", "✅🍕✅"]

// const spinner = () => {
let duration = 0;
for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, duration);
  duration += 200;
}
// };

// remove comments on lines 3, 11 and 14 to convert this into a function
// spinner();