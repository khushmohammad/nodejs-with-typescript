import express from "express";
import multer from "multer";

const app = express();
const port = 8080;

import fs from "fs";

// Set up multer storage and upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploadedfiles");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Serve HTML form for file upload
app.get("/", (req, res) => {
  fs.readFile("pages/upload-form.html", "utf8", (err, data) => {
    res.write(data);
    res.end();
  });
});

// Handle file upload
app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully.");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
