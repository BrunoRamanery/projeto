<?php

$hostname = "localhost";
$bancodedados = "projeto";
$ususario = "root";
$senha = "";

$mysql = new mysqli ($hostname, $bancodedados, $ususario, $senha);
if ($mysqli -> connect_errno){
    echo "FALHA AO CONECTAR :(" . $mysqli->connect_errno .")" . $mysqli->connect_errno;

}
?>