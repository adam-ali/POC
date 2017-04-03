﻿import * as app from 'application';
import { Color } from 'color';
import * as platform from 'platform';
import { Demo } from "./main-view-model";
import { View } from "ui/core/view";
import { ArchitectView } from 'nativescript-wikitudearchitectview'
import * as frameModule from 'ui/frame'

// import { World } from './js/poiwithlabel.js'; 
// import { Marker } from './js/marker.js'; 

function pageLoaded(args) {
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
};

export function urlLoadError(eventData) {
  console.dump(eventData.error);
  console.log('url failed')
};

export function urlInvoked(eventData){
  console.log('url invoked')
};
 
export function urlString(data) {
  // World.loadPoisFromJsonData()

  // Marker(World.locationChanged())
}
