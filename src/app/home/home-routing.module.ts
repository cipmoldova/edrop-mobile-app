import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";

const routes: Routes = [
    { path: "", redirectTo: "home" },
    { path: "home", component: HomeComponent },
    { path: "schedule", loadChildren: "~/app/schedule/schedule.module#ScheduleModule" },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
