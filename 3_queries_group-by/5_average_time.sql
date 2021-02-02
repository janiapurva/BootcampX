SELECT students.name AS student , avg(assignment_submissions.duration) AS average_assignement_duation
FROM students
JOIN assignment_submissions ON student_id = students.id
WHERE end_date IS NULL
GROUP BY student
ORDER BY average_assignement_duation DESC;
