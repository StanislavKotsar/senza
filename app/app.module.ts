import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./pages/login_page/login_page.component";
import { LoadingPage } from "./pages/loading_page/loading_page.component";
import { ListComponent } from "./pages/list_page/list_page.component";
import { MyAccountComponent } from "./pages/my_account/my_account.component";
import { Item_pageComponent } from "./pages/item_page/item_page.component";
import { FeedbackComponent } from "./pages/feedback/feedback.component";
import * as platform from "platform";
declare var GMSServices: any;
if (platform.isIOS) { 
    GMSServices.provideAPIKey("AIzaSyDrS9xrqK9gja8WVR6dZz-YM18eYP6KN_Y");
  }


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        TNSCheckBoxModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        LoginComponent,
        LoadingPage,
        ListComponent,
        Item_pageComponent,
        MyAccountComponent,
        FeedbackComponent
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {


    
 }
