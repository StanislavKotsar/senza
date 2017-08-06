import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
import { Color } from "color";
import { Router } from "@angular/router";
@Component({
  selector: "login-app",
  templateUrl: "pages/login_page/login_page.html",
  styleUrls: ["pages/login_page/login_page.css"],
})
export class LoginComponent implements OnInit {

    constructor(private page: Page, private router: Router){}

    ngOnInit(){
      this.page.actionBarHidden = true;
      let passwordTextfield =  <TextField> this.page.getViewById("tpassword");
      console.log(passwordTextfield);
      passwordTextfield.borderBottomWidth= 1;
      passwordTextfield.borderBottomColor= new Color("#434343");
      let emailTextfield =  <TextField> this.page.getViewById("temail");
      emailTextfield.borderBottomWidth= 1;
      emailTextfield.borderBottomColor= new Color("#434343");
    }

    nextPage(){
      this.router.navigate(["list"])
    }
}