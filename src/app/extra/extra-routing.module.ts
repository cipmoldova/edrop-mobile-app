import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ExtraComponent } from "./extra.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

const routes: Routes = [
    {
        path: "",
        component: ExtraComponent,
    },
    {
        path: "item/:id",
        component: ItemDetailComponent,
    },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class ExtraRoutingModule { }
