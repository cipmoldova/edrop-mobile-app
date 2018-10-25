import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";

@Component({
    selector: "Dashboard",
    moduleId: module.id,
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {

    public counter: number = 0;

    constructor(private _page: Page) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this._page.actionBarHidden = true;
    }
}
