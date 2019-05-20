import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NativeScriptFormsModule } from "nativescript-angular";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { NativeScriptPickerModule } from "nativescript-picker/angular";
import { BountyRoutingModule  } from "./bounty-routing.module";
import { BountyComponent } from "./bounty.component";

@NgModule({
    declarations: [
        BountyComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        BountyRoutingModule,
        NativeScriptFormsModule,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BountyModule { }
