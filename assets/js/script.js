// Preloader

function PageLoad() {
  $("body").removeClass("hidden");
  TweenMax.to($(".preloader-text"), 1, {
    force3D: true,
    opacity: 1,
    y: 0,
    delay: 0.2,
    ease: Power3.easeOut,
  });

  var width = 100,
    perfData = window.performance.timing,
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime / 500) % 50) * 70;

  // Percentage Increment Animation
  var PercentageID = $("#precent"),
    start = 1,
    end = 100,
    durataion = time;
  animateValue(PercentageID, start, end, durataion);

  function animateValue(id, start, end, duration) {
    var range = end - start,
      current = start,
      increment = end > start ? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);

    var timer = setInterval(function () {
      current += increment;
      $(obj).text(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  // Fading Out Loadbar on Finised
  setTimeout(function () {
    TweenMax.to($(".percentage, .inner"), 0.7, {
      force3D: true,
      opacity: 0,
      yPercent: -101,
      ease: Power3.easeInOut,
    });
    TweenMax.to($(".preloader-wrap"), 0.7, {
      force3D: true,
      yPercent: -150,
      delay: 0.2,
      ease: Power3.easeInOut,
    });
  }, time);
}
$(document).ready(function () {
    // preloder
    PageLoad();

    // change-navigation-color
    $(".contents").scroll(function () {
        if ($(".contents").scrollTop() > 200) {
            $(".navbar").addClass("nav__color__change");
        } else {
            $(".navbar").removeClass("nav__color__change");
        }
    });

    // Smooth scrolling
    var scrollLink = $(".scroll");
    scrollLink.click(function (e) {
        let elem = $(this.hash);
        if (elem.length) {
            e.preventDefault();
            $("body,html").animate(
                {
                    scrollTop: elem.offset().top,
                },
                250
            );
        }
    });

    $(".navbar-nav>li>a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    // service slider
    $(".service__slider").slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    });

    // video slider
    $(".video__slider").slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    });

    // slide deck slider
    $(".slide__slider").slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    });

    // skill animation progress bar
    // $(".skill__progress").waypoint(
    //   function () {
    //     $(".progress-value span").each(function () {
    //       $(this)
    //         .prop("Counter", 0)
    //         .animate(
    //           {
    //             Counter: $(this).text(),
    //           },
    //           {
    //             duration: 3000,
    //             easing: "swing",
    //             step: function (now) {
    //               $(this).text(Math.ceil(now));
    //             },
    //           }
    //         );
    //     });
    //     $(".skill__progress_item").addClass("js-animation");
    //     this.destroy();
    //   },
    //   { offset: "80%" }
    // );

    // skill animation progress bar
    $(".contents").scroll(function () {
        pos = $(".contents").scrollTop();
        // console.log(pos)
        if (pos > $(".skill__progress_item").offset().top) {
            $(".skill__progress_item").addClass("js-animation");
        }
    });

    // Testimonial slider
    $(".testimonial__slider").slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    });

    // Modal Popup
    $(".popup-button").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false,
    });

    var portfolioGrid = $(".portfolio-item-grid").masonry({
        itemSelector: ".portfolio-item",
    });

    portfolioGrid.imagesLoaded().progress(function () {
        portfolioGrid.masonry("layout");
    });

    // blob animation
    var tl = new TimelineMax({
        yoyo: true,
        repeat: -1,
    });
    tl.to(".blob", 3, {
        attr: {
            d: "M470.3 133c45.8 42.5 75.3 104.8 60.3 152-15 47.3-74.4 79.6-120.2 110.7-45.8 31.2-78.1 61.3-116.5 67.4-38.4 6.1-83-11.7-110.2-42.8-27.1-31.2-36.9-75.8-44.7-128.1-7.8-52.3-13.5-112.4 13.6-154.9 27.2-42.5 87.3-67.4 148.5-68.5 61.1-1 123.4 21.7 169.2 64.2z",
        },
    })
        .to(".blob", 3, {
            attr: {
                d: "M452.9 141.3c41.2 47 67.6 102.8 56.3 147.4-11.3 44.5-60.4 77.8-101.6 120.6-41.1 42.8-74.4           95.3-117.3 104.9-42.9 9.7-95.4-23.4-122.1-66.2-26.7-42.9-27.4-95.4-32.6-153.2-5.2-57.7-14.8-120.7 11.9-167.7 26.6-47 89.6-78 149-74.5 59.4 3.5 115.2 41.7 156.4 88.7z",
            },
        })
        .to(".blob", 3, {
            attr: {
                d: "M423.5 172.8c30.2 33.9 43.8 80.5 42.9 126.3-.9 45.7-16.5 90.5-46.7 113.1-30.1 22.7-74.9 23.3-124.8 28.3-49.8 5.1-104.7 14.7-146.6-8-41.8-22.7-70.6-77.6-57.8-119.8 12.7-42.2 66.9-71.6 108.7-105.5 41.9-33.8 71.3-72 109.4-80.6 38.1-8.6 84.7 12.4 114.9 46.2z",
            },
        })
        .to(".blob", 3, {
            attr: {
                d: "M455.4 151.1c43.1 36.7 73.4 92.8 60.8 136.3-12.7 43.5-68.1 74.4-111.3 119.4-43.1 45-74 104.1-109.8 109-35.9 5-76.7-44.2-111.8-89.2-35.2-45-64.7-85.8-70.8-132.6-6-46.8 11.6-99.6 46.7-136.3 35.2-36.6 88-57.2 142.4-58.8 54.5-1.7 110.6 15.6 153.8 52.2z",
            },
        });
});

// G-Map
/**
 * Created by Kausar on 06/10/2016.
 */
window.marker = null;

function initialize() {
  var map;
  var lat = $("#map").data("lat");
  var long = $("#map").data("long");
  // console.log(lat, long);
  var mapCenter = new google.maps.LatLng(lat, long);
  var style = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#e9e9e9",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#dedede",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#333333",
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#f2f2f2",
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
  ];
  var mapOptions = {
    // SET THE CENTER
    center: mapCenter,
    // SET THE MAP STYLE & ZOOM LEVEL
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    // REMOVE ALL THE CONTROLS EXCEPT ZOOM
    zoom: 13,
    panControl: false,
    scrollwheel: false,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: false,
    streetViewControl: true,
    overviewMapControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
    },
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  // SET THE MAP TYPE
  var mapType = new google.maps.StyledMapType(style, {
    name: "Grayscale",
  });
  map.mapTypes.set("grey", mapType);
  map.setMapTypeId("grey");
  //CREATE A CUSTOM PIN ICON
  var marker_image = $("#map").data("pin");
  var pinIcon = new google.maps.MarkerImage(
    marker_image,
    null,
    null,
    null,
    new google.maps.Size(25, 34)
  );
  marker = new google.maps.Marker({
    position: mapCenter,
    map: map,
    icon: pinIcon,
    title: "bizcred",
  });
}

if ($("#map").length > 0) {
  google.maps.event.addDomListener(window, "load", initialize);
}

const locations = [
    {
        name: "API Days NYC",
        loc: "New York City, NY",
        action: "gave a talk and workshop",
        title: "gaining trust in APIs and live coding an NBA app",
        presentation: "https://noti.st/anthonyjdella/FW4Dy9",
        report: "https://anthonydellavecchia.com/blog/api-days-report/",
        year: "July 2022",
        image: "/images/trip-report/apidays4.JPG",
        lat: 40.7128,
        long: -74.006,
    },
    {
        name: "Twilio Meetup",
        loc: "Seattle, WA",
        action: "gave a talk and workshop",
        title: "building a Halloween App with Twilio",
        presentation: "https://noti.st/anthonyjdella/YEMatV",
        report: "https://anthonydellavecchia.com/blog/halloween-report/",
        year: "October 2022",
        image: "/images/trip-report/halloween9.jpg",
        lat: 47.6062,
        long: -122.3321,
    },
    {
        name: "Transform Together",
        loc: "Chicago, IL",
        action: "gave a talk and workshop",
        title: "building an app that sends pictures of mars via email",
        presentation: "https://noti.st/anthonyjdella/6TEdbM",
        report: "",
        year: "June 2022",
        image: "/images/trip-report/transform1.jpeg",
        lat: 41.8781,
        long: -87.6298,
    },
    {
        name: "PennApps",
        loc: "Philadelphia, PA",
        action: "gave a talk and workshop",
        title: "building an app that summarizes an images text",
        presentation: "https://noti.st/anthonyjdella/L6gFMA",
        report: "",
        year: "September 2022",
        image: "/images/trip-report/pennapps1.jpeg",
        lat: 39.9522,
        long: -75.1932,
    },
    {
        name: "Spiceworld",
        loc: "Austin, TX",
        action: "gave a talk and workshop",
        title: "building an app summarizes an images text",
        presentation: "https://noti.st/anthonyjdella/L6gFMA",
        report: "https://anthonydellavecchia.com/blog/spiceworld-report/",
        year: "September 2022",
        image: "/images/trip-report/spice3.jpg",
        lat: 30.2672,
        long: -97.7431,
    },
    {
        name: "KCDC",
        loc: "Kansas City, MO",
        action: "attended",
        title: "connecting with developers",
        presentation: "",
        report: "",
        year: "August 2022",
        image: "/images/trip-report/kcdc1.jpg",
        lat: 39.0997,
        long: -94.5786,
    },
    {
        name: "DjangoCon",
        loc: "San Diego, CA",
        action: "attended",
        title: "connecting with the Django community",
        presentation: "",
        report: "https://anthonydellavecchia.com/blog/djangocon-report/",
        year: "October 2022",
        image: "/images/trip-report/django4.jpg",
        lat: 32.7157,
        long: -117.1611,
    },
];

const style = [
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#e9e9e9",
            },
            {
                lightness: 17,
            },
        ],
    },
    {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
            {
                color: "#f5f5f5",
            },
            {
                lightness: 20,
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#ffffff",
            },
            {
                lightness: 17,
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#ffffff",
            },
            {
                lightness: 29,
            },
            {
                weight: 0.2,
            },
        ],
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
            {
                color: "#ffffff",
            },
            {
                lightness: 18,
            },
        ],
    },
    {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
            {
                color: "#ffffff",
            },
            {
                lightness: 16,
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                color: "#f5f5f5",
            },
            {
                lightness: 21,
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                color: "#dedede",
            },
            {
                lightness: 21,
            },
        ],
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                visibility: "on",
            },
            {
                color: "#ffffff",
            },
            {
                lightness: 16,
            },
        ],
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                saturation: 36,
            },
            {
                color: "#333333",
            },
            {
                lightness: 40,
            },
        ],
    },
    {
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
            {
                color: "#f2f2f2",
            },
            {
                lightness: 19,
            },
        ],
    },
    {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#fefefe",
            },
            {
                lightness: 20,
            },
        ],
    },
    {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#fefefe",
            },
            {
                lightness: 17,
            },
            {
                weight: 1.2,
            },
        ],
    },
];

function initializeTalkMap() {
  var map = new google.maps.Map(document.getElementById("talkMap"), {
      zoom: 4,
      center: new google.maps.LatLng(40.0902, -95.7129),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      draggable: true,
      panControl: false,
      scrollwheel: false,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: false,
      streetViewControl: false,
      overviewMapControl: false,
      disableDoubleClickZoom: true,
      fullscreenControl: false,
      zoomControlOptions: {
          style: google.maps.ZoomControlStyle.LARGE,
      },
  });

  var mapType = new google.maps.StyledMapType(style, {
      name: "Grayscale",
  });
  map.mapTypes.set("grey", mapType);
  map.setMapTypeId("grey");

  var infowindow = new google.maps.InfoWindow();

  var marker_image = $("#talkMap").data("pin");
  var pinIcon = new google.maps.MarkerImage(
      marker_image,
      null,
      null,
      null,
      new google.maps.Size(25, 34)
  );

  locations.forEach(placeMarker);

  function placeMarker(locations) {
    var contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h3 id="firstHeading" class="firstHeading">' +
        locations.name +
        "</h3>" +
        '<div id="bodyContent">' +
        "<p><b>" + locations.loc + "</b>" +
        "<p>On " + locations.year + ", I " + locations.action + " at " + locations.name +
        ". The topic was about " + "<a href='" + locations.presentation + "'" + " target='_blank'>" + locations.title + "</a>" + ".</p>" +
        "</p>" +
        '<img src="' + locations.image + '" width="auto" height="auto">' +
        '<p>Trip Report: <a href="' + locations.report + '" target="_blank">' +
        "view here</a> " +
        "</p>" +
        "</div>" +
        "</div>";

      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations.lat, locations.long),
          map: map,
          icon: pinIcon,
      });
      google.maps.event.addListener(marker, "click", function () {
          infowindow.close();
          infowindow.setContent(`<div id="infowindow">${contentString}</div>`);
          infowindow.open(map, marker);
      });
  }
}

if ($("#talkMap").length > 0) {
    google.maps.event.addDomListener(window, "load", initializeTalkMap);
}