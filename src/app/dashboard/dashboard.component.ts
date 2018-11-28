import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { PDFView } from 'nativescript-pdf-view';
import { registerElement } from 'nativescript-angular';

@Component({
    selector: "Dashboard",
    moduleId: module.id,
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {

    public counter: number = 0;
    isEligibleForDonation: boolean = true;

    constructor(private _page: Page) {
        // Use the component constructor to inject providers.
    registerElement('PDFView', () => PDFView);
    }

    ngOnInit(): void {
        // Init your component properties here.
        this._page.actionBarHidden = true;
    }
}
