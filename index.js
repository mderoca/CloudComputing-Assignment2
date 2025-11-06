const path = require("path");
const express = require("express");

const app = express();

// Make files in the /public folder available to everyone
app.use(express.static(path.join(__dirname, "public")));

// Simple check to make sure the server is working
app.get("/api/health", (req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

// Start the server on the port from the environment or 3000 if local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running → http://localhost:${PORT}`);
});
