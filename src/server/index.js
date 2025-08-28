const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = 5000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ugcc"
});

db.connect((err) => {
  if (err) {
    console.error("Database did not connect due to ", err);
    return;
  }
  console.log("Database Connected Successfully");
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/api/registration", (req, res) => {
  const formdata = req.body;

  const degreeValue = formdata.Degree?.trim() || null;
  const skillLevelValue = formdata.skillLevel?.trim() || null;
  const cyberInterestValue = Array.isArray(formdata.cyberInterest)
    ? formdata.cyberInterest.filter(v => v.trim() !== "").join(",")
    : formdata.cyberInterest?.trim() || null;
  const isMemberValue = formdata.isMember === "Yes" ? 1 : 0;

  const query = `INSERT INTO users 
    (email, fullName, phoneNum, isMember, Degree, yearOfStudy, usi, reason, cyberInterest, skillLevel, password)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    formdata.email,
    formdata.fullName,
    formdata.phoneNum || null,
    isMemberValue,
    degreeValue,
    formdata.yearOfStudy || null,
    formdata.usi,
    formdata.reason || null,
    cyberInterestValue,
    skillLevelValue,
    formdata.password
  ];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "SERVER_ERROR", message: err.message });
    }
    res.status(200).json({ message: "Form submitted successfully" });
  });
});


app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password required" });
    }

    const query = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }

        if (results.length > 0) {
            res.json({ message: "Login successful", user: results[0] });
        } else {
            res.status(401).json({ error: "Invalid email or password" });
        }
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});