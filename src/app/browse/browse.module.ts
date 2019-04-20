import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BrowseRoutingModule  } from "./browse-routing.module";
import { BrowseComponent } from "./browse.component";

@NgModule({
    declarations: [
        BrowseComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        BrowseRoutingModule,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BrowseModule { }
