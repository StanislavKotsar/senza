import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { Color } from "color";

@Component({
	selector: 'my_account',
	templateUrl: 'pages/my_account/my_account.component.html',
	styleUrls: ['pages/my_account/my_account.component.css']
})

export class MyAccountComponent implements OnInit {

	constructor(private page: Page) { }

	ngOnInit() {
		this.page.actionBarHidden = true;
	 }
}