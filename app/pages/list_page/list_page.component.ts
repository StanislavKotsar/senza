import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef, Inject} from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { Router } from "@angular/router";
import { EventData } from "data/observable";
import { topmost,Frame } from "ui/frame";
import { isIOS } from "platform";
import { WrapLayout } from "ui/layouts/wrap-layout";
import { View } from "ui/core/view";
import { SideDrawerType, RadSideDrawerComponent } from "nativescript-telerik-ui/sidedrawer/angular";
import { RadSideDrawer, DrawerTransitionBase, SlideInOnTopTransition } from 'nativescript-telerik-ui/sidedrawer';
import * as platformModule from "tns-core-modules/platform";


declare var UIImage: any;
declare var UIBarMetrics: any;
declare var controller: any;
declare var CGSizeMake: any;
@Component({
  selector: "list-app",
  templateUrl: "pages/list_page/list_page.html",
  styleUrls: ["pages/list_page/list_page.css"],
})

export class ListComponent implements OnInit{
  @ViewChild("test") test: ElementRef;
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  data:[{}] = [
    {}
  ];
  height;
  width;
  private _sideDrawerTransition: DrawerTransitionBase;
  private _drawer: SideDrawerType;

  constructor(private page: Page, private frame: Frame,private router: Router, private _changeDetectionRef: ChangeDetectorRef){}
      ngOnInit(){
        

       this.height = platformModule.screen.mainScreen.heightPixels; 
       this.width = platformModule.screen.mainScreen.widthPixels;
       console.log(this.height);  
    this.page.actionBar.navigationButton.visibility = "collapse";
this.page.actionBarHidden = true;
    if (topmost().ios) {
      var navigationBar = topmost().ios.controller.navigationBar;
			navigationBar.setBackgroundImageForBarMetrics(UIImage.new(), UIBarMetrics.UIBarMetricsDefault);
			navigationBar.shadowImage = UIImage.new();
    }
  }

  ngAfterViewInit() {
    this._drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
    }

  nextPage(){
    this.router.navigate(["/item"]);
  }

  toggle() {
    this._drawer.toggleDrawerState();
    this._changeDetectionRef.detectChanges();
  }
  
  enterAccount(){
    this.router.navigate(["/account"]);
  }

  enterFeedback(){
    this.router.navigate(["/feedback"]);
  }

}