import { Component, OnInit } from "@angular/core";
import { BackendService } from "./shared/backend.service";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

    constructor() {
        BackendService.setup();
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
