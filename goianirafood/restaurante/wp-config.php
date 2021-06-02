<?php
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
define( 'DB_NAME', 'u474676557_3CMrl' );

/** MySQL database username */
define( 'DB_USER', 'u474676557_AYZPi' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Cmm9JPox15' );

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
define( 'AUTH_KEY',          '-3YGPO+gilmH]>Z$*7siJ/o=y5}g,yX7m&KJ~VLS4;8cz`cu6qK(hMxl-~[vF2N?' );
define( 'SECURE_AUTH_KEY',   'U x7iUkhegAZ#octdA.%MT.AF<8;;YqQ5S1_pMo!X5k=1xJ6BwezvQFez*c)#s<1' );
define( 'LOGGED_IN_KEY',     'N.J=k3|q+ug^w_#ojc;yQx*Kj?=KZ]]RQf%V{1E-^$k?NCl*+7URe5YGit#R7J)P' );
define( 'NONCE_KEY',         '0h`Ubng|W:SL?+ KH[a6_>ci/DGkEUFf-o1%B:ROc( `5.~@D,FY<Y!r[HI$C6IA' );
define( 'AUTH_SALT',         'Sgm00kP(X&wos.>y~@p{6j*r-#O%#]]S=:BSphqh..`]*e4OSZ{!Q2bAnZ6~vQyg' );
define( 'SECURE_AUTH_SALT',  'TP]Oo7f3;;)j2!,vYi(A{Z{!*ggX3t0* z}o(6MC IDnq-DO[v{(OkNvP_skLCov' );
define( 'LOGGED_IN_SALT',    '4S%2Qp04;GdUP@t;Z#rtp.J56}Bj.DQKet+|ylT%lBG@y~EN8&E2<qCRlOhX%D&0' );
define( 'NONCE_SALT',        'M%k;szGOvNR% *y@Og|:y0)Hop^{(zMt(VC=[j>IT[J1SKHiCq diF77JMq6eS?c' );
define( 'WP_CACHE_KEY_SALT', '|!]7`-el,8*!B8|:QCE:06y&^Gql/D}?9RzF1}7_6g(SqwJTl,skmqrVO!IyF]@!' );

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
