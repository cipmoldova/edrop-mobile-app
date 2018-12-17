import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BrowseComponent } from "../browse/browse.component";
import { HomeComponent } from "../home/home.component";
import { ItemDetailComponent } from "../item-detail/item-detail.component";
import { SearchComponent } from "../search/search.component";
import { DashboardComponent } from "./dashboard.component";

export const COMPONENTS = [
    BrowseComponent,
    HomeComponent,
    ItemDetailComponent,
    SearchComponent
];

const routes: Routes = [
    { path: "", redirectTo: "/dashboard/(homeTab:home//browseTab:browse//searchTab:search)", pathMatch: "full" },

    { path: "dashboard", component: DashboardComponent, children: [
        { path: "home", component: HomeComponent, outlet: "homeTab" },
        { path: "browse", component: BrowseComponent, outlet: "browseTab" },
        { path: "search", component: SearchComponent, outlet: "searchTab" },

        { path: "item/:id", component: ItemDetailComponent, outlet: "searchTab" }
    ]}
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class DashboardRoutingModule { }
