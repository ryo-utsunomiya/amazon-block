=== Amazon Block ===
Contributors: ryo511
Tags: gutenberg, editor
Requires at least: 4.9
Tested up to: 4.9
Requires PHP: 5.6
Stable tag: trunk
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Donate link: Bitcoin( 3AqQnhQEXJ9tA8w54n7ZUiDdeRBrX2onsA )

Add "Amazon" block to your Gutenberg editor. Useful to add affiliate link.

== Description ==

Amazon Block adds "Amazon" block to your Gutenberg editor.
With "Amazon" block, you can add affiliate link easily:

1. Search in Amazon
1. Select item
1. Insert affiliate link

This plugin sends request to Amazon Product Advertising API to search products.
In order to use API, it is necessary to configure your Amazon Product Advertising API access key.

Supported Amazon domains are below:

- [US](http://www.amazon.com)
- [UK](http://www.amazon.co.uk)
- [Germany](http://www.amazon.de)
- [France](http://www.amazon.fr)
- [Japan](http://www.amazon.co.jp/)
- [Canada](http://www.amazon.ca)
- [China](http://www.amazon.cn)
- [Italy](http://www.amazon.it)
- [Spain](http://www.amazon.es))

= Using Amazon Product Advertising API =

Amazon Block requires [Amazon Product Advertising API](https://affiliate-program.amazon.com/gp/advertising/api/detail/main.html)
in order to get Amazon product information by keyword.
Thus, you have to sign up Amazon Product Advertising API and specify your **Access Key** and **Secret Access Key**.
And you must set your associate tags for Amazon Associates also.

== Installation ==

1. Upload `amazon-block` to the `/wp-content/plugins/` directory
1. Activate the plugin through the `Plugins` menu in WordPress
1. Set your associate tags and your keys of the Product Advertising API through the  `Settings` > `Amazonjs` menu in WordPress

== Frequently Asked Questions ==

= Can I use this plugin with Classic Editor? =

Yes. If you are using Classic Editor, this plugin falls back to AmazonJS.

== Screenshots ==

1. Search by Amazon API

== Changelog ==

= 0.2.0 =

* Add "Select template" feature

= 0.1.0 =

* Initial version

== Upgrade Notice ==

This is not the stable version. There will be some breaking changes.
