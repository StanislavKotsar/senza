import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Page } from "ui/page";
import { Color } from "color";
import { topmost,Frame } from "ui/frame";
import { View } from "ui/core/view";
import * as platformModule from "tns-core-modules/platform";
import { DockLayout } from "ui/layouts/dock-layout";
import * as listPickerModule from "tns-core-modules/ui/list-picker";
import {registerElement} from "nativescript-angular/element-registry";
declare var UIImage: any;
declare var UIBarMetrics: any;
declare var controller: any;
declare var CGSizeMake: any;
declare var	UIColor: any;
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);


@Component({
	selector: 'item_page',
	templateUrl: 'pages/item_page/item_page.component.html',
	styleUrls: ['pages/item_page/item_page.component.css']
})

export class Item_pageComponent implements OnInit {
	@ViewChild("ordertype") ordertype: ElementRef;
	@ViewChild("MapView") mapView: ElementRef;
	show: string = 'rewards';
	starters:[{}];
	main:[{}];
	orederList;
	whiteCardHeight;
	screen = {	
		width:0,
		height:0,
		heightPercent: ''
	}
	startOrder = false;
	select = 0;
	selectedOrder = "Order Table";
	selectedItem: any;
	constructor(private page: Page, private frame: Frame) { }

	ngOnInit() {
		
		this.orederList = ["Order for collection", "Order at table", "Order for delivery"];
		this.screen.width = platformModule.screen.mainScreen.widthPixels;
		this.screen.height = platformModule.screen.mainScreen.heightPixels;
		this.screen.heightPercent = (platformModule.screen.mainScreen.heightPixels/100).toFixed(1);
		if(this.screen.height === 2208) {
			this.whiteCardHeight = -(this.screen.height * 0.78) +'px';
		} else if (this.screen.height === 1136){
			this.whiteCardHeight = -(this.screen.height * 0.86) + 'px';
		} else if (this.screen.height === 1334){
			this.whiteCardHeight = -(this.screen.height * 0.84) + 'px';
		}else{
			this.whiteCardHeight = -(this.screen.height * 0.86) + 'px';
		}

		console.log('whiteCardHeight ', this.whiteCardHeight)
		this.starters = [{ name: 'Pizza Margarita', price: '€2.40', desc: 'Product description goes here', extras:[
			"Extra cheese", "Extra tomato", "Add bacon", "Add ham", "Add egg"
		]},
			{ name: 'Pizza Margarita', price: '€2.40', desc: 'Product description goes here', extras:[
			"Extra cheese", "Extra tomato", "Add bacon", "Add ham", "Add egg"
		]}
		];
		this.main = [{ name: 'Pizza Margarita', price: '€2.40', desc: 'Product description goes here'}
		];
		this.page.actionBar.navigationButton.style.color = new Color('#000000');
		if (topmost().ios) {
			var navigationBar = topmost().ios.controller.navigationBar;
			navigationBar.setBackgroundImageForBarMetrics(UIImage.new(), UIBarMetrics.UIBarMetricsDefault);
			navigationBar.shadowImage = UIImage.new();
    }

	 }
	 getView(item){
		this.startOrder = true;
		this.addBottomBorder("order");
		this.selectedItem = item;
	 }
	 selectedIndexChanged(picker) {
        console.log('picker selection: ' + picker.selectedIndex);
	}

	addBottomBorder (id) {
		let wrap = this;
		setTimeout(function(){
			let orderType = <DockLayout>wrap.page.getViewById(id);
			console.log(orderType, " Oreder");
			orderType.borderBottomWidth= 1;
			orderType.borderBottomColor= new Color("#434343");
	},0);
	}
	
	selectOrder(picker){
		console.log(picker.selectedIndex);
		picker.selectedIndex === undefined ? picker.selectedIndex = 0 : ''
		this.selectedOrder = this.orederList[picker.selectedIndex] || "Please select an order type";
		this.select++;
		this.selectedOrder = this.orederList[picker.selectedIndex];
			this.addBottomBorder("order");
			this.addBottomBorder("table");
	}

	foo(){
		this.select++;
		console.log(this.select++)
	}

	onMapReady = (event) => {
        console.log("Map Ready");
    };


}