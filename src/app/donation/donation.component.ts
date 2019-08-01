import { Component, OnInit } from "@angular/core";
import { InfoService, Info, InfoItem } from "~/app/shared/info.service";
import { Observable } from "rxjs";

@Component({
    selector: "ns-donation",
    styleUrls: ["./donation.component.scss"],
    templateUrl: "./donation.component.html",
})
export class DonationComponent implements OnInit {

    infoItem$: Observable<InfoItem>;

    constructor(private infoService: InfoService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        this.infoItem$ = this.infoService.getInfoItem(Info.WHY_DONATE);
    }
}
