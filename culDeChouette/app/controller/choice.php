<?php
try {

	include("./app/view/page/choice.php");

}catch(PDOException $e){
	echo "Dommage va chercher dans ton code où tu as fais l'erreur" . $e->getMessage();
}

	
?>
