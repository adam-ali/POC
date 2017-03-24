import { Color } from "color";
import { View } from "ui/core/view"; 
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { setHintColor } from "../../utils/hint-util";
import { TextField } from "ui/text-field";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls:["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private page: Page) {
  }
  ngOnInit() {
  }

  GotoCamera() {
    this.router.navigate(["/list"])
  }

}
