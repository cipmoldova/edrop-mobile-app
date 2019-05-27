import { registerLocaleData } from "@angular/common";
import localeRoExtra from "@angular/common/locales/extra/ro";
import localeRo from "@angular/common/locales/ro";
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";

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

    bloodNeeded: Array<{
        Month: string,
        Amount: number,
    }> = [
        { Month: "Ianuarie", Amount: 20 },
        { Month: "Februarie", Amount: 13 },
        { Month: "Martie", Amount: 24 },
        { Month: "Aprilie", Amount: 11 },
        { Month: "Mai", Amount: 18 },
    ];

    bloodDonated: Array<{
        Month: string,
        Amount: number,
    }> = [
        { Month: "Ianuarie", Amount: 10 },
        { Month: "Februarie", Amount: 11 },
        { Month: "Martie", Amount: 26 },
        { Month: "Aprilie", Amount: 8 },
        { Month: "Mai", Amount: 10 },
    ];

    constructor(
        private page: Page,
        private routerExtension: RouterExtensions,
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.page.actionBarHidden = false;
    }
}
