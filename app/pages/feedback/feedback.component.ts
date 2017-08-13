import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";
import {  SideDrawerType, RadSideDrawerComponent  } from "nativescript-telerik-ui/sidedrawer/angular";
import { RadSideDrawer, DrawerTransitionBase, SlideInOnTopTransition } from 'nativescript-telerik-ui/sidedrawer';
import { Router } from "@angular/router";
import { DockLayout } from "ui/layouts/dock-layout";
import { StarRating } from "nativescript-star-ratings";
import {registerElement} from "nativescript-angular/element-registry";

@Component({ 
	selector: 'feedback',
	templateUrl: 'pages/feedback/feedback.component.html',
	styleUrls: ['pages/feedback/feedback.component.css']
})

export class FeedbackComponent implements OnInit {
	@ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
	stars;
	private _sideDrawerTransition: DrawerTransitionBase;
	private _drawer: SideDrawerType;
	constructor( private page: Page,  private _changeDetectionRef: ChangeDetectorRef, private router:Router) { }

	ngOnInit() {

		this.stars = [{name:"first_star", text:"&#xf006;"}, { name:"second_star", text:"&#xf006;" }, { name:"third_star", text:"&#xf006;"}, { name:"fourth_star", text:"&#xf006;"}, { name:"fith_star", text:"&#xf006;"}];
		this.page.actionBarHidden =true;
		let picker = <DockLayout>this.page.getViewById('picker');
		picker.borderBottomWidth= 1;
		picker.borderBottomColor= new Color("#434343");

		let input=  <TextField>this.page.getViewById('submit');
		input.borderBottomWidth= 1;
		input.borderBottomColor= new Color("#434343");
		
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

	  enterAccount(){
		this.router.navigate(["/account"]);
	  }
}