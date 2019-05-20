import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ExtraRoutingModule  } from "./extra-routing.module";
import { ExtraComponent } from "./extra.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

@NgModule({
    declarations: [
        ExtraComponent,
        ItemDetailComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        ExtraRoutingModule,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ExtraModule { }
