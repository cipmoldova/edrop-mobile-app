import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BountyComponent } from "./bounty.component";

const routes: Routes = [
    {
        path: "",
        component: BountyComponent
    },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class BountyRoutingModule { }
