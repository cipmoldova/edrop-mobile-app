import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";

import { RouterExtensions } from "nativescript-angular/router";

import { DashboardComponent } from "~/app/dashboard/dashboard.component";
import { BookingTicket, ScheduleService } from "~/app/shared/schedule.service";
import { Sex, UserService } from "~/app/shared/user.service";
import { BookingComponent } from "../booking.component";

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
        private datePipe: DatePipe,
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

    goHome(): void {
        this.dashboard.goHome();
    }

    getTicketNumber(): void {
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

    finalizeBooking(): void {

        // obtain a new generated ticket number from server
        this.getTicketNumber();

        // send booking to donation center
        this.scheduleService.book(this.bookingTicket)
            // on succes :
            .then(() => {
                alert({
                    title: "Vă mulțumim!",
                    message: "Ați fost programat"
                        + (this.bookingTicket.person.sex === Sex.Feminin ? "ă" : "")
                        + " în ziua de "
                        + this.datePipe.transform(this.bookingTicket.date, "EEEE, dd MMMM yyyy", undefined, "ro-MD")
                        + ", la orele "
                        + this.datePipe.transform(this.bookingTicket.date, "HH:mm")
                        + ", la "
                        + this.bookingTicket.location + ".\n"
                        + "Vă rugăm să aveți buletinul la dumneavoastră!",
                    okButtonText: "Bine",
                });
                // booking succeded, we toggle a variable which will trigger the booking ticket number to be displayed
                this.scheduled = true;
            })
            // on failure :
            .catch(() => {
                alert({
                    title: "Ne cerem iertare!",
                    message: "Din păcate a apărut o eroare și nu am reușit să vă programăm." + "\n"
                        + "Vă rugăm sunați la numărul de telefon (+373) 68459217.", // TODO
                    okButtonText: "Bine",
                });
                // booking failed, we get back to our homepage
                this.goHome();
            });
    }

    printTicket(): void {
        // TODO
    }
}
