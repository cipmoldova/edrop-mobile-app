import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { HtmlViewerComponent } from "~/app/utils/html-viewer.component";

export function waitForResources(...resources: any): void {
    if (!resources) {
        return;
    }
    resources.forEach((element: any) => {
        let i = 0;
        while (!element) {
            setTimeout(() => {}, 100);
            i++;
            if (i >= 10) {
                throw new Error("Error getting resources!");
            }
        }
    });
}

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
