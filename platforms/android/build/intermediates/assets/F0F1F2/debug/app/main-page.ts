import * as app from 'application';
import { Color } from 'color';
import * as platform from 'platform';
import { Demo } from "./main-view-model";
import { View } from "ui/core/view";
import { ArchitectView } from 'nativescript-wikitudearchitectview'
import * as frameModule from 'ui/frame'
import geolocation = require("nativescript-geolocation");

var lat,long;
function pageLoaded(args) {
   if (!geolocation.isEnabled()) {
        geolocation.enableLocationRequest();
    }

  console.log(args.object)
  var page = <View>args.object;
  page.bindingContext = new Demo();
  var architectView = page.getViewById<any>("architectView");
  console.log('pageLoaded');



}
exports.pageLoaded = pageLoaded;

export function urlLoaded(eventData){
  console.log(eventData.url);
  console.log('url loaded');

  geolocation.watchLocation(
    function (loc) {
        if (loc) {
          lat = loc.latitude 
          long = loc.longitude
            console.log("Received location: " + loc.latitude,loc.longitude);
        }
    }, 
    function(e){
        console.log("Error: " + e.message);
    }, 
    {desiredAccuracy: 3, updateDistance: 10, minimumUpdateTime : 1000 * 20}); // Should update every 20 seconds according to Googe documentation. Not verified.

};

export function urlLoadError(eventData) {
  console.dump(eventData.error);
  console.log('url failed')
};

export function urlInvoked(eventData){
  console.log('url invoked')
};
 
export function passLocation(data) {
  var location = "kkk"
//  (lat, long, 0)
}
