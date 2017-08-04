import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Page } from "ui/page";
import { Color } from "color";
import { topmost,Frame } from "ui/frame";
import { View } from "ui/core/view";

declare var UIImage: any;
declare var UIBarMetrics: any;
declare var controller: any;
declare var CGSizeMake: any;
declare var	UIColor: any;
@Component({
	selector: 'item_page',
	templateUrl: 'pages/item_page/item_page.component.html',
	styleUrls: ['pages/item_page/item_page.component.css']
})

export class Item_pageComponent implements OnInit {
	@ViewChild("white")white: ElementRef;
	constructor(private page: Page, private frame: Frame) { }

	ngOnInit() { 
		this.page.actionBar.navigationButton.style.color = new Color('#000000');
		let white = <View>this.white.nativeElement;
		white.ios.layer.masksToBounds = false;
		white.ios.layer.shadowOpacity = 1.0;
		white.ios.layer.shadowRadius = 1.0;
		white.ios.layer.shadowColor = new Color('#000000').ios.CGColor;
		white.ios.layer.shadowOffset = CGSizeMake(2.0, 2.0);
		if (topmost().ios) {
			var navigationBar = topmost().ios.controller.navigationBar;
			navigationBar.setBackgroundImageForBarMetrics(UIImage.new(), UIBarMetrics.UIBarMetricsDefault);
			navigationBar.shadowImage = UIImage.new();
    }

	 }
}