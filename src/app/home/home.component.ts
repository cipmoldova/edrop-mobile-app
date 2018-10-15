import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public counter: number = 0;

    constructor(private _page: Page) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this._page.actionBarHidden = true;
        console.log("Tapped " + this.counter + " times!");
    }
<<<<<<< HEAD
    
=======
>>>>>>> 929bbea49741a37bdab171ec6ee706241b18af8f
    onSignupButtonTap(args: EventData) {
        let button = <Button>args.object;
    
        this.counter++;
        //console.log("Tapped " + button.get("text") + this.counter + " times!");
        console.log("Tapped " + button.get("text") + this.counter + " times!");
    }
}
