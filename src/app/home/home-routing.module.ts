import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ChecklistComponent } from "./checklist/checklist.component";
import { HomeComponent } from "./home.component";
import { MarketplaceComponent } from "./marketplace/marketplace.component";
import { ScheduleComponent } from "./schedule/schedule.component";

const routes: Routes = [
    { path: "", redirectTo: "home" },
    { path: "home", component: HomeComponent },
    { path: "schedule", component: ScheduleComponent },
    { path: "checklist", component: ChecklistComponent },
    { path: "marketplace", component: MarketplaceComponent },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
