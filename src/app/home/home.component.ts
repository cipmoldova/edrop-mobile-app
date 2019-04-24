import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular";
import { RouterExtensions } from "nativescript-angular/router";
import { PDFView } from "nativescript-pdf-view";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";
import { DataService, IDataItem } from "../core/data.service";

@Component({
    selector: "ns-home",
    styleUrls: ["./home.component.scss"],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    counter: number = 0;
    isEligibleForDonation: boolean = true;

    constructor(private page: Page) {
        // Use the component constructor to inject providers.
        registerElement("PDFView", () => PDFView);
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.page.actionBarHidden = true;
    }
}
