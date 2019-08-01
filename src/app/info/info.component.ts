import { Component, OnInit } from "@angular/core";
import { InfoService, InfoItemHeader } from "~/app/shared/info.service";
import { Observable } from "rxjs";

@Component({
    selector: "ns-info",
    templateUrl: "./info.component.html"
})
export class InfoComponent implements OnInit {
    infoItemsHeaders$: Observable<Array<InfoItemHeader>>;

    constructor(private infoService: InfoService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.infoItemsHeaders$ = this.infoService.getInfoItemsHeaders();
    }
}
