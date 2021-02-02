SELECT day, count (*) as total_assignements
FROM assignments
GROUP BY day
ORDER BY day;