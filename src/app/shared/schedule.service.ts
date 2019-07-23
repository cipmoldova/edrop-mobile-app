import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Person } from "~/app/shared/user.service";

export class BookingTicket {
    location: string;
    date: Date;
    ticketNumber: number;
    person: Person;
}

// tslint:disable-next-line: max-classes-per-file
export class ChecklistQuestion {

    lastAnswer: string = "";
    positiveAnswer: boolean = false;
    negativeAnswer: boolean = false;

    constructor(
      public htmlText: string,
      public passphrase: string,
    ) {}

    getLastAnswer(): string {
      return this.lastAnswer;
    }

    pass(): boolean {
      return this.lastAnswer === this.passphrase;
    }

    changeCheckedRadio(answer: string): void {
      this.lastAnswer = answer;
      if (answer === "DA") {
          this.positiveAnswer = true;
          this.negativeAnswer = false;
      } else if (answer === "NU") {
          this.positiveAnswer = false;
          this.negativeAnswer = true;
      }
  }
}

// tslint:disable-next-line: max-classes-per-file
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

    getChecklistQuestions(): Observable<Array<ChecklistQuestion>> {
        // TODO get from server
        return of (
            // Credits: Organizatia Tinerilor din Sibiu (otsibiu.ro)
            [
                new ChecklistQuestion("Aveți vârsta cuprinsă între 18 și 60 de ani?", "DA"),
                new ChecklistQuestion("Aveți greutatea de peste 50 kg?", "DA"),
                new ChecklistQuestion("Ați suferit intervenții chirurgicale în ultimele 6 luni?", "NU"),
                new ChecklistQuestion("Aveți alergii?", "NU"),
                new ChecklistQuestion("Ați consumat grăsimi, băuturi alcoolice sau țigări în ultimele 48 ore?", "NU"),
                new ChecklistQuestion("Dacă sunteți femeie, sunteți însărcinată sau în perioada menstruală?", "NU"),
                new ChecklistQuestion("Sunteți sub tratament pentru una din următoarele afecțiuni: <br>🔸 hipertensiune <br>🔸 boli de inimă <br>🔸 boli renale <br>🔸 boli psihice <br>🔸 boli endocrine <br>🔸 boli cu transmitere sexuală <br>?", "NU"),
                new ChecklistQuestion("Aveți sau ați avut una dintre următoarele boli: <br>🔸 hepatită (de orice fel) <br>🔸 TBC <br>🔸 sifilis <br>🔸 malarie <br>🔸 epilepsie sau alte boli neurologice <br>🔸 diabet zaharat <br>🔸 boli de inimă <br>🔸 boli de piele <br>?", "NU"),
            ]
        );
    }
}
