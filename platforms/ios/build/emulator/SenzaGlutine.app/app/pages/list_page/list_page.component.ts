import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { Router } from "@angular/router";
import { EventData } from "data/observable";
import { topmost,Frame } from "ui/frame";
import { isIOS } from "platform";
import { WrapLayout } from "ui/layouts/wrap-layout";
declare var UIImage: any;
declare var UIBarMetrics: any;
declare var controller: any;
@Component({
  selector: "list-app",
  templateUrl: "pages/list_page/list_page.html",
  styleUrls: ["pages/list_page/list_page.css"],
})

export class ListComponent implements OnInit{
  data:[{}] = [
    {}
  ];

  constructor(private page: Page, private frame: Frame,private router: Router){}
      ngOnInit(){
    this.page.actionBar.navigationButton.visibility = "collapse";
    if (topmost().ios) {
      var navigationBar = topmost().ios.controller.navigationBar;
			navigationBar.setBackgroundImageForBarMetrics(UIImage.new(), UIBarMetrics.UIBarMetricsDefault);
			navigationBar.shadowImage = UIImage.new();
    }
  }
  nextPage(){
    this.router.navigate(["/item"]);
  }



}