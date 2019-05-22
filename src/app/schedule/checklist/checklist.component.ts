import { Component, OnInit } from "@angular/core";

import { Location } from "@angular/common";
import { registerElement } from "nativescript-angular";
import { RouterExtensions } from "nativescript-angular/router";
import { PDFView } from "nativescript-pdf-view";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "ns-checklist",
    styleUrls: ["./checklist.component.scss"],
    templateUrl: "./checklist.component.html"
})
export class ChecklistComponent implements OnInit {
    location: string;
    date: Date;

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

    onLoad() {
        alert("Loaded PDF!");
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.page.actionBarHidden = false;
    }
}
