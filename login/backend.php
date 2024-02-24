<?php
$a = $_POST['fname'];
$b = $_POST['age'];
$c = $_POST['sex'];
$d = $_POST['uname'];
$e = $_POST['pass'];
$f = $_POST['cpass'];
if ($a === '' || $b === '' || $c === '' || $d === '' || $e === '' || $f === '') {
  echo '<p>Please add all the necessary informations</p>';
} else {
  $username = 'aadi';
  $password = '';
  $host = 'localhost';
  $db = 'aadi';

  $conn = new mysqli($host, $username, $password, $db);
  if ($conn->connect_error) {
    die("connection failed : " . $conn->connect_error);
  }
  echo 'connected successfully!';


  $stmt = $conn->prepare("INSERT INTO table1(fname, age, sex, uname, pass) VALUES (?, ?, ?, ?, ?)");
  $stmt->bind_param("sisss", $a, $b, $c, $d, $e);

  if ($stmt->execute()) {
    echo "New record has successfully been added";
  } else {
    echo "Error: " . $stmt->error;
  }
  $stmt->close();
  $conn->close();
  header("Location: login.html");
  exit();
}
/* 
CREATE TABLE table1 (
	id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    fname varchar(30),
    age int,
    sex varchar(6),
    uname varchar(30),
    pass varchar(30)
) */