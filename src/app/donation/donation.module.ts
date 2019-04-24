import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DonationRoutingModule  } from "./donation-routing.module";
import { DonationComponent } from "./donation.component";

@NgModule({
    declarations: [
        DonationComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        DonationRoutingModule,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DonationModule { }
