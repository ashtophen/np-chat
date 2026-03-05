module.exports = {
    proxy: "http://localhost:3000", // The address where your Node.js server runs
    port: 3001, // The port BrowserSync will run on
    files: ["public/**/*.*", "views/**/*.html", "index.js"], // Files to watch for changes
    reloadDelay: 300 // Optional delay for the server to restart first
  };
  