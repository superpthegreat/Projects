
    <?php include("secret.php");

        $servername = "localhost";
        $username = USERNAME;   //defined in secret.php
        $password = PASSWORD;   //defined in secret.php
        $dbname = DNAME;        //defined in secret.php

        $conn = mysqli_connect($servername, $username, $password, $dbname);


        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        /*

        //run query
        $query = mysqli_query($conn, "SELECT * FROM sentences");

        //set array
        $array = array();

        //look through query
        while($row = mysqli_fetch_array($query))
        {
            //add each row returned into an array
            $array[] = $row['sentence'];
            echo $row['sentence'];
        }

        //debug
        //print_r($array);        //show all array data
        //echo $array[0]['sentence']; //print first row, in our case only row
        
        */


        


        //testing
        $sql = "SELECT * FROM sentences";
        $result = mysqli_query($conn, $sql);
        $myarray = array();
        if (mysqli_num_rows($result) > 0)
        {
            while($row = mysqli_fetch_array($result))
            {
                $myarray[] = $row[0];
                //array_push($myarray, $row);
            }
        }


        

        mysqli_close($conn);
        
        //test
       // $phpvar = ["Foo", "Var", "Bar"];
       // echo json_encode($phpvar);
        //print_r($myarray);        //show all array data

        echo json_encode($myarray);

        exit;
        
        //SEEMS MY PROBMLEM NOW IS MAKING SURE THAT THE ARRAY WE SEND TO JS IS FORMATTED CORRECTLY.
        //IT WORKS???? WHAT THE FUYCK

 
        
        
        
        
        ?>

 


