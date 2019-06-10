import { Component, OnInit } from "@angular/core";

import { ActivatedRoute  } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-booking",
    styleUrls: ["./booking.component.scss"],
    templateUrl: "./booking.component.html"
})
export class BookingComponent implements OnInit {
    location: string;
    date: Date;
    isItemVisible: boolean = true;

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
    selectedListPickerIndex: number = 0;

    currentDay: number = new Date().getDate();
    currentMonth: number = new Date().getMonth() + 1;
    currentYear: number = new Date().getFullYear();

    constructor(
        private routerExtension: RouterExtensions,
        private route: ActivatedRoute,
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    book(): void {
        this.isItemVisible = false;
        this.routerExtension.navigate(
            ["booking-summary"],
            { relativeTo: this.route },
        );
    }
}
