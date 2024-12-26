<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set the filename for the counter
$file = "counter.txt";

// Check if file exists, if not create it with a zero count
if (!file_exists($file)) {
    $handle = fopen($file, "w");
    fwrite($handle, "0");
    fclose($handle);
}

// Read the current count
$count = (int)file_get_contents($file);

// Increment the count
$count++;

// Write the new count back to the file
file_put_contents($file, $count);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Visitor Counter</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div class="container">
        <h1>Welcome to Our Web Page</h1>
        <h2>You are visitor number:</h2>
        <div class="count"><?php echo $count; ?></div>
    </div>
</body>
</html>
