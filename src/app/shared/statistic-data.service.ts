import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { retry, catchError, map } from "rxjs/operators";
import { MyErrorHandler } from "~/app/utils/my-error-handler";

export interface BloodStatistic {
    month: string;
    amount: number;
}

export interface GlobalStatistics {
    id: number; // TODO : get rid of
    bloodNeeded: Array<BloodStatistic>;
    bloodDonated: Array<BloodStatistic>;
    bloodGap: Array<BloodStatistic>;
    labels: Array<BloodStatistic>;
    measurementUnit: string;
}

@Injectable()
export class StatisticDataService {

    // Define API base URL
    apiURL = "http://5d3a3a81fa091c001447086e.mockapi.io";

    constructor(private http: HttpClient) { }

    getGlobalStatistics(): Observable<GlobalStatistics> {
        let calculated = false;
        return this.http.get<GlobalStatistics>(this.apiURL + "/globalStatistics" + "/" + "0").pipe(
            retry(1),
            map((globalStatistics: GlobalStatistics) => {

                // debug: this should not be needed
                if (calculated) {
                    return globalStatistics;
                }

                // normalize amounts
                const lenMaxAmount: number = globalStatistics.bloodNeeded.reduce(
                    (maxLen: number, current: BloodStatistic): number => {
                        return Math.max(maxLen, current.amount.toFixed(0).length);
                    },
                    0
                );
                const orderDivide = Math.max(0, lenMaxAmount - 4);


                if (orderDivide > 0) {
                    globalStatistics.bloodNeeded.forEach((elem) => {
                        elem.amount = elem.amount / Math.pow(10, orderDivide);
                    });
                    globalStatistics.bloodDonated.forEach((elem) => {
                        elem.amount = elem.amount / Math.pow(10, orderDivide);
                    });
                }

                switch (orderDivide) {
                    case 0: globalStatistics.measurementUnit = "litri"; break;
                    case 1: globalStatistics.measurementUnit = "decalitri"; break;
                    case 2: globalStatistics.measurementUnit = "hectolitri"; break;
                    case 3: globalStatistics.measurementUnit = "kilolitri"; break;
                }

                // Calculate gap between bloodNeeded and bloodDonated
                globalStatistics.bloodGap = new Array<BloodStatistic>();
                globalStatistics.labels = new Array<BloodStatistic>();
                for (let j = 0; j < globalStatistics.bloodNeeded.length; j++) {
                    globalStatistics.bloodGap[j] = {
                        month: globalStatistics.bloodNeeded[j].month,
                        amount: Math.max(globalStatistics.bloodNeeded[j].amount - globalStatistics.bloodDonated[j].amount, 0),
                    };
                    globalStatistics.labels[j] = {
                        month: globalStatistics.bloodNeeded[j].month,
                        amount: Math.min(globalStatistics.bloodDonated[j].amount / globalStatistics.bloodNeeded[j].amount * 100, 100),
                    };
                }
                calculated = true; // debug
                console.dir(globalStatistics.bloodGap);
                console.dir(globalStatistics.labels);
                console.dir(globalStatistics.measurementUnit);
                return globalStatistics;
            }),
            catchError(MyErrorHandler.handleHttpError<GlobalStatistics>("getGlobalStatistics", null)),
        );
    }
}
