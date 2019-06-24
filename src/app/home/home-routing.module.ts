import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
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
export class HomeRoutingModule { }
