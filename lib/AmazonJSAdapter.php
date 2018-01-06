<?php

if ( ! defined( 'Amazonjs' ) ) {
    require_once dirname( __FILE__ ) . '/amazonjs/amazonjs.php';
}

if ( ! defined( 'amazonjs_aws_params' ) ) {
    require_once dirname( __FILE__ ) . '/amazonjs/amazonjs-aws-params.php';
}

/**
 * An adapter class which works with AmazonJS plugin.
 */
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
		$this->localize_script();
	}

	private function localize_script() {
		amazonjs_aws_params( $this->amazonjs );

		$amazonBlockVars = array(
			'defaultCountryCode' => $this->amazonjs->default_country_code(),
			'countries'          => $this->amazonjs->countries,
			'searchIndexes'      => $this->amazonjs->search_indexes,
			'noimage'            => [
				'small'  => [
					'src'    => plugins_url() . '/amazon-block/lib/amazonjs/images/noimage-small.jpg',
					'width'  => 60,
					'height' => 75,
				],
				'medium' => [
					'src'    => plugins_url() . '/amazon-block/lib/amazonjs/images/noimage-medium.jpg',
					'width'  => 111,
					'height' => 160,
				],
				'large'  => [
					'src'    => plugins_url() . '/amazon-block/lib/amazonjs/images/noimage-large.jpg',
					'width'  => 300,
					'height' => 430,
				],
			]
		);

		wp_localize_script( self::HANDLE, '_amazonBlockVars', $amazonBlockVars );
	}
}
