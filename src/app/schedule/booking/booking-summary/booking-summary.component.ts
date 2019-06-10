import { Component, OnInit } from "@angular/core";

import { DashboardComponent } from "~/app/dashboard/dashboard.component";

@Component({
    selector: "ns-booking-summary",
    templateUrl: "./booking-summary.component.html",
})
export class BookingSummaryComponent implements OnInit {
    location: string;
    date: Date;

    constructor(
        private dashboard: DashboardComponent,
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    finalizeBooking(): void {
        // TODO : send booking to donation center
        this.dashboard.goHome();
    }
}
