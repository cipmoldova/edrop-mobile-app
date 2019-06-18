import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { BookingTicket } from "../schedule/booking/booking-summary/booking-ticket";

@Injectable()
export class ScheduleService {

    getTicketNumber(): Observable<number> {
        // TODO get from server
        return of (123456789);
    }

    book(bookingTicket: BookingTicket) {
        return new Promise((resolve, reject) => {
            resolve();
            // reject();
            // TODO send to server
        });
    }
}