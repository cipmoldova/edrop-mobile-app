import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "ui/page";

@Component({
    moduleId: module.id,
    selector: "Home",
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {

    public counter: number = 0;

    constructor(private page: Page) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.page.actionBarHidden = true;
    }

    onSignupButtonTap(args: EventData) {
        // let button = args.object as Button;

        this.counter++;
        // console.log("Tapped " + button.get("text") + this.counter + " times!");
    }
}
