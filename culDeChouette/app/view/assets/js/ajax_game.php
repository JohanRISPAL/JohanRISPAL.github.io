<?php
	include("../../../model/Player.php");

	if(isset($_POST["method"])) {
		$_POST["method"]();
	}

	function getTab() {
		$nbPlayer = count($_POST) - 2;
		$player = array();

		for ($i = 0; $i < $nbPlayer; $i++){
			array_push($player, new Player($i, $_POST["player".$i], 0));
		}
		
		echo json_encode($player);
	}
	
?>