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
        { month: "Ianuarie", amount: 20 },
        { month: "Februarie", amount: 13 },
        { month: "Martie", amount: 24 },
        { month: "Aprilie", amount: 11 },
        { month: "Mai", amount: 18 },
        { month: "Iunie", amount: 17 },
    ];

    bloodDonated: Array<GlobalStatsChart> = [
        { month: "Ianuarie", amount: 10 },
        { month: "Februarie", amount: 11 },
        { month: "Martie", amount: 26 },
        { month: "Aprilie", amount: 8 },
        { month: "Mai", amount: 10 },
        { month: "Iunie", amount: 5 },
    ];

    bloodGap: Array<GlobalStatsChart> = new Array<GlobalStatsChart>();

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
            this.bloodGap[i] = new GlobalStatsChart(
                this.bloodNeeded[i].month,
                Math.max(this.bloodNeeded[i].amount - this.bloodDonated[i].amount, 0),
            );
        }
    }
}
