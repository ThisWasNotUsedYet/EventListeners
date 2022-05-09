/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_places_autocomplete_multiple_countries]
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
//<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initMap() {
    let currentLocation = {lng:138.599503 ,lat: -34.921230};
    
    const map = new google.maps.Map(document.getElementById("map"), {
      center: currentLocation,
      zoom: 4,
    });
    const marker = new google.maps.Marker({
        position: currentLocation,
        map: map,
      });
    
    const card = document.getElementById("pac-card");
  
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
  
    // [START maps_places_autocomplete_creation]
    const center = currentLocation;
    // Create a bounding box with sides ~10km away from the center point
    const defaultBounds = {
      north: center.lat + 1.0,
      south: center.lat - 1.0,
      east: center.lng + 1.0,
      west: center.lng - 1.0,
    };
    const input = document.getElementById("pac-input");
    const options = {
      bounds: defaultBounds,
      componentRestrictions: { country: "aus" },
      fields: ["address_components", "geometry", "icon", "name"],
      strictBounds: false,
      types: ["establishment"],
    };
    const autocomplete = new google.maps.places.Autocomplete(input, options);
  
    // [END maps_places_autocomplete_creation]
    // Set initial restriction to the greater list of countries.
    // [START maps_places_autocomplete_countries_multiple]
    autocomplete.setComponentRestrictions({
      country: ["us", "pr", "vi", "gu", "mp", "aus"],
    });
  
    // [END maps_places_autocomplete_countries_multiple]
    // [START maps_places_autocomplete_setbounds]
    //const southwest = { lat: 5.6108, lng: 136.589326 };
    //const northeast = { lat: 61.179287, lng: 2.64325 };
    //const newBounds = new google.maps.LatLngBounds(southwest, northeast);
  
    //autocomplete.setBounds(newBounds);
  
    // [END maps_places_autocomplete_setbounds]
    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById("infowindow-content");
  
    infowindow.setContent(infowindowContent);
  
   
  
    autocomplete.addListener("place_changed", () => {
      infowindow.close();
      marker.setVisible(false);
  
      const place = autocomplete.getPlace();
  
      if (!place.geometry || !place.geometry.location) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }
  
      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17); // Why 17? Because it looks good.
      }
  
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
  
      let address = "";
  
      if (place.address_components) {
        address = [
          (place.address_components[0] &&
            place.address_components[0].short_name) ||
            "",
          (place.address_components[1] &&
            place.address_components[1].short_name) ||
            "",
          (place.address_components[2] &&
            place.address_components[2].short_name) ||
            "",
        ].join(" ");
      }
  
      infowindowContent.children["place-icon"].src = place.icon;
      infowindowContent.children["place-name"].textContent = place.name;
      infowindowContent.children["place-address"].textContent = address;
      infowindow.open(map, marker);
    });
  
    // Sets a listener on a given radio button. The radio buttons specify
    // the countries used to restrict the autocomplete search.
    function setupClickListener(id, countries) {
      const radioButton = document.getElementById(id);
  
      radioButton.addEventListener("click", () => {
        autocomplete.setComponentRestrictions({ country: countries });
      });
    }
  
    setupClickListener("changecountry-usa", "aus");
    setupClickListener("changecountry-usa-and-uot", [
      "us",
      "pr",
      "vi",
      "gu",
      "mp",
      "aus"
    ]);
  }
  
  window.initMap = initMap;
  // [END maps_places_autocomplete_multiple_countries]
  //</script>*/
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_add_map]
// Initialize and add the map

/*function initMap() {
    // [START maps_add_map_instantiate_map]
    // The location of Uluru
    let uluru = { lat: -25.344, lng: 131.031 };
    
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // [END maps_add_map_instantiate_map]
    // [START maps_add_map_instantiate_marker]
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
    // [END maps_add_map_instantiate_marker]
  }
  
 
  // [END maps_add_map]*/