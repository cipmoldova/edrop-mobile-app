import { Component } from "@angular/core";

import { BackendService } from "./shared/backend.service";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
    constructor() {
        BackendService.setup();
    }
}
