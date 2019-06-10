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
                loadChildren: "~/app/home/home.module#HomeModule",
            },
            {
                path: "donation",
                outlet: "donationTab",
                component: NSEmptyOutletComponent,
                loadChildren: "~/app/donation/donation.module#DonationModule",
            },
            {
                path: "bounty",
                outlet: "bountyTab",
                component: NSEmptyOutletComponent,
                loadChildren: "~/app/bounty/bounty.module#BountyModule",
            },
            {
                path: "extra",
                outlet: "extraTab",
                component: NSEmptyOutletComponent,
                loadChildren: "~/app/extra/extra.module#ExtraModule",
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
