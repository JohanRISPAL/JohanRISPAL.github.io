	<div class="footer">
		<p>Copyright ElBijou</p>
	</div>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<script src="./app/view/assets/js/choice.js"></script>
	<?php 
		if(isset($_GET["player0"])){
	?>
		<script src="./app/view/assets/js/game.js"></script>
	<?php
		}
	?>
</body>
</html>