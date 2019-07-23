import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DonationRoutingModule  } from "./donation-routing.module";
import { DonationComponent } from "./donation.component";
import { EDropCommonModule } from "../utils/edrop.common.module";

@NgModule({
    declarations: [
        DonationComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        DonationRoutingModule,
        EDropCommonModule,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DonationModule { }
