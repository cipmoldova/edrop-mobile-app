import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { IDataItem, StaticDataService } from "../../shared/static-data.service";

@Component({
    selector: "ns-item-detail",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: IDataItem;

    constructor(
        private data: StaticDataService,
        private route: ActivatedRoute,
        private routerExtension: RouterExtensions,
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.data.getItem(id);
    }
    goBack() {
        this.routerExtension.backToPreviousPage();
    }
}
