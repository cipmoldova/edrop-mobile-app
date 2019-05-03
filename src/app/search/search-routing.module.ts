import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { SearchComponent } from "./search.component";

const routes: Routes = [
    { path: "", redirectTo: "search" },
    { path: "search", component: SearchComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class SearchRoutingModule { }
