<?php
/**
 * Plugin Name:       Comment form autofill
 * Description:       Autofill comment form fields by URL parameters.
 * Version:           1.1
 * Author:            Jory Hogeveen
 * Author URI:        https://www.keraweb.nl
 * Text Domain:       comment-form-autofill
 * GitHub Plugin URI: JoryHogeveen/comment-form-autofill
 */

if ( ! defined ( 'ABSPATH' ) ) {
	die;
}

Comment_Form_Autofill::get_instance();

class Comment_Form_Autofill
{
	/**
	 * @var Comment_Form_Autofill
	 */
	private static $_instance = null;

	/**
	 * @return Comment_Form_Autofill
	 */
	public static function get_instance() {
		if ( ! self::$_instance ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	/**
	 * Comment_Form_Autofill constructor.
	 */
	protected function __construct() {
		add_action( 'wp_footer', __CLASS__ . '::script' );
	}

	/**
	 * Render inline script.
	 */
	public static function script() {
		if ( ! did_action( 'comment_form' ) ) {
			return;
		}

		echo '<script id="keraweb-comment-form-autofill">';
		include 'js/inline-script.js';
		echo '</script>';
	}

}
