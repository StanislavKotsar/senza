"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var angular_2 = require("nativescript-checkbox/angular");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var login_page_component_1 = require("./pages/login_page/login_page.component");
var loading_page_component_1 = require("./pages/loading_page/loading_page.component");
var list_page_component_1 = require("./pages/list_page/list_page.component");
var my_account_component_1 = require("./pages/my_account/my_account.component");
var item_page_component_1 = require("./pages/item_page/item_page.component");
var feedback_component_1 = require("./pages/feedback/feedback.component");
var platform = require("platform");
if (platform.isIOS) {
    GMSServices.provideAPIKey("AIzaSyDrS9xrqK9gja8WVR6dZz-YM18eYP6KN_Y");
}
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            angular_2.TNSCheckBoxModule,
            angular_1.NativeScriptUISideDrawerModule
        ],
        declarations: [
            app_component_1.AppComponent,
            items_component_1.ItemsComponent,
            item_detail_component_1.ItemDetailComponent,
            login_page_component_1.LoginComponent,
            loading_page_component_1.LoadingPage,
            list_page_component_1.ListComponent,
            item_page_component_1.Item_pageComponent,
            my_account_component_1.MyAccountComponent,
            feedback_component_1.FeedbackComponent
        ],
        providers: [
            item_service_1.ItemService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzRUFBNEY7QUFHNUYsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUM5RSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBQy9DLHlEQUFrRTtBQUVsRSxvREFBa0Q7QUFDbEQsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSxnRkFBeUU7QUFDekUsc0ZBQTBFO0FBQzFFLDZFQUFzRTtBQUN0RSxnRkFBNkU7QUFDN0UsNkVBQTJFO0FBQzNFLDBFQUF3RTtBQUN4RSxtQ0FBcUM7QUFFckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDakIsV0FBVyxDQUFDLGFBQWEsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFHSCwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUFpQ3RFLElBQWEsU0FBUztJQUh0Qjs7TUFFRTtJQUNGO0lBSUMsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUpGLElBSUU7QUFKVyxTQUFTO0lBL0JyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLDhCQUFnQjtZQUNoQiwyQkFBaUI7WUFDakIsd0NBQThCO1NBQ2pDO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWixnQ0FBYztZQUNkLDJDQUFtQjtZQUNuQixxQ0FBYztZQUNkLG9DQUFXO1lBQ1gsbUNBQWE7WUFDYix3Q0FBa0I7WUFDbEIseUNBQWtCO1lBQ2xCLHNDQUFpQjtTQUNwQjtRQUNELFNBQVMsRUFBRTtZQUNQLDBCQUFXO1NBQ2Q7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0lBQ0Y7O01BRUU7R0FDVyxTQUFTLENBSXBCO0FBSlcsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVE5TQ2hlY2tCb3hNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtY2hlY2tib3gvYW5ndWxhcic7XG5cbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9sb2dpbl9wYWdlL2xvZ2luX3BhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2FkaW5nUGFnZSB9IGZyb20gXCIuL3BhZ2VzL2xvYWRpbmdfcGFnZS9sb2FkaW5nX3BhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbGlzdF9wYWdlL2xpc3RfcGFnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE15QWNjb3VudENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL215X2FjY291bnQvbXlfYWNjb3VudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1fcGFnZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2l0ZW1fcGFnZS9pdGVtX3BhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGZWVkYmFja0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSBcInBsYXRmb3JtXCI7XG5kZWNsYXJlIHZhciBHTVNTZXJ2aWNlczogYW55O1xuaWYgKHBsYXRmb3JtLmlzSU9TKSB7IFxuICAgIEdNU1NlcnZpY2VzLnByb3ZpZGVBUElLZXkoXCJBSXphU3lEclM5eHJxSzlnamE4V1ZSNmRaei1ZTTE4ZVlQNktOX1lcIik7XG4gIH1cblxuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgVE5TQ2hlY2tCb3hNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBMb2FkaW5nUGFnZSxcbiAgICAgICAgTGlzdENvbXBvbmVudCxcbiAgICAgICAgSXRlbV9wYWdlQ29tcG9uZW50LFxuICAgICAgICBNeUFjY291bnRDb21wb25lbnQsXG4gICAgICAgIEZlZWRiYWNrQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSXRlbVNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuXG5cbiAgICBcbiB9XG4iXX0=