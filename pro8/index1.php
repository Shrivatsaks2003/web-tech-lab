<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Student Records Sorting</title>
<link rel="stylesheet" href="style1.css"/>
</head>
<body>
<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test"; // Change to your database name
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
// Fetch data
$sql = "SELECT id, name, marks FROM students";
$result = $conn->query($sql);
$students = [];
if ($result->num_rows > 0) {
while ($row = $result->fetch_assoc()) {
$students[] = $row;
}
}
// Close connection
$conn->close();
// Implementing selection sort on the $students array
// Let's sort by 'name' alphabetically
function selectionSort(&$arr, $key) {
$length = count($arr);
for ($i = 0; $i < $length - 1; $i++) {
$minIndex = $i;
for ($j = $i + 1; $j < $length; $j++) {
if ($arr[$j][$key] < $arr[$minIndex][$key]) {
$minIndex = $j;
}
}
// Swap
$temp = $arr[$i];
$arr[$i] = $arr[$minIndex];
$arr[$minIndex] = $temp;
}
}
// Sort by name
selectionSort($students, 'name');
?>
<div class="container">
<h1>Student Records (Sorted by Name)</h1>
<table>
<tr>
<th>ID</th>
<th>Name</th>
<th>Marks</th>
</tr>
<?php foreach ($students as $student): ?>
<tr>
<td><?php echo htmlspecialchars($student['id']); ?></td>
<td><?php echo htmlspecialchars($student['name']); ?></td>
<td><?php echo htmlspecialchars($student['marks']); ?></td>
</tr>
<?php endforeach; ?>
</table>
</div>
</body>
</html>