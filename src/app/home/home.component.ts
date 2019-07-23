import { registerLocaleData } from "@angular/common";
import localeRoExtra from "@angular/common/locales/extra/ro";
import localeRo from "@angular/common/locales/ro";
import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { BloodStatistic, StatisticDataService } from "~/app/shared/statistic-data.service";
import { UserService } from "~/app/shared/user.service";
import { waitForResources } from "~/app/utils/edrop.common.module";

registerLocaleData(localeRo, "ro-MD", localeRoExtra);

@Component({
    selector: "ns-home",
    styleUrls: ["./home.component.scss"],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    isEligibleForDonation: boolean = true; // TODO: use!

    // global stats
    bloodNeeded: Array<BloodStatistic>;
    bloodDonated: Array<BloodStatistic>;
    bloodGap: Array<BloodStatistic>;
    labels: Array<BloodStatistic>;
    measurementUnit: string;
    numberOfDisplayedMonths = 6;

    // user stats
    numberOfDonations: number;
    dateLastDonation: Date;
    numberOfCredits: number;

    constructor(
        private page: Page,
        private statisticDataService: StatisticDataService,
        private userService: UserService,
    ) {
        // Use the component constructor to inject providers.
    }

    getGlobalStats(): void {

        // get needed blood data from server
        this.statisticDataService.getBloodNeeded().subscribe(
            (bloodNeeded) => this.bloodNeeded = bloodNeeded
        );

        // get donated blood data from server
        this.statisticDataService.getBloodDonated().subscribe(
            (bloodDonated) => this.bloodDonated = bloodDonated
        );

        // make sure the data has been received from server before operating on it
        waitForResources(this.bloodNeeded, this.bloodDonated);

        // normalize amounts
        const max: number = this.bloodNeeded.reduce((maxCurrent, current) => {
            return maxCurrent.amount > current.amount ? maxCurrent : current;
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

        // Calculate gap between bloodNeeded and bloodDonated
        this.bloodGap = new Array<BloodStatistic>();
        this.labels = new Array<BloodStatistic>();
        for (let j = 0; j < this.numberOfDisplayedMonths; j++) {
            this.bloodGap[j] = new BloodStatistic(
                this.bloodNeeded[j].month,
                Math.max(this.bloodNeeded[j].amount - this.bloodDonated[j].amount, 0),
            );
            this.labels[j] = new BloodStatistic(
                this.bloodNeeded[j].month,
                Math.min(this.bloodDonated[j].amount / this.bloodNeeded[j].amount * 100, 100),
            );
        }
    }

    getUserStats(): void {
        this.userService.getNumberOfDonations().subscribe(
            (numberOfDonations) => this.numberOfDonations = numberOfDonations
        );
        this.userService.getDateLastDonation().subscribe(
            (dateLastDonation) => this.dateLastDonation = dateLastDonation
        );
        this.userService.getNumberOfCredits().subscribe(
            (numberOfCredits) => this.numberOfCredits = numberOfCredits
        );
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.page.actionBarHidden = false;

        // get global stats from server
        this.getGlobalStats();

        // get user stats from server
        this.getUserStats();
    }
}
