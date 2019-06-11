import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { StaticDataService, IDataItem } from "../shared/static-data.service";

@Component({
    selector: "ns-extra",
    templateUrl: "./extra.component.html"
})
export class ExtraComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(
        private itemService: StaticDataService,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}
