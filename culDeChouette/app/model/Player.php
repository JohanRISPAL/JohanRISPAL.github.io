<?php
Class Player implements JsonSerializable{
	private $_id;
	private $_nom;
	private $_points;

	public function __construct($_id, $_nom, $_points){
		$this->_id = $_id;
		$this->_nom = $_nom;
		$this->_points = $_points;
	}

	public function getID(){
		return $this->_id;
	}

	public function setID($_id){
		$this->_id = $_id;
	}

	public function getNom(){
		return $this->_nom;
	}

	public function setNom($_nom){
		$this->_nom = $_nom;
	}

	public function getPoints(){
		return $this->_points;
	}

	public function setPoints($_points){
		$this->_points = $_points;
	}

	public function jsonSerialize() {
		return array( "_id" => $this->_id, "_nom" => $this->_nom, "_points" => $this->_points );
	}
}
?>