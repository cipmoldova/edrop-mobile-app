import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular";
import { RouterExtensions } from "nativescript-angular/router";
import { PDFView } from "nativescript-pdf-view";
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { DataService, IDataItem } from "../core/data.service";

registerElement("PDFView", () => PDFView);

@Component({
    selector: "ns-home",
    styleUrls: ["./home.component.scss"],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    counter: number = 0;
    isEligibleForDonation: boolean = true;
    glyph: string = "";

    constructor(
        private page: Page,
        private routerExtension: RouterExtensions,
    ) {
        // Use the component constructor to inject providers.
        this.glyph = String.fromCharCode(0xe90b);
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.page.actionBarHidden = false;
    }
}
