import { Component, OnInit } from "@angular/core";

import { RouterExtensions } from "nativescript-angular/router";

import { DashboardComponent } from "~/app/dashboard/dashboard.component";
import { ScheduleService } from "~/app/shared/schedule.service";
import { UserService } from "~/app/shared/user.service";
import { BookingComponent } from "../booking.component";
import { BookingTicket } from "./booking-ticket";

@Component({
    selector: "ns-booking-summary",
    styleUrls: ["./booking-summary.component.scss"],
    templateUrl: "./booking-summary.component.html",
})
export class BookingSummaryComponent implements OnInit {

    bookingTicket: BookingTicket;
    scheduled: boolean = false;

    constructor(
        private routerExtension: RouterExtensions,
        private dashboard: DashboardComponent,
        private booking: BookingComponent,
        private userService: UserService,
        private scheduleService: ScheduleService,
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.bookingTicket = new BookingTicket();
        this.bookingTicket.location = this.booking.location;
        this.bookingTicket.date = this.booking.date;
        this.getPerson();
    }

    goBack(): void {
        this.booking.isItemVisible = true;
        this.routerExtension.back();
    }

    cancel(): void {
        this.dashboard.goHome();
    }

    getTicketNumber(): void {
        // TODO : get from server
        this.scheduleService.getTicketNumber().subscribe(
            (ticketNumber) => this.bookingTicket.ticketNumber = ticketNumber
        );
    }

    // Get User personal info from server
    getPerson(): void {
        this.userService.getPersonDetails(this.userService.authenticatedUser).subscribe(
            (person) => this.bookingTicket.person = person
        );
    }

    sendBookingToDonationCenter(): void {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
        };
        this.scheduleService.book(this.bookingTicket)
            .then(() => {
                alert({
                    title: "Vă mulțumim!",
                    message: "Ați fost programat(ă) în data de " + this.bookingTicket.date.toLocaleDateString("ro-MD", options)
                        + " la ora " + this.bookingTicket.date.toLocaleTimeString("ro-MD")
                        + " la " + this.bookingTicket.location + ".\n"
                        + "Vă rugăm să aveți buletinul la dumneavoastră!\n",
                    okButtonText: "Bine",
                });
            })
            .catch(() => {
                alert({
                    title: "Ne cerem iertare!",
                    message: "Din păcate a apărut o eroare și nu am reușit să vă programăm.\nVă rugăm sunați la numărul de telefon (+373) 68459217.",
                    okButtonText: "Bine",
                });
            });
    }

    finalizeBooking(): void {
        this.getTicketNumber();
        this.sendBookingToDonationCenter();
        this.scheduled = true;
    }

    exitSchedulePane(): void {
        this.dashboard.goHome();
    }

    printTicket(): void {

    }
}
