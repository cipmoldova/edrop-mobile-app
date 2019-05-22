import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { isAndroid } from "tns-core-modules/platform";
import { alert } from "tns-core-modules/ui/dialogs";
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

import { ActionBar, NavigationButton } from "tns-core-modules/ui/action-bar";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view/tab-view";

@Component({
    selector: "ns-dashboard",
    styleUrls: ["./dashboard.component.scss"],
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {

    constructor(
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute,
        // private actionBar: ActionBar,
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
                        extraTab: ["extra"],
                    }
                }
            ],
            { relativeTo: this.activeRoute }
        );

        // Init your component properties here.
        //setCategories(categories.All);
        //enable();
    }

}
