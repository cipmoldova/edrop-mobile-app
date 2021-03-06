import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";

import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
    {
        path: "default",
        component: DashboardComponent,
        children: [
            {
                path: "home",
                outlet: "homeTab",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("~/app/home/home.module").then(m => m.HomeModule),
            },
            {
                path: "donation",
                outlet: "donationTab",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("~/app/donation/donation.module").then(m => m.DonationModule),
            },
            {
                path: "bounty",
                outlet: "bountyTab",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("~/app/bounty/bounty.module").then(m => m.BountyModule),
            },
            {
                path: "info",
                outlet: "infoTab",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("~/app/info/info.module").then(m => m.InfoModule),
            },
        ],
    },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class DashboardRoutingModule { }
