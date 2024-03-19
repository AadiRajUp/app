<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Data</title>
  <style>
    body {
      margin: 0;
      width: 100dvw;
      min-height: 100dvh;
      background-color: wheat;
      display: flex;
      justify-content: center;
    }

    #root {
      margin: 30dvh;
    }
  </style>
</head>

<body>
  <div id="root">
    <?php
    $hostname = 'localhost';
    $username = 'aadi';
    $password = '';
    $database = 'aadi1';
    $conn = new mysqli($hostname, $username, $password, $database);
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT username, message FROM table2";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
      echo '<table border="1">';
      echo '<tr><th>Username</th><th>Message</th></tr>';
      while ($row = $result->fetch_assoc()) {
        echo '<tr>';
        echo '<td>' . $row['username'] . '</td>';
        echo '<td>' . $row['message'] . '</td>';
        echo '</tr>';
      }
      echo '</table>';
      
    } else {
      echo '0 results';
    }
    $conn->close();
    ?>
  </div>
</body>

</html>