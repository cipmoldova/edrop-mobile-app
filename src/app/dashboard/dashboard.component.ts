import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-dashboard",
    styleUrls: ["./dashboard.component.scss"],
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {

    @ViewChild("dashboardTab", { static: true })
    dashboardTab: ElementRef;

    constructor(
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute,
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

        // Init your component properties here.

        this.routerExtension.navigate(
            [
                {
                    outlets: {
                        homeTab: ["home"],
                        donationTab: ["donation"],
                        bountyTab: ["bounty"],
                        infoTab: ["info"],
                    }
                }
            ],
            { relativeTo: this.activeRoute }
        );
    }

    changeTab(newTab: string): void {
        switch (newTab) {
            case "homeTab": {
                this.dashboardTab.nativeElement.selectedIndex = 0;
                break;
            }
            case "donationTab": {
                this.dashboardTab.nativeElement.selectedIndex = 1;
                break;
            }
            case "bountyTab": {
                this.dashboardTab.nativeElement.selectedIndex = 2;
                break;
            }
            case "infoTab": {
                this.dashboardTab.nativeElement.selectedIndex = 3;
                break;
            }
            default: {
                break;
            }
        }
    }

    goHome(): void {
        // Navigate to the home tab
        this.routerExtension.navigate(
            [
                "/dashboard/default",
                {
                    outlets: {
                        homeTab: ["home"],
                        donationTab: ["donation"],
                    }
                },
            ]
        );
        this.changeTab("homeTab");
    }
}
