'use strict';
var myApp=angular.module('myApp',[]);


myApp.controller('AccCtrl',[
'$scope',function($scope){
	$scope.houses=
	[{
		"name":"Papamoa Beach Resort",
		"description":" is a beautiful, ocean-facing resort nestled in the heart of Papamoa Beach in the Bay of Plenty, set amidst 16-acres of park-like grounds.",
		"image":"img/houses/1.jpg"
	 },
	 {
		"name":"Waihi Beach Top 10 Holiday Park",
		"description":"Whether you're on holiday, visiting friends and relatives or attending events in and around Waihi Beach, Waihi Beach TOP 10 Holiday Resort provides the perfect spot for families, couples, groups, international travellers and business people.",
		"image":"img/houses/2.jpg"
	 },
	 {
		"name":"Aquarius Motor Inn",
		"description":"Aquarius Motor Inn is centrally located on Maunganui Road, about a 10 minute walk to the beach and to Mount Main Street with its cafes, restaurants, bars, and shopping.",
		"image":"img/houses/3.jpg"
	 },
	 {
		"name":"Atlas Suites and Apartments",
		"description":"Atlas Suites and Apartments at Mount Maunganui are modern self-contained apartments, available for holiday or business rental. We can accommodate any length of stay and everything you need is supplied.",
		"image":"img/houses/4.jpg"
	 },
	 {
		"name":"Bay Palm Motel",
		"description":"Bay Palm Motel at Mount Maunganui has 16 fully equipped units that are serviced daily by friendly staff. We are only 150m from the beach, close to Bayfair Mall,Baypark Arena ,and restaurants, with a heated pool.",
		"image":"img/houses/5.jpg"
	 },
	 {
		"name":"Casa del Mare",
		"description":"Papamoa Bed and Breakfast accommodation, Casa del Mare is the perfect bed and breakfast accommodation for short breaks, holidays and for business functions.",
		"image":"img/houses/6.jpg"
	 },
	 {
		"name":"Golden Grove Kiwi Holiday Park",
		"description":"Your hosts at Golden Grove Kiwi Holiday Park are Max and Deborah Sullivan. They believe in a personal approach and don’t mind going the extra mile to make your holiday as enjoyable and relaxing as possible.",
		"image":"img/houses/7.jpg"
	 },
	 {
		"name":"Mount Backpackers",
		"description":"Mount Backpackers is the only Hostel in downtown Mount Maunganui and the closest Hostel to the Mount Main Beaches.",
		"image":"img/houses/8.jpg"
	 },
	 {
		"name":"Oceanside Resort & Twin Towers",
		"description":"Premium beachside accommodation in the heart of Mt Maunganui amongst surf and harbour beaches with cafes, shopping and relaxation.",
		"image":"img/houses/9.jpg"
	 },
	 {
		"name":"Seagulls Guesthouse",
		"description":"Seagulls Guesthouse​ is the genuine flashpacker accommodation that is located in a quiet street and an easy walk to the beaches and shops.We are the perfect place if you are an independent traveller wanting more for your money.",
		"image":"img/houses/10.jpg"
	 }]
}]);


myApp.controller('EatCtrl',[
'$scope',function($scope){
	$scope.eats=
	[{
		"name":"Mills Reef Restaurant & Winery",
		"description":"Mills Reef Winery, nestled on 20 acres of landscaped grounds, just 5 minutes from Tauranga CBD is one of Bay Of Plenty's premier destinations.",
		"image":"img/eat/eat1.jpg"
	 },
	 {
		"name":"Harbourside Waterfront Dining",
		"description":"Dining at Harbourside is about much more than treating the taste buds. Situated in an atmospheric historic building hugging Taurangas water edge, Harbourside is about the setting as well as sensational cuisine and superb service",
		"image":"img/eat/eat2.jpg"
	 },
	 {
		"name":"Lone Star Tauranga",
		"description":"The Lone Star Cafe and Bar Tauranga is famous for providing quality with quantity, using only the best and freshest local produce.",
		"image":"img/eat/eat3.jpg"
	 },
	 {
		"name":"Trinity Wharf Tauranga",
		"description":"Atlas Suites and Apartments at Mount Maunganui are modern self-contained apartments, available for holiday or business rental. We can accommodate any length of stay and everything you need is supplied.",
		"image":"img/eat/eat4.jpg"
	 },
	 {
		"name":"Phil's Place",
		"description":"Bay Palm Motel at Mount Maunganui has 16 fully equipped units that are serviced daily by friendly staff. We are only 150m from the beach, close to Bayfair Mall,Baypark Arena ,and restaurants, with a heated pool.",
		"image":"img/eat/eat5.jpg"
	 },
	 {
		"name":"La Mexica Cantina and Restaurant",
		"description":"Papamoa Bed and Breakfast accommodation, Casa del Mare is the perfect bed and breakfast accommodation for short breaks, holidays and for business functions.",
		"image":"img/eat/eat6.jpg"
	 },
	 {
		"name":"Deckchair Cafe",
		"description":"Your hosts at Golden Grove Kiwi Holiday Park are Max and Deborah Sullivan. They believe in a personal approach and don’t mind going the extra mile to make your holiday as enjoyable and relaxing as possible.",
		"image":"img/eat/eat7.jpg"
	 },
	 {
		"name":"Classic Flyers NZ",
		"description":"Mount Backpackers is the only Hostel in downtown Mount Maunganui and the closest Hostel to the Mount Main Beaches.",
		"image":"img/eat/eat8.jpg"
	 },
	 {
		"name":"BREW Craft Beer Pub",
		"description":"Premium beachside accommodation in the heart of Mt Maunganui amongst surf and harbour beaches with cafes, shopping and relaxation.",
		"image":"img/eat/eat9.jpg"
	 }]
}]);