import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService, IDataItem } from "../core/data.service";

@Component({
    selector: "ns-extra",
    templateUrl: "./extra.component.html"
})
export class ExtraComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(private itemService: DataService, private router: RouterExtensions) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        // console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee:" + this.items.values[0]);
    }
}
