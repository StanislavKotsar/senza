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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzRUFBNEY7QUFHNUYsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUM5RSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBQy9DLHlEQUFrRTtBQUVsRSxvREFBa0Q7QUFDbEQsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSxnRkFBeUU7QUFDekUsc0ZBQTBFO0FBQzFFLDZFQUFzRTtBQUN0RSxnRkFBNkU7QUFDN0UsNkVBQTJFO0FBQzNFLDBFQUF3RTtBQUt4RSwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUFpQ3RFLElBQWEsU0FBUztJQUh0Qjs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBL0JyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLDhCQUFnQjtZQUNoQiwyQkFBaUI7WUFDakIsd0NBQThCO1NBQ2pDO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWixnQ0FBYztZQUNkLDJDQUFtQjtZQUNuQixxQ0FBYztZQUNkLG9DQUFXO1lBQ1gsbUNBQWE7WUFDYix3Q0FBa0I7WUFDbEIseUNBQWtCO1lBQ2xCLHNDQUFpQjtTQUNwQjtRQUNELFNBQVMsRUFBRTtZQUNQLDBCQUFXO1NBQ2Q7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0lBQ0Y7O01BRUU7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jaGVja2JveC9hbmd1bGFyJztcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luX3BhZ2UvbG9naW5fcGFnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvYWRpbmdQYWdlIH0gZnJvbSBcIi4vcGFnZXMvbG9hZGluZ19wYWdlL2xvYWRpbmdfcGFnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9saXN0X3BhZ2UvbGlzdF9wYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTXlBY2NvdW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbXlfYWNjb3VudC9teV9hY2NvdW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbV9wYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaXRlbV9wYWdlL2l0ZW1fcGFnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZlZWRiYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50XCI7XG5cblxuXG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBUTlNDaGVja0JveE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIExvYWRpbmdQYWdlLFxuICAgICAgICBMaXN0Q29tcG9uZW50LFxuICAgICAgICBJdGVtX3BhZ2VDb21wb25lbnQsXG4gICAgICAgIE15QWNjb3VudENvbXBvbmVudCxcbiAgICAgICAgRmVlZGJhY2tDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJdGVtU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==