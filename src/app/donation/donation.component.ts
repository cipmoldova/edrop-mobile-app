import { Component, OnInit } from "@angular/core";
import { InfoService, InfoType, InfoItem } from "~/app/shared/info.service";
import { waitForResources } from "~/app/utils/edrop.common.module";

@Component({
    selector: "ns-donation",
    styleUrls: ["./donation.component.scss"],
    templateUrl: "./donation.component.html",
})
export class DonationComponent implements OnInit {

    infoItem: InfoItem;

    constructor(private infoService: InfoService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        this.infoService.getInfoItem(InfoType.WHY_DONATE).subscribe(
            (infoItem: InfoItem) => this.infoItem = infoItem
        );
        waitForResources(this.infoItem); // debug
    }
}
