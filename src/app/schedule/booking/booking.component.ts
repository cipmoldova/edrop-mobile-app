import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { ActivatedRoute  } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { DashboardComponent } from "~/app/dashboard/dashboard.component";

@Component({
    selector: "ns-booking",
    styleUrls: ["./booking.component.scss"],
    templateUrl: "./booking.component.html"
})
export class BookingComponent implements OnInit {

    @ViewChild("pickerField", { static: true })
    pickerField: ElementRef;

    @ViewChild("dateTimePickerFields", { static: true })
    dateTimePickerFields: ElementRef;

    isItemVisible: boolean = true;

    selectedIndex: number;
    selectedDate: string;

    location: string;
    date: Date;

    minDate: string;
    maxDate: string;

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
        const dateToday = new Date();
        this.minDate = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 1).toISOString();
        this.maxDate = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 30).toISOString();
    }

    cancel(): void {
        this.dashboard.goHome();
    }

    goNext(): void {
        this.selectedDate = this.dateTimePickerFields.nativeElement.date;
        this.selectedIndex = this.pickerField.nativeElement.selectedIndex;

        if (!this.selectedIndex || !this.selectedDate) {
            alert({
                title: "Lipsesc informații!",
                message: "Vă rugăm să completați toate câmpurile!",
                okButtonText: "Bine",
            });

            return;
        }
        this.date = new Date(this.selectedDate);
        this.location = this.listPickerCenters[this.selectedIndex];

        this.isItemVisible = false;
        this.routerExtension.navigate(
            ["booking-summary"],
            { relativeTo: this.route },
        );
    }
}
