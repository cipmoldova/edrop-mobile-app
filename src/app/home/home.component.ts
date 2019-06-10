import { registerLocaleData } from "@angular/common";
import localeRoExtra from "@angular/common/locales/extra/ro";
import localeRo from "@angular/common/locales/ro";
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
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

    bloodNeeded: Array<GlobalStatsChart> = [
        { month: "Ianuarie", amount: 8.5 },
        { month: "Februarie", amount: 7.8 },
        { month: "Martie", amount: 7 },
        { month: "Aprilie", amount: 4.2 },
        { month: "Mai", amount: 6.8 },
        { month: "Iunie", amount: 3.5 },
    ];

    bloodDonated: Array<GlobalStatsChart> = [
        { month: "Ianuarie", amount: 5 },
        { month: "Februarie", amount: 4.9 },
        { month: "Martie", amount: 5 },
        { month: "Aprilie", amount: 2.2 },
        { month: "Mai", amount: 5.1 },
        { month: "Iunie", amount: 2 },
    ];

    bloodGap: Array<GlobalStatsChart> = new Array<GlobalStatsChart>();

    labels: Array<GlobalStatsChart> = new Array<GlobalStatsChart>();

    constructor(
        private page: Page,
        private routerExtension: RouterExtensions,
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.page.actionBarHidden = false;
        // this.console.dir(this.bloodDonated);
        for (let i = 0; i < this.numberOfDisplayedMonths; i++) {
            this.bloodNeeded[i].amount *= 1000;
            this.bloodDonated[i].amount *= 1000;
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
