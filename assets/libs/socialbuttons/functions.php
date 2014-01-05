<?php

// Server-side functions for socialButtons

// Dev database socialbuttons, table socialdata

// All methods are meant to be called via ajax, and will echo data or status before calling die()
class Social_Buttons {

	function __construct() {

	}

	private function db_connect() {
		return mysqli_connect('localhost', 'root', 'root', 'socialbuttons');
	}

	public function get() {
		$db = $this->db_connect();

		$result = mysqli_query($db, "SELECT * FROM socialdata WHERE url='" . $_GET['url']);

		mysqli_close($db);
	}

	public function get_latest() {
		$db = $this->db_connect();

		mysqli_close($db);

	}

	public function update() {
		$db = $this->db_connect();



		mysqli_close($db);

	}



}

$social_buttons = new Social_Buttons();

// Get all info
if ($_POST['action'] === 'social-buttons-get') {

}

// Get latest info
if ($_POST['action'] === 'social-buttons-get-latest') {

}

// Update info
if ($_POST['action'] === 'social-buttons-update') {

}