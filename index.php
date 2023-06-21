<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lessons</title>
    <script src="script.js"></script>
</head>
<body>   
<h2>Виведення розкладу занять для довільної групи зі списку</h2>
    <select name="Group" id="Group">
        <?php
        include("connect.php");

        try {
            foreach ($dbh->query("SELECT title FROM `groups`") as $row) {
                $optionValue = htmlspecialchars($row[0]);
                echo "<option value='$optionValue'>$optionValue</option>";
            }
        } catch(PDOException $ex) {
            echo $ex->getMessage();
        }
        ?>
    </select>
    <input type="submit" name="butt1" onclick="getgroups()">
        <table border="1">
        <tr><th>День</th><th>Пара</th><th>Аудитория</th><th>Предмет</th><th>Тип занятия</th></tr>
            <tbody id="tabl1"></tbody>
        </table> 
    <h2>Виведення розкладу занять для довільного викладача зі списку</h2>
        <select name="Teacher" id="Teacher">
    <?php
    include("connect.php");
    try {
         foreach($dbh->query("SELECT Name FROM teacher") as $row){
            $optionValue = htmlspecialchars($row[0]);
                echo "<option value='$optionValue'>$optionValue</option>";
        }
    }
    catch(PDOException $ex){
        echo $ex->GetMessage();
    }
    ?>
    </select>
        <input type="submit" value="Результат"onclick="getteacher()">
        <div id="Result2"></div>
<h2>Виведення розкладу занять для аудиторії зі списку</h2>
        <select name="Auditorium" id="Auditorium">
    <?php
    include("connect.php");
    try {
         foreach($dbh->query("SELECT DISTINCT auditorium FROM lesson") as $row){
            $optionValue = htmlspecialchars($row[0]);
                echo "<option value='$optionValue'>$optionValue</option>";
        }
    }
    catch(PDOException $ex){
        echo $ex->GetMessage();
    }
    ?>
    </select>
        <input type="submit" value="Результат" onclick=" getAuditoriumforLessons()">
        <table border = '1'>
    <tbody id= "res3"></tbody>
    </table>
</body>
</html>