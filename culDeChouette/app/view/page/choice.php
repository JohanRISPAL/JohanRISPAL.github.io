<div class="row">
	<div class="col l8">
		<div class="title">
			<h4>Pour consulter les règles si tu ne les connaits pas : <a href="http://localhost/documentationPortfolio/culDeChouette.php" target="_blank">Les règles</a> </h4>
			<h4>Sinon on ferme sa gueule et on lance la partie gros boudin !</h4>
		</div>
	</div>
	<div class="col l4">
		<div class="col l4 offset-l1">
			<button id="addPlayer">Ajouter un joueur</button>
		</div>
		<div class="col l5 offset-l1">
			<button id="deletePlayer">Supprimer joueur</button>
		</div>
		<div class="col l12">
			<button id="confirm">Confirmer le nombre de joueur</button>
			<div class="errorEmpty" id="errorEmpty"></div>
		</div>
	</div>
</div>
<div class="row">
	<div class="col l12" id="containerPlayer">
		<div class="col l4">
			<div class="player">
				<p>Joueur 1 :</p>
				<input type="text" id="name1" placeholder="Nom :">
			</div>
		</div>
		<div class="otherPlayer" id="otherPlayer"></div>
	</div>
</div>