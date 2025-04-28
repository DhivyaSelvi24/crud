<?php
$host="localhost";
$username="root";
$password="";
$dbname= "crud";

$conn = new mysqli($host,$username,$password,$dbname);
if($conn->connect_error){
    die("connection failed".$conn->connect_error);
}

?>