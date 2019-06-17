import { registerLocaleData } from "@angular/common";
import localeRoExtra from "@angular/common/locales/extra/ro";
import localeRo from "@angular/common/locales/ro";
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import { StaticDataService } from "../shared/static-data.service";
import { GlobalStatsChart } from "./global-stats-chart";

registerLocaleData(localeRo, "ro-MD", localeRoExtra);

@Component({
    selector: "ns-home",
    styleUrls: ["./home.component.scss"],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    isEligibleForDonation: boolean = true;

    numberOfDonations: number = 15;
    dateLastDonation: Date = new Date();

    numberOfCredits: number = 3000;

    numberOfDisplayedMonths = 6;

    measurementUnit: string;

    bloodNeeded: Array<GlobalStatsChart> = this.staticDataService.getBloodNeeded();

    bloodDonated: Array<GlobalStatsChart> = this.staticDataService.getBloodDonated();

    bloodGap: Array<GlobalStatsChart> = new Array<GlobalStatsChart>();

    labels: Array<GlobalStatsChart> = new Array<GlobalStatsChart>();

    constructor(
        private page: Page,
        private routerExtension: RouterExtensions,
        private staticDataService: StaticDataService,
    ) {
        // Use the component constructor to inject providers.
    }

    normalizeAmounts(): void {
        const max: number = this.bloodNeeded.reduce((minCurrent, current) => {
            return minCurrent.amount > current.amount ? minCurrent : current;
        }).amount;

        const lenMax = max.toFixed(0).length;
        const orderDivide = Math.max(0, lenMax - 4);

        if (orderDivide > 0) {
            this.bloodNeeded.forEach((elem) => {
                elem.amount = elem.amount / Math.pow(10, orderDivide);
            });
            this.bloodDonated.forEach((elem) => {
                elem.amount = elem.amount / Math.pow(10, orderDivide);
            });
        }

        switch (orderDivide) {
            case 0: this.measurementUnit = "litri"; break;
            case 1: this.measurementUnit = "decalitri"; break;
            case 2: this.measurementUnit = "hectolitri"; break;
            case 3: this.measurementUnit = "kilolitri"; break;
        }
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.page.actionBarHidden = false;

        this.normalizeAmounts();

        // Calculate gap between bloodNeeded and bloodDonated
        for (let i = 0; i < this.numberOfDisplayedMonths; i++) {
            this.bloodGap[i] = new GlobalStatsChart(
                this.bloodNeeded[i].month,
                Math.max(this.bloodNeeded[i].amount - this.bloodDonated[i].amount, 0),
            );
            this.labels[i] = new GlobalStatsChart(
                this.bloodNeeded[i].month,
                Math.min(this.bloodDonated[i].amount / this.bloodNeeded[i].amount * 100, 100),
            );
        }
    }
}
