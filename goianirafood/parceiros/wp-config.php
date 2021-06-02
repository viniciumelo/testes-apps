<?php
define( 'WP_CACHE', true ) ;
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u474676557_9xAVD' );

/** MySQL database username */
define( 'DB_USER', 'u474676557_P0eSN' );

/** MySQL database password */
define( 'DB_PASSWORD', 'ZAtvFVuhJ7' );

/** MySQL hostname */
define( 'DB_HOST', 'mysql' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '1:1 W]2]1Jc;a,.SKx_vI%_$Y`M1y~|+>&o&ert.qB}e9C|Y*7A69uQ.ibTM.*|E' );
define( 'SECURE_AUTH_KEY',   'sH%F--0=[5G$xC*g<x!ApYu6kMg_6j/D*,_1 ]<1q%Nj4smCvydT]};6+a&lp`L ' );
define( 'LOGGED_IN_KEY',     'Apfk[9m*0T~F/ZKLz/ZV!c+N34Uq1Yo9@mX.M=#N=zAjWi.(u/tM)Y@<~K3)L_;U' );
define( 'NONCE_KEY',         '0iC;g>J!L3Wj2LXxd3X(7JD5M,LWbZ-z9_LL-[}sV~@9.UQL`i<mr2Zb@*snC.^H' );
define( 'AUTH_SALT',         '!<v0_?Ge`1RLs]O@We=nMV}ZAg4X*naX`6S|Z!c(QY9p,^!$@OY#7y%80^p=VmqU' );
define( 'SECURE_AUTH_SALT',  'Y!BNqPhQF~(:Dj8navI**I6:!MND:[U-0tY ]5Jh.SD)n4r?=@Oh80,LFVI~CYjr' );
define( 'LOGGED_IN_SALT',    'Lk$`e7=tJbGh&G>T%cMKn4sY6!oo>+`;v#83r)05.ezdn!q;)sVO-evh_[1Th(Me' );
define( 'NONCE_SALT',        '/c/Rg7?+9vATrVwO{iYrOmT?]3?ml*kq2MK1W&Jb,y[4FS%u/:ITQMVf3dr@+M{m' );
define( 'WP_CACHE_KEY_SALT', '&Qj>t?+p0-;67g-Q OC)Vrt{=Yfb xlLet+ [AX d56uK`3s63HpCX^>}<6/6=7i' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
