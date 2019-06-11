import { Person } from "~/app/shared/user.model";

export class BookingTicket {
    location: string;
    date: Date;
    ticketNumber: number;
    person: Person;
}