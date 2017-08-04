import { Component, ElementRef, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { Router } from "@angular/router";

@Component({
  selector: "loading-app",
  templateUrl: "pages/loading_page/loading_page.html",
  styleUrls: ["pages/loading_page/loading_page.css"],
})
export class LoadingPage implements OnInit {
    constructor(private page: Page, private router: Router){}
    ngOnInit(){
        this.page.style.backgroundImage = "res://loading_background";
        this.page.style.backgroundRepeat = "no-repeat";
        this.page.style.backgroundSize = "cover";
        this.page.actionBarHidden = true;
    }

    nextPage(){
        this.router.navigate(["/login"]);
    }
}