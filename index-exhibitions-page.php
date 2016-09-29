<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <title>Exhibitions (Kimono Catalogue)</title>
    <link rel="stylesheet" href="./css/style.css"/>
    <link rel="stylesheet" href="fonts/font-awesome-4.6.3/css/font-awesome.min.css">
   <link href="https://fonts.googleapis.com/css?family=Antic" rel="stylesheet">
    <link rel="apple-touch-icon" sizes="57x57" href="./images/favicons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="./images/favicons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="./images/favicons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="./images/favicons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="./images/favicons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="./images/favicons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="./images/favicons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="./images/favicons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./images/favicons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="./images/favicons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="./images/favicons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./images/favicons/favicon-16x16.png">
    <link rel="manifest" href="./images/favicons/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="./images/favicons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="./node_modules/animate.css/animate.min.css">
</head>
<body class="animated slideInRight">
   <?php include("inc_header.php"); ?>
    <!--section: map-->
    <section class="container one">
        <br>
        <br>
        <h1>Where the KI-MONO RECONSTRUCTION pieces were presented</h1>
        <br>
        <br>
        <div id="map"> </div>
        <script>
          var map;
          var MangghaLatLng = {lat: 50.05076099999999, lng: 19.93152740000005};
          var StokholmLatLng = {lat: 59.32678999999999, lng: 18.081914299999994};
            
          var markerIcon = "./images/Nail_32px.png";
            
          function initMap() {
              
            var styledMapType = new google.maps.StyledMapType(
            [
                {
                  featureType: 'all',
                  stylers: [
                    { saturation: -60,
//                      hue: '#B8B8B8'    
                    }
                  ]
                },{
                  featureType: 'poi.business',
                  elementType: 'labels',
                  stylers: [
                    { visibility: 'off' }
                  ]
                }
              ],
            {name: 'Greyish Map'});
            
            map = new google.maps.Map(document.getElementById('map'), {center: {lat: 52.52000659999999, lng: 13.404953999999975}, zoom: 4, mapTypeControlOptions: { mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'greyish_map']
          }});
              
            map.mapTypes.set('greyish_map', styledMapType);
            map.setMapTypeId('greyish_map');
            
          
            var marker1 = new google.maps.Marker({ position: StokholmLatLng, map: map, draggable: true, title: 'Museum of Far Eastern Antiquities', icon: markerIcon, class: "sweden"});
              
            var marker2 = new google.maps.Marker({ position: MangghaLatLng, map: map, draggable: true, title: 'Manggha Museum of Japanese Art and Technology', icon: markerIcon, class: "poland"});
            
            var places = [];
            places.push(marker1, marker2);
           
            console.log(places);
            
            $(".venue").on("mouseenter", function(){
                console.log("venue found");
                var index = $(this).data("marker");
                var pin = places[index];
                console.log(pin, index);

                pin.setAnimation(google.maps.Animation.BOUNCE);
                
            
            });       
              
              $(".venue").on("mouseout", function(){
                console.log("ok");
                
                var index = $(this).data("marker");
                var pin = places[index];
                pin.setAnimation(null);
            });
              
              places[0].addListener("click", function(){
                  console.log(this.class);
                  
                                  
                  $("html, body").animate({scrollTop: $(".sweden").offset().top}, 1000);
                  
                  
              });
              
                places[1].addListener("click", function(){
                   $("html, body").animate({scrollTop: $(".poland").offset().top}, 1000); 
                });

            
          }
    </script>
   
    </section>
    
    
    <!--section: info about exhibitions-->
    <section class="container two">
        <br>
        <br>
        <h2>VENUES</h2>
        <br>
        <div class="venue sweden" data-marker="0">
        <ul class="stokholm" >
            <li class="title">Title: <span>Ki-mono Experience</span></li>
            <li>Venue: Museum of Eastern Antiques, Stockholm</li>
            <li>2011</li>
            <li>Exhibition official site: <a href="http://kimonoreconstruction.joannabodzek.com/?p=724">Ki-mono Reconstruction by Joanna Bodzek: Stokholm</a></li>
        </ul>
        </div>
        
        <div class="venue poland" data-marker="1">
            <ul class="manggha" >
            <li class="title">Title: <span>Kimono Un-perfect</span></li>
            <li>Venue: Manggha Museum of Japanese Art and Technology, Krakow</li>
            <li>from 18 June 2015 to 13 September 2015</li>
            <li>Exhibition official site: <a href="http://kimonoreconstruction.joannabodzek.com/?cat=54">Ki-mono Reconstruction by Joanna Bodzek: Krakow</a></li>
        </ul>
        </div>
        
        
        
    </section> 

   <?php include("inc_footer.php"); ?>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDny-7n_txiLrysMWV3Xs4bz1GybRLoTgo&callback=initMap"async defer></script>
    <script src="js/jquery-3.1.0.min.js" type="text/javascript"></script>
    <script src="./js/app.js" type="text/javascript"></script>
</body>
</html>
    
