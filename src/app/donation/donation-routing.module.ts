import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DonationComponent } from "./donation.component";

const routes: Routes = [
    { path: "", redirectTo: "donation" },
    { path: "donation", component: DonationComponent },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class DonationRoutingModule { }
