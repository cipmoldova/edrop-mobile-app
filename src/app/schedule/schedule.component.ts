import { Component, OnInit } from "@angular/core";

import { Location } from "@angular/common";
import { registerElement } from "nativescript-angular";
import { RouterExtensions } from "nativescript-angular/router";
import { PDFView } from "nativescript-pdf-view";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "ns-schedule",
    styleUrls: ["./schedule.component.scss"],
    templateUrl: "./schedule.component.html"
})
export class ScheduleComponent implements OnInit {
    location: string;
    date: Date;

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
        private page: Page,
        private routerExtension: RouterExtensions,
        private webLocation: Location,
    ) {
        // Use the component constructor to inject providers.
    }

    goNext(): void {
        // this.routerExtension.navigate(["../dashboard/default"], { clearHistory: true });
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.page.actionBarHidden = false;
    }

    schedule(): void {
        null;
    }
}
