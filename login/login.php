<?php
$conn = new mysqli('localhost', 'aadi', '', 'aadi');
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$username = $_POST['userName'];
$password = $_POST['pwd'];
$sql = "SELECT uname, pass FROM table1";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    if ($row['uname'] === $username && $row['pass'] === $password) {
      /* echo "hello World" */

      $sql = "SELECT * FROM table1 WHERE uname = ?";
      $stmt = $conn->prepare($sql);
      $stmt->bind_param("s", $username);
      $stmt->execute();
      $result = $stmt->get_result();
      $row = $result->fetch_assoc();
      echo '<table border="1">';
      echo '<tr><th>ID</th><th>First Name</th><th>Age</th><th>Sex</th><th>Username</th><th>Password</th></tr>';
      echo '<tr>';
      echo '<td>' . $row['id'] . '</td>';
      echo '<td>' . $row['fname'] . '</td>';
      echo '<td>' . $row['age'] . '</td>';
      echo '<td>' . $row['sex'] . '</td>';
      echo '<td>' . $row['uname'] . '</td>';
      echo '<td>' . $row['pass'] . '</td>';
      echo '</tr>';
      echo '</table>';
      echo "<script>onLogin({$row['id']}, {$row['fname']},{$row['age']},{$row['sex']},{$row['uname']},{$row['pass']});</script>";
      header("Location: ../home.html");
      exit();
    }
  }
} else {
  echo 'Error 404 , Account not found!';
}
$conn->close();
expo