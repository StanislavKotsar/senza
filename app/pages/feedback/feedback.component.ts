import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";
import {  SideDrawerType, RadSideDrawerComponent  } from "nativescript-telerik-ui/sidedrawer/angular";
import { RadSideDrawer, DrawerTransitionBase, SlideInOnTopTransition } from 'nativescript-telerik-ui/sidedrawer';
import { Router } from "@angular/router";
import { DockLayout } from "ui/layouts/dock-layout";

@Component({
	selector: 'feedback',
	templateUrl: 'pages/feedback/feedback.component.html',
	styleUrls: ['pages/feedback/feedback.component.css']
})

export class FeedbackComponent implements OnInit {

	constructor( private page: Page) { }

	ngOnInit() {
		this.page.actionBarHidden =true;
		let picker = <DockLayout>this.page.getViewById('picker');
		picker.borderBottomWidth= 1;
		picker.borderBottomColor= new Color("#434343");
	 }
}