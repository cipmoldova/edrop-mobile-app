import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ChecklistComponent } from "../donation/checklist/checklist.component";
import { ScheduleComponent } from "../donation/schedule/schedule.component";
import { DonationComponent } from "./donation.component";

const routes: Routes = [
    { path: "", redirectTo: "donation" },
    { path: "donation", component: DonationComponent },
    { path: "schedule", component: ScheduleComponent },
    { path: "checklist", component: ChecklistComponent },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class DonationRoutingModule { }
