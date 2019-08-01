import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { HtmlViewerComponent } from "~/app/utils/html-viewer.component";

@NgModule({
    declarations: [
        HtmlViewerComponent,
    ],
    imports: [
    ],
    exports: [
        HtmlViewerComponent,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})
export class EDropCommonModule { }
