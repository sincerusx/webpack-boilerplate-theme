<?php

date_default_timezone_set('Europe/London');

ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);
ini_set('display_startup_errors', 1);

/*---------------------------------------------------------------
 * GLOBAL APPLICATION PATHS
 *--------------------------------------------------------------- */
/**
 * @const DS Directory Separator
 */
defined( 'DS' ) || define( 'DS', DIRECTORY_SEPARATOR );

/**
 * @const EXT PHP extension
 */
define( 'EXT', '.php' );

/**
 * @const DOC_ROOT Document Root Path
 */
define( 'DOC_ROOT', realpath( dirname( __DIR__ ) ) . DS );

include DOC_ROOT.'config/bootstrap.php';

$requestUri = ltrim($_SERVER['REQUEST_URI'], '/');

include THEME_PATH . 'index.php';
