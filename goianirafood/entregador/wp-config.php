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
define( 'DB_NAME', 'u474676557_KWgKd' );

/** MySQL database username */
define( 'DB_USER', 'u474676557_CdPko' );

/** MySQL database password */
define( 'DB_PASSWORD', 'G1odbPNgS3' );

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
define( 'AUTH_KEY',          'yhUMWo-:+A_fIhr9r9ctmBnF#u:^xo7}Ae7,T<pt}Z9F0?2Y=,hoOy=x[Z3g-8B}' );
define( 'SECURE_AUTH_KEY',   'D2t[QrBdf+ HyVYN%)9dkR(^qk.8ST@~u^f%@h1e,l:adAu H)rIxjzDm[o=>+sb' );
define( 'LOGGED_IN_KEY',     '*3!QOKt.,%L_JyTKTKlE%I(zi/Cpac97H.eg&5=;d6c$j:9JCUr^`9Lw.}AWS; S' );
define( 'NONCE_KEY',         'Qi9O8wQDV~2ZtTInvVLfly:>{,U!(f`IylS0Tm?:>G(Ymzf|wsJ<[dQe=km^:.=r' );
define( 'AUTH_SALT',         '$)5kE!kjd0-6.NnhCEz}^|{7y[lxo3##&aAF))N2Nzt8.K#~:He41yr(8xZr8mIm' );
define( 'SECURE_AUTH_SALT',  '~8RQa(B9@>>/.ie={A+W*+n:-fS[cL@QsW?:s,jI]Jt I}7EpbEQFH{ (%CAZ<7q' );
define( 'LOGGED_IN_SALT',    '%e3M:Wb/Elo<}JM;r3/?0:RE|7=4t8/^ vXS DD {NGlwx[kD;),k QN{u`Wfs;W' );
define( 'NONCE_SALT',        '5J?B06bGbUF.:]+:006_YX?MWWYhBl5v&j5!R9AGI?azTf)XSJ<=AmI<.kzLA_X7' );
define( 'WP_CACHE_KEY_SALT', 'gSn{nFe{.m&8PFnE-E4lkHbI-t[ Ax(12Lxse5+7xwgQk?L7L#%YL83@{sETGQR5' );

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
