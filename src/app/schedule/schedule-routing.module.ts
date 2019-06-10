import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BookingSummaryComponent } from "./booking/booking-summary/booking-summary.component";
import { BookingComponent } from "./booking/booking.component";
import { ChecklistComponent } from "./checklist/checklist.component";
import { ScheduleComponent } from "./schedule.component";

const routes: Routes = [
    {
        path: "default",
        component: ScheduleComponent,
        children: [
            {
                path: "booking",
                component: BookingComponent,
                children: [
                    {
                        path: "booking-summary",
                        component: BookingSummaryComponent,
                    },
                ],
            },
            {
                path: "checklist",
                component: ChecklistComponent,
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
export class ScheduleRoutingModule { }
