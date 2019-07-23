import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";

export class BloodStatistic {
    constructor(
      public month: string,
      public amount: number,
    ) { }
}

// tslint:disable-next-line: max-classes-per-file
@Injectable()
export class StatisticDataService {

    getBloodNeeded(): Observable<Array<BloodStatistic>> {
        // TODO: get from server
        return of (
            [
                { month: "Ianuarie", amount: 18500 },
                { month: "Februarie", amount: 17800 },
                { month: "Martie", amount: 7000 },
                { month: "Aprilie", amount: 4200 },
                { month: "Mai", amount: 6800 },
                { month: "Iunie", amount: 3500 },
            ]
        );
    }

    getBloodDonated(): Observable<Array<BloodStatistic>> {
        // TODO: get from server
        return of (
            [
                { month: "Ianuarie", amount: 5000 },
                { month: "Februarie", amount: 4900 },
                { month: "Martie", amount: 5000 },
                { month: "Aprilie", amount: 2200 },
                { month: "Mai", amount: 5100 },
                { month: "Iunie", amount: 2000 },
            ]
        );
    }
}
