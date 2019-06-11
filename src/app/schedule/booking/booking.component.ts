import { Component, OnInit } from "@angular/core";

import { ActivatedRoute  } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DashboardComponent } from "~/app/dashboard/dashboard.component";

@Component({
    selector: "ns-booking",
    styleUrls: ["./booking.component.scss"],
    templateUrl: "./booking.component.html"
})
export class BookingComponent implements OnInit {

    isItemVisible: boolean = true;

    selectedIndex: number;
    date: Date;
    location: string;

    listPickerCenters: Array<string> = [
          "CNTS Chișinău"
        , "CNTS Bălți"
        , "CNTS Cahul"
        , "Spitalul Raional Anenii Noi"
        , "Spitalul Raional Orhei"
        , "Spitalul Raional Hîncești"
        , "Spitalul Raional Ștefan Vodă"
        , "Spitalul Raional Căușeni"
        , "Spitalul Raional Calarași"
        , "Spitalul Raional Ungheni"
        , "Spitalul Raional Nisporeni"
        , "Spitalul Raional Cimișlia"
        , "Spitalul Raional Cantemir"
        , "Spitalul Raional Ceadîr Lunga"
        , "Spitalul Raional Taraclia"
        , "Spitalul Raional Comrat"
        , "Spitalul Raional Soroca"
        , "Spitalul Raional Drochia"
        , "Spitalul Raional Edineț"
    ];

    constructor(
        private routerExtension: RouterExtensions,
        private route: ActivatedRoute,
        private dashboard: DashboardComponent,
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    cancel(): void {
        this.dashboard.goHome();
    }

    checkDate(): boolean {
        const currentDate: Date = new Date();
        const maxAllowedDate: Date = new Date(Date.now() + 30);

        if (
            this.date <= currentDate ||
            this.date > maxAllowedDate
        ) {
            return false;
        }

        return true;
    }

    goNext(): void {
        if (!this.selectedIndex || !this.date) {
            alert({
                message: "Vă rugăm să completați toate câmpurile!",
                okButtonText: "Bine",
                title: "Lipsesc informații!"
            });
            this.cancel();

            return;
        }
        this.location = this.listPickerCenters[this.selectedIndex];

        this.isItemVisible = false;
        this.routerExtension.navigate(
            ["booking-summary"],
            { relativeTo: this.route },
        );
    }
}
