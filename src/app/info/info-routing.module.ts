import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { InfoComponent } from "./info.component";
import { InfoItemComponent } from "./info-item/info-item.component";

const routes: Routes = [
    {
        path: "",
        component: InfoComponent,
    },
    {
        path: "item/:id",
        component: InfoItemComponent,
    },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class InfoRoutingModule { }
