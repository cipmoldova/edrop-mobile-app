import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";

import { BrowseComponent } from "../browse/browse.component";
import { HomeComponent } from "../home/home.component";
import { ItemDetailComponent } from "../search/item-detail/item-detail.component";
import { SearchComponent } from "../search/search.component";
import { DashboardComponent } from "./dashboard.component";

export const COMPONENTS = [
    BrowseComponent,
    HomeComponent,
    ItemDetailComponent,
    SearchComponent
];

const routes: Routes = [
    {
        path: "default", component: DashboardComponent, children: [
            {
                path: "home",
                outlet: "homeTab",
                component: NSEmptyOutletComponent,
                loadChildren: "~/app/home/home.module#HomeModule",
            },
            {
                path: "browse",
                outlet: "browseTab",
                component: NSEmptyOutletComponent,
                loadChildren: "~/app/browse/browse.module#BrowseModule",
            },
            {
                path: "search",
                outlet: "searchTab",
                component: NSEmptyOutletComponent,
                loadChildren: "~/app/search/search.module#SearchModule",
            },
        ]
    }
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class DashboardRoutingModule { }
