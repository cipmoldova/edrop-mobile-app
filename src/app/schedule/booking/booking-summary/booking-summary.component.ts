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

    getPerson(): void {
        // TODO : get from server
        this.userService.getPersonDetails(this.userService.authenticatedUser).subscribe(
            (person) => this.bookingTicket.person = person
        );
    }

    sendBookingToDonationCenter(): void {
        this.scheduleService.book(this.bookingTicket)
            .then(() => {
                alert({
                    message: "Programarea a reușit!",
                    okButtonText: "Bine",
                    title: "Vă mulțumim!"
                });
            })
            .catch(() => {
                alert({
                    message: "Din păcate a apărut o eroare și nu am reușit să vă programăm.\nVă rugăm sunați la numărul de telefon (+373) 68459217.",
                    okButtonText: "Bine",
                    title: "Ne cerem iertare!"
                });
            });
    }

    finalizeBooking(): void {
        // TODO : send booking to donation center
        this.getTicketNumber();
        this.sendBookingToDonationCenter();
        this.scheduled = true;
        this.dashboard.goHome();
    }
}
