import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService, IDataItem } from "../../core/data.service";

@Component({
    selector: "ns-item-detail",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: IDataItem;

    constructor(
        private data: DataService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.data.getItem(id);
    }
}
