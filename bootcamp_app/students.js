//importing pool
const { Pool } =  require('pg');

// connecting with database and localhost
const pool = new Pool({
  user : 'apurvajani',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


//sanitize input
const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
const values = [`%${cohortName}%`, limit];





// making query to get data you can make many query to accesss data


pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`)

  .then(res => {
    //res.rows to acess data from query
    // console.log(res.rows);
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);

    });
  })
  .catch(err =>
    console.error('query error', err.stack));

