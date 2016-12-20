<?php
	 class ConnectionAssets
	{


		public $db;

		function __construct(){}

		public function createDBInstance()
		{
			$this->db = new SQLite3("infos.db") or die ("Unable to open database");
		}

		public function getAppInformation($app)
		{
			$stmt = $this->db->prepare('SELECT * FROM aplicativos where aplicativo = :app');
            $stmt->bindValue(':app',$app, SQLITE3_TEXT);
            $result = $stmt->execute();
			return $result->fetchArray();
		}


		public function closeConnection()
		{
			$this->db->close();
		}
	}
?>

<?php

	 $app = $_GET['nome'];

	$connection = new ConnectionAssets();

	$connection->createDBInstance();

	$array = $connection->getAppInformation($app);


    if(empty($array)){
        
        $array = array
        (
            "aplicativo" => "SalãoVIP",
            "bgcolor" => "#fff",
            "icon" => "assets/public/img/icon.jpg",
            "h1" => "Take your Ionic apps with you!",
            "mini_text" => "Ionic View makes it easy to share your Ionic/Cordova apps with clients and testers around the world, all without having to go through the App Store.",
            "google_link" => "#",
            "apple_link" => "#"
        );
    }

    echo json_encode($array);

   
?>



