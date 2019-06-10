import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { DataService, IDataItem } from "../../core/data.service";

@Component({
    selector: "ns-item-detail",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: IDataItem;

    constructor(
        private data: DataService,
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
