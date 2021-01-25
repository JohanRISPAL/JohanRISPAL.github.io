<?php
try {

	if(isset($_GET["winner"])){
		echo "Le grand gagnant est " . $_GET["winner"] . " !";
	}
	include("./app/view/page/endGame.php");

}catch(PDOException $e){
	echo "Dommage va chercher dans ton code où tu as fais l'erreur" . $e->getMessage();
}	
?>