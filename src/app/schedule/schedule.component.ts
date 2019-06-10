import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "ns-schedule",
    styleUrls: ["./schedule.component.scss"],
    templateUrl: "./schedule.component.html"
})
export class ScheduleComponent implements OnInit {

    constructor(
        private page: Page,
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute,
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.page.actionBarHidden = false;

        this.routerExtension.navigate(
            ["checklist"],
            { relativeTo: this.activeRoute }
        );
    }
}
