<?php
header("Access-Control-Allow-Origin: http://localhost:5173"); 
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");




// Include DB connection
include 'db.php';
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


// Get raw POST data
$data = json_decode(file_get_contents("php://input"));
error_log(print_r($data, true));  // Logs the incoming user data to the error log

// Optional: check if required fields are present
if (isset($data->name) && isset($data->email)) {
    $name = $conn->real_escape_string($data->name);
    $email = $conn->real_escape_string($data->email);

    $sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "User created successfully"]);
    } else {
        echo json_encode(["error" => "Error: " . $conn->error]);
    }
} else {
    echo json_encode(["error" => "Missing required fields"]);
}

$conn->close();
?>
