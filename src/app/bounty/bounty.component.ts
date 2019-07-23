import { Component, OnInit } from "@angular/core";

import { ItemEventData } from "tns-core-modules/ui/list-view/list-view";
import { Page } from "tns-core-modules/ui/page";
import { BountyService, Company } from "../shared/bounty.service";

@Component({
    selector: "ns-bounty",
    templateUrl: "./bounty.component.html",
    styleUrls: ["./bounty.component.scss"],
})
export class BountyComponent implements OnInit {
    location: string;
    date: Date;

    companies: Array<Company>;

    constructor(
        private page: Page,
        private bountyService: BountyService,
    ) {
        // Use the component constructor to inject providers.
    }

    onItemTap(args: ItemEventData): void {
        console.log("Item with index: " + args.index + " tapped"); // debug
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.page.actionBarHidden = false;

        this.bountyService.getCompanies().subscribe((companies) => this.companies = companies);
    }
}
