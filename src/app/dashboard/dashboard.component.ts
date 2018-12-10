import { Component, OnInit } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import {
    addCategories,
    categories,
    clearWriters,
    disable,
    enable,
    isCategorySet,
    isEnabled,
    setCategories,
    write
} from "tns-core-modules/trace";

@Component({
    moduleId: module.id,
    selector: "Dashboard",
    styleUrls: ["./dashboard.component.scss"],
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        setCategories(categories.concat(
            categories.Binding,
            categories.Layout,
            categories.Style,
            categories.ViewHierarchy,
            categories.VisualTreeEvents
        ));
        addCategories(categories.Navigation);
        enable();
    }

    getIconSource(icon: string): string {
        const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

        return iconPrefix + icon;
    }
}
