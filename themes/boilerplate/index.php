<!DOCTYPE html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="">
<![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8" lang="">
<![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9" lang="">
<![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="">
<!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Boilerplate Theme</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="assets/css/style.bundle.css">
	<!--[if lt IE 9]>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
	<![endif]-->
	<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
</head>
<body>
<?php use Exception;

$requestUri = strtolower( ltrim($_SERVER['REQUEST_URI'], '/') );

include 'layout/header.php';

if($_SERVER['REQUEST_URI'] == '/'):
	include THEME_PATH . 'home.php';
elseif($_SERVER['REQUEST_URI'] !== '/'):
	include THEME_PATH . $requestUri . EXT;
else:
	die($requestUri . ' not found');
endif;

include 'layout/footer.php'; ?>
<script src="assets/js/main.js" type="text/javascript"></script>
</body>
</html>
