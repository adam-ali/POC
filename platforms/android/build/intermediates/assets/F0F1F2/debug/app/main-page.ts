import * as app from 'application';
import { Color } from 'color';
import * as platform from 'platform';
import { Demo } from "./main-view-model";
import { View } from "ui/core/view";
import { ArchitectView } from 'nativescript-wikitudearchitectview';
import * as frameModule from 'ui/frame'
import geolocation = require("nativescript-geolocation");

// import { WikitudeView } from './wikitude';


declare var com : any;

var lat,lon,alt,architectView, AR;
function pageLoaded(args) {
  var page = <View>args.object;
 
// console.dump(com.wikitude);
  
   if (!geolocation.isEnabled()) {
        geolocation.enableLocationRequest();
    }

  console.log(args.object)
  page.bindingContext = new Demo();
  architectView = page.getViewById<ArchitectView>("architectView");
  console.log('pageLoaded');
}
exports.pageLoaded = pageLoaded;

export function urlLoaded(eventData){
  console.log('url loaded: '+ eventData.url);

  geolocation.watchLocation(
    function (loc) {
        if (loc) {
          lat = loc.latitude 
          lon = loc.longitude
          alt = loc.altitude
          // console.dump(architectView);
          architectView._android.setLocation(lat, lon, alt);
          // architectView.callJavaScript(`custom(${lat}, ${lon}, ${alt})`);
            console.log("Received location: " + lat, lon);
        } 
    }, 
    function(e){
        console.log("Error: " + e.message);
    }, 
    {desiredAccuracy: 3, updateDistance: 10,  minimumUpdateTime : 1000 * 10}); // Should update every 20 seconds according to Googe documentation. Not verified.

};

export function urlLoadError(eventData) {
  console.dump(eventData.error);
  console.log('url failed')
};

export function urlInvoked(eventData){
  console.log('url invoked')
};
 
export function passLocation(data) {

}
