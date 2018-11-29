import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular";
import { PDFView } from "nativescript-pdf-view";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "ui/page";

@Component({
    moduleId: module.id,
    selector: "Dashboard",
    templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {

    public counter: number = 0;
    public isEligibleForDonation: boolean = true;

    constructor(private page: Page) {
        // Use the component constructor to inject providers.
    registerElement("PDFView", () => PDFView);
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.page.actionBarHidden = true;
    }
}
