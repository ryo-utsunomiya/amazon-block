<?php

require_once dirname( __FILE__ ) . '/../amazonjs/amazonjs.php';

class AmazonJSAdapter {
	const HANDLE = 'amazon-block';

	/**
	 * @var Amazonjs
	 */
	private $amazonjs;

	/**
	 * AmazonJSAdapter constructor.
	 *
	 * @param Amazonjs $amazonjs
	 */
	public function __construct( Amazonjs $amazonjs ) {
		$this->amazonjs = $amazonjs;
	}

	public function enqueue_assets() {
		$this->enqueue_styles();
//		$this->register_scripts();
//		$this->enqueue_scripts();
	}

	private function enqueue_styles() {
		if ( $this->amazonjs->settings['displayCustomerReview'] ) {
			wp_enqueue_style( 'thickbox' );
		}

		if ( $this->amazonjs->settings['overrideThemeCss'] ) {
			wp_enqueue_style( self::HANDLE, $this->amazonjs->url . '/css/amazonjs-force.css', array(), Amazonjs::VERSION );
		} else {
			wp_enqueue_style( self::HANDLE, $this->amazonjs->url . '/css/amazonjs.css', array(), Amazonjs::VERSION );
		}
		if ( $this->amazonjs->settings['customCss'] ) {
			wp_enqueue_style( self::HANDLE . '-custom', get_stylesheet_directory_uri() . '/amazonjs.css' );
		}
	}

	private function register_scripts() {
		wp_register_script( 'jquery-tmpl', $this->amazonjs->url . '/components/js/jquery-tmpl/jquery.tmpl.min.js', array( 'jquery' ), '1.0.0pre' );

		$depends = array( 'jquery-tmpl' );
		if ( $this->amazonjs->settings['displayCustomerReview'] ) {
			$depends[] = 'thickbox';
		}
		wp_register_script( self::HANDLE, $this->amazonjs->url . '/js/amazonjs.js', $depends, Amazonjs::VERSION, true );
		if ( $this->amazonjs->settings['customJs'] ) {
			wp_register_script( self::HANDLE . '-custom', get_stylesheet_directory_uri() . '/amazonjs.js', array( 'amazonjs' ), Amazonjs::VERSION );
		}
	}

	private function enqueue_scripts() {
		$country_codes = array();
		$wpurl         = get_bloginfo( 'wpurl' );

		$region = array();
		foreach ( $this->amazonjs->countries as $code => $value ) {
			if ( in_array( $code, $country_codes ) ) {
				foreach ( array( 'linkTemplate' ) as $attr ) {
					$region[ 'Link' . $code ] = $this->amazonjs->tmpl( $value[ $attr ], array( 't' => $this->amazonjs->settings[ 'associateTag' . $code ] ) );
				}
			}
		}

		$amazonVars = array(
			'thickboxUrl'             => $wpurl . '/wp-includes/js/thickbox/',
			'regionTemplate'          => $region,
			'resource'                => array(
				'BookAuthor'          => __( 'Author', $this->amazonjs->text_domain ),
				'BookPublicationDate' => __( 'PublicationDate', $this->amazonjs->text_domain ),
				'BookPublisher'       => __( 'Publisher', $this->amazonjs->text_domain ),
				'NumberOfPagesValue'  => __( '${NumberOfPages} pages', $this->amazonjs->text_domain ),
				'ListPrice'           => __( 'List Price', $this->amazonjs->text_domain ),
				'Price'               => __( 'Price', $this->amazonjs->text_domain ),
				'PriceUsage'          => __( 'Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on [amazon.com or endless.com, as applicable] at the time of purchase will apply to the purchase of this product.', $this->amazonjs->text_domain ),
				'PublicationDate'     => __( 'Publication Date', $this->amazonjs->text_domain ),
				'ReleaseDate'         => __( 'Release Date', $this->amazonjs->text_domain ),
				'SalesRank'           => __( 'SalesRank', $this->amazonjs->text_domain ),
				'SalesRankValue'      => __( '#${SalesRank}', $this->amazonjs->text_domain ),
				'RunningTime'         => __( 'Run Time', $this->amazonjs->text_domain ),
				'RunningTimeValue'    => __( '${RunningTime} minutes', $this->amazonjs->text_domain ),
				'CustomerReviewTitle' => __( '${Title} Customer Review', $this->amazonjs->text_domain ),
				'SeeCustomerReviews'  => __( 'See Customer Reviews', $this->amazonjs->text_domain ),
				'PriceUpdatedat'      => __( '(at ${UpdatedDate})', $this->amazonjs->text_domain ),
			),
			'isCustomerReviewEnabled' => ( $this->amazonjs->settings['displayCustomerReview'] ) ? true : false,
			'isTrackEventEnabled'     => ( $this->amazonjs->settings['useTrackEvent'] ) ? true : false,
			'isFadeInEnabled'         => ( $this->amazonjs->settings['useAnimation'] ) ? true : false,
			'items'                   => array(),

		);
		wp_localize_script( self::HANDLE, 'amazonjsVars', $amazonVars );

		wp_enqueue_script( self::HANDLE );
		if ( $this->amazonjs->settings['customJs'] ) {
			wp_enqueue_script( self::HANDLE . '-custom' );
		}
	}
}
