import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { ScheduleComponent } from "./schedule/schedule.component";

const routes: Routes = [
    { path: "", redirectTo: "home" },
    { path: "home", component: HomeComponent },
    { path: "schedule", component: ScheduleComponent },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
