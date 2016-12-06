window.onload = function() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		paginationClickable: true,
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: 4000,
		autoplayDisableOnInteraction: false
	});
	var swiper = new Swiper('.swiper-container1', {
        pagination: '.swiper-pagination',
        slidesPerView: '3',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30
    });
};

// Google Map
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 50.4386, lng: 30.5225},
		zoom: 17,
		mapTypeControl: false,
		scrollwheel: false
	});

	var image = '../img/map-ic.png';
	var beachMarker = new google.maps.Marker({
		position: {lat: 50.4389, lng: 30.52315},
		map: map,
		icon: image
	});
	var styleControl = document.getElementById('style-selector-control');
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

	var styleSelector = document.getElementById('style-selector');
	map.setOptions({styles: styles[styleSelector.value]});

	styleSelector.addEventListener('change', function() {
		map.setOptions({styles: styles[styleSelector.value]});
	});
}

var styles = {
	default: null,
	silver: [
	{
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#000000"
		}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#ffffff"
		}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
		{
			"color": "#626262"
		}
		]
	},
	{
		"featureType": "administrative.country",
		"elementType": "geometry.stroke",
		"stylers": [
		{
			"color": "#ffffff"
		}
		]
	},
	{
		"featureType": "administrative.land_parcel",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#ffffff"
		}
		]
	},
	{
		"featureType": "administrative.province",
		"elementType": "geometry.stroke",
		"stylers": [
		{
			"color": "#4b6878"
		}
		]
	},
	{
		"featureType": "landscape.man_made",
		"elementType": "geometry.fill",
		"stylers": [
		{
			"color": "#000000"
		}
		]
	},
	{
		"featureType": "landscape.man_made",
		"elementType": "geometry.stroke",
		"stylers": [
		{
			"color": "#828282"
		}
		]
	},
	{
		"featureType": "landscape.natural",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#004800"
		}
		]
	},
	{
		"featureType": "landscape.natural.landcover",
		"elementType": "geometry.fill",
		"stylers": [
		{
			"color": "#ffffff"
		}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#454545"
		}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry.fill",
		"stylers": [
		{
			"color": "#4b4b4b"
		}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#ffffff"
		}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text.stroke",
		"stylers": [
		{
			"color": "#242424"
		}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "geometry.fill",
		"stylers": [
		{
			"color": "#002f17"
		}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#3C7680"
		}
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#616161"
		}
		]
	},
	{
		"featureType": "road",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#ffffff"
		}
		]
	},
	{
		"featureType": "road",
		"elementType": "labels.text.stroke",
		"stylers": [
		{
			"color": "#2e2e2e"
		}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "geometry.fill",
		"stylers": [
		{
			"color": "#2e2e2e"
		}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#606060"
		}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [
		{
			"color": "#4d4d4d"
		}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [
		{
			"color": "#c0c0c0"
		}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#c0c0c0"
		}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.stroke",
		"stylers": [
		{
			"color": "#333333"
		}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "geometry.fill",
		"stylers": [
		{
			"color": "#313131"
		}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "geometry.stroke",
		"stylers": [
		{
			"color": "#bbbbbb"
		}
		]
	},
	{
		"featureType": "transit",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#98a5be"
		}
		]
	},
	{
		"featureType": "transit",
		"elementType": "labels.text.stroke",
		"stylers": [
		{
			"color": "#1d2c4d"
		}
		]
	},
	{
		"featureType": "transit.line",
		"elementType": "geometry.fill",
		"stylers": [
		{
			"color": "#727272"
		}
		]
	},
	{
		"featureType": "transit.station",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#c0c0c0"
		}
		]
	},
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#0e1626"
		}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#4e6d70"
		}
		]
	}
	]
};
