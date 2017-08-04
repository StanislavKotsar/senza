import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./pages/login_page/login_page.component";
import { LoadingPage } from "./pages/loading_page/loading_page.component";
import { ListComponent } from "./pages/list_page/list_page.component";
const routes: Routes = [
    { path: "", redirectTo: "/loading", pathMatch: "full" },
    { path: 'loading', component: LoadingPage },
    { path: 'login', component: LoginComponent },
    { path: 'list', component: ListComponent },


    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }