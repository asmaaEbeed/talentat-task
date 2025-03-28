
const express = require("express");
const fs = require("fs");
const cors = require("cors");

const PORT = process.env.PORT || 8081;
const errorChance = 0.1;

let app = express();
app.use(cors());
app.options('*', cors());


app.use(express.json());
app.use((req, res, next) => {
  if (Math.random() <= errorChance) return res.status(500).send(undefined);
  else next();
});

app.post("/track", (req, res) => {
  const { id, from = undefined, to = undefined } = req.body;
  if (!id || typeof from === "undefined" || typeof to === "undefined")
    return res.status(400).json({ error: "Bad Request" });
  else return res.status(204).send(null);
});

app.get("/nav", (req, res) => {
  if (fs.existsSync("nav.json"))
    return res.json(JSON.parse(fs.readFileSync("nav.json", "utf8")));
  else
    return res.json([
      { id: 1, title: "Dashboard", target: "/" },
      {
        id: 2,
        title: "Job Applications",
        target: "/applications",
        children: [
          { id: 7, title: "John Doe", target: "/applications/john-doe" },
          { id: 10, title: "James Bond", target: "/applications/james-bond" },
          {
            id: 20,
            title: "Scarlett Johansson",
            target: "/applications/scarlett-johansson",
            visible: false,
          },
        ],
      },
      {
        id: 3,
        title: "Companies",
        target: "/companies",
        visible: false,
        children: [
          { id: 8, title: "Tanqeeb", target: "/companies/1" },
          { id: 9, title: "Daftra", target: "/companies/2" },
          { id: 11, title: "TBD", target: "/companies/14" },
        ],
      },
      {
        id: 4,
        title: "Qualifications",
        children: [
          { id: 14, title: "Q1", target: "/q1" },
          { id: 15, title: "Q2", target: "/q2" },
        ],
      },
      { id: 5, title: "About", target: "/about" },
      { id: 6, title: "Contact", target: "/contact" },
    ]);
});

app.post("/nav", (req, res) => {
  try {
    const items = req.body;
    console.log("Received Data:", items); // Log received data

    if (!Array.isArray(items)) {
      return res.status(400).json({ error: "Bad Request: Data must be an array" });
    }

    fs.writeFileSync("nav.json", JSON.stringify(items, null, 2), "utf8");
    res.status(200).json({ message: "Nav edited successfully" });
  } catch (error) {
    console.error("Error writing to file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/*Get job data*/
app.get("/jobs", (req, res) => {
  if (fs.existsSync("jobs.json"))
    return res.json(JSON.parse(fs.readFileSync("jobs.json", "utf8")));
  else return res.json([
    {
      "id": 1,
      "title": "Gaming UI designer",
      "company": "Rockstar Games", 
      "location": "ElMansura, Egypt",
      "postedDays": 10,
      "jobType": "Full time",
      "workMode": "Remote",
      "experienceLevel": "0 - 3y of exp",
      "categories": ["Creative / Design", "IT / Software development", "Gaming"]
    },
    {
      "id": 2,
      "title": "Senior UX UI Designer",
      "company": "Eqabi",
      "location": "Cairo, Egypt", 
      "postedDays": 30,
      "jobType": "Full time",
      "workMode": "Hybrid",
      "experienceLevel": "0 - 3y of exp",
      "categories": ["Creative / Design", "IT / Software development"]
    },
    {
      "id": 3,
      "title": "React Frontend developer",
      "company": "Magura",
      "location": "Cairo, Egypt",
      "postedDays": 30,
      "jobType": "Freelance", 
      "workMode": "Remote",
      "experienceLevel": "5 - 7y of exp",
      "categories": ["Creative / Design", "IT / Software development"]
    },
    {
      "id": 4,
      "title": "Gaming UI designer",
      "company": "Rockstar Games",
      "location": "ElMansura, Egypt",
      "postedDays": 10,
      "jobType": "Full time",
      "workMode": "Remote",
      "experienceLevel": "0 - 3y of exp",
      "categories": ["Creative / Design", "IT / Software development", "Gaming"]
    },
    {
      "id": 5,
      "title": "Senior UX UI Designer", 
      "company": "Eqabi",
      "location": "Cairo, Egypt",
      "postedDays": 30,
      "jobType": "Full time",
      "workMode": "Hybrid",
      "experienceLevel": "0 - 3y of exp",
      "categories": ["Creative / Design", "IT / Software development"]
    },
    {
      "id": 6,
      "title": "React Frontend developer",
      "company": "Magura",
      "location": "Cairo, Egypt",
      "postedDays": 30,
      "jobType": "Freelance",
      "workMode": "Remote",
      "experienceLevel": "5 - 7y of exp",
      "categories": ["Creative / Design", "IT / Software development"]
    }
  ]);
});

app.listen(PORT);
