import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { InfoItem, InfoService } from "~/app/shared/info.service";
import { Observable } from "rxjs";

@Component({
    selector: "ns-info-item",
    templateUrl: "./info-item.component.html"
})
export class InfoItemComponent implements OnInit {
    infoItem$: Observable<InfoItem>;

    constructor(
        private route: ActivatedRoute,
        private routerExtension: RouterExtensions,
        private infoService: InfoService,
    ) { }

    ngOnInit(): void {
        const infoId = +this.route.snapshot.params.id;
        this.infoItem$ = this.infoService.getInfoItem(infoId);
    }

    goBack() {
        this.routerExtension.backToPreviousPage();
    }
}
