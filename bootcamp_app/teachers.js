//importing pool
const { Pool } = require("pg");

// connecting with database and localhost
const pool = new Pool({
  user: "apurvajani",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});


//sanitize input
const cohortName = process.argv[2];
const values = [`%${cohortName}%`];



pool
  .query(
    `
    SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
    FROM teachers
    JOIN assistance_requests ON teacher_id = teachers.id
    JOIN students ON student_id = students.id
    JOIN cohorts ON cohort_id = cohorts.id
    WHERE cohorts.name LIKE $1
    ORDER BY teacher;
`
  )
  .then((res) => {
    res.rowsforEach((row) => {
      console.log(`${row.cohort}: ${row.teacher}`);
    });
  })
  .catch(err =>
    console.error('query error', err.stack));
