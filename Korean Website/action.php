<!DOCTYPE html>
<html>

<head>
    <title>NOthing</title>
</head>

<body>
    <?php include("secret.php");

        $servername = "localhost";
        $username = USERNAME;
        $password = PASSWORD;
        $dbname = DNAME;


        $conn = mysqli_connect($servername, $username, $password, $dbname);


        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 

        $data = $_REQUEST['korsen'];

        $sql = "INSERT INTO sentences VALUES('$data')";




        

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }






        mysqli_close($conn);

        header("location: index.html",  true,  301 );  
        
        exit;

        ?>
    </body>

</html>
        
//code works, stuff does go into database
//remeber to run through xamp you must put/update project inside hdoc(?) or something whatever
//is on the xamp folder to run through xamp server