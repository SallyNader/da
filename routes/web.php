<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('english.home');
});


Route::get('best-top-lead-generation-marketing-advertising-company-twitter-ads-ideas', function () {
    return view('english.leadgeneration');
});



Route::get('best-top-mobile-app-marketing-advertising-company-top-ios-app-development-company', function () {
    return view('english.mobileapp');
});



Route::get('best-top-online-marketing-company-facebook-google-display-network-ad-marketing-solutions', function () {
    return view('english.onlinemarketing');
});



Route::get('best-online-shoe-buy-jewelry-fabric-clothing-glasses-store-shopping', function () {
    return view('english.onlinestore');
});



Route::get('top-best-search-engine-optimization-company-white-hat-seo-company-local-seo-marketing-company-pricing', function () {
    return view('english.seo');
});



Route::get('best-top-social-media-management-services-company-pricing-manage-multiple-social-media-accounts', function () {
    return view('english.socialmedia');
});



Route::get('best-top-price-for-software-and-website-development-design-company-hosting-pricing-digital-web-design-agency', function () {
    return view('english.webdesignanddevelopment');
});

Route::get('best-top-digital-marketing-company-largest-social-online-marketing-agency', function () {
    return view('english.aboutus');
});


Route::get('best-top-digital-marketing-company-largest-social-media-online-marketing-agency', function () {
    return view('english.contactus');
});
