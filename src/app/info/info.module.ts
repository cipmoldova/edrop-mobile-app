import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { EDropCommonModule } from "~/app/utils/edrop.common.module";
import { InfoRoutingModule  } from "./info-routing.module";
import { InfoComponent } from "./info.component";
import { InfoItemComponent } from "./info-item/info-item.component";

@NgModule({
    declarations: [
        InfoComponent,
        InfoItemComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        InfoRoutingModule,
        EDropCommonModule,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InfoModule { }
