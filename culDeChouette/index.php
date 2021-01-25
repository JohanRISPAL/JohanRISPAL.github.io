<?php
	session_start();

	if(isset($_GET['p'])){
		include('./app/view/page/header.php');
		include('./app/controller/'.$_GET['p'].'.php');
		include('./app/view/page/footer.php');
	}else{
		include('./app/view/page/header.php');
		include('./app/controller/choice.php');
		include('./app/view/page/footer.php');
	}

?>