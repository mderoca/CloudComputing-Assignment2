const path = require("path");
const express = require("express");

const app = express();

// Serve everything in /public as static files
app.use(express.static(path.join(__dirname, "public")));

// Simple health check endpoint (handy for uptime checks/load balancers)
app.get("/api/health", (req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

// Bind to the port from env (for cloud) or 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running → http://localhost:${PORT}`);
});
