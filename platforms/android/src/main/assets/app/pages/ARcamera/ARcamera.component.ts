import { View } from "ui/core/view"; 
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import * as camera from "nativescript-camera";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/ARcamera/ARcamera.html",
  styleUrls:["pages/ARcamera/ARcamera-common.css", "pages/ARcamera/ARcamera.css"]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private page: Page) {
  }
  ngOnInit() {
    camera.requestPermissions();
  }

  // gotoCamera() {
  //   // this.router.navigate(["/list"])
  //   camera.takePicture().then(result => {
  //   // result is ImageSource
  //   });
  // }
    

}
