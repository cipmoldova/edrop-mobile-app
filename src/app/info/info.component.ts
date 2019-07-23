import { Component, OnInit } from "@angular/core";
import { InfoService, InfoItemList } from "../shared/info.service";
import { waitForResources } from "~/app/utils/edrop.common.module";

@Component({
    selector: "ns-info",
    templateUrl: "./info.component.html"
})
export class InfoComponent implements OnInit {
    infoItemList: Array<InfoItemList>;

    constructor(private infoService: InfoService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.infoService.getInfoItemList().subscribe(
            (infoItemList) => this.infoItemList = infoItemList
        );
        waitForResources(this.infoItemList); // debug
    }
}
