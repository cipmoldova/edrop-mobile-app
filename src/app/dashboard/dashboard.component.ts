import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { isAndroid } from "tns-core-modules/platform";
import {
    addCategories,
    categories,
    clearWriters,
    disable,
    enable,
    isCategorySet,
    isEnabled,
    setCategories,
    write
} from "tns-core-modules/trace";

@Component({
    selector: "ns-dashboard",
    styleUrls: ["./dashboard.component.scss"],
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {

    constructor(
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

        this.routerExtension.navigate(
            [
                {
                    outlets: {
                        homeTab: ["home"],
                        donationTab: ["donation"],
                        bountyTab: ["bounty"],
                        searchTab: ["search"],
                    }
                }
            ],
            { relativeTo: this.activeRoute }
        );

        // Init your component properties here.
        setCategories(categories.All);
        enable();
    }

}
