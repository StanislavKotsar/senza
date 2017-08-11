import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";
import {  SideDrawerType, RadSideDrawerComponent  } from "nativescript-telerik-ui/sidedrawer/angular";
import { RadSideDrawer, DrawerTransitionBase, SlideInOnTopTransition } from 'nativescript-telerik-ui/sidedrawer';
import { Router } from "@angular/router";
@Component({
	selector: 'my_account',
	templateUrl: 'pages/my_account/my_account.component.html',
	styleUrls: ['pages/my_account/my_account.component.css']
})

export class MyAccountComponent implements OnInit {
	@ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
	ids;
	private _sideDrawerTransition: DrawerTransitionBase;
	private _drawer: SideDrawerType;
	constructor(private page: Page, private _changeDetectionRef: ChangeDetectorRef, private router:Router) { }

	ngOnInit() {
		this.ids = ['first_name','last_name', 'email', 'birth'];
		this.page.actionBarHidden = true;

		this.ids.forEach((id)=>{
			let input=  <TextField>this.page.getViewById(id);
			input.borderBottomWidth= 1;
			input.borderBottomColor= new Color("#434343");
		});




	 }

	 ngAfterViewInit() {
		this._drawer = this.drawerComponent.sideDrawer;
		this._changeDetectionRef.detectChanges();
		}

	 toggle() {
		this._drawer.toggleDrawerState();
		this._changeDetectionRef.detectChanges();
	  }


  enterFeedback(){
    this.router.navigate(["/feedback"]);
  }

}