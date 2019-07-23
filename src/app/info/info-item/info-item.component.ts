import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { InfoItem, InfoService } from "~/app/shared/info.service";
import { waitForResources } from "~/app/utils/edrop.common.module";

@Component({
    selector: "ns-info-item",
    templateUrl: "./info-item.component.html"
})
export class InfoItemComponent implements OnInit {
    infoItem: InfoItem;

    constructor(
        private route: ActivatedRoute,
        private routerExtension: RouterExtensions,
        private infoService: InfoService,
    ) { }

    ngOnInit(): void {
        const infoType = +this.route.snapshot.params.type;
        this.infoService.getInfoItem(infoType).subscribe(
            (infoItem) => this.infoItem = infoItem
        );
        waitForResources(this.infoItem); // debug
    }

    goBack() {
        this.routerExtension.backToPreviousPage();
    }
}
