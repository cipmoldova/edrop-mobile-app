import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ChecklistComponent } from "./checklist/checklist.component";
import { ScheduleComponent } from "./schedule.component";

const routes: Routes = [
    { path: "", redirectTo: "schedule" },
    { path: "schedule", component: ScheduleComponent },
    { path: "checklist", component: ChecklistComponent },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class ScheduleRoutingModule { }
