import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./pages/login_page/login_page.component";
import { LoadingPage } from "./pages/loading_page/loading_page.component";
import { ListComponent } from "./pages/list_page/list_page.component";
import { Item_pageComponent } from "./pages/item_page/item_page.component";
import { MyAccountComponent } from "./pages/my_account/my_account.component";
const routes: Routes = [
    { path: "", redirectTo: "/loading", pathMatch: "full" },
    { path: 'loading', component: LoadingPage },
    { path: 'login', component: LoginComponent },
    { path: 'list', component: ListComponent },
    { path: 'item', component: Item_pageComponent },
    { path: 'account', component: MyAccountComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }