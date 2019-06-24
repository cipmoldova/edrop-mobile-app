import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DonationComponent } from "./donation.component";

const routes: Routes = [
    {
        path: "",
        component: DonationComponent,
    },
    {
        path: "schedule",
        loadChildren: () => import("~/app/schedule/schedule.module").then(m => m.ScheduleModule),
    },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class DonationRoutingModule { }
