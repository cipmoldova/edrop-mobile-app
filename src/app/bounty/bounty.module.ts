import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BountyRoutingModule  } from "./bounty-routing.module";
import { BountyComponent } from "./bounty.component";
import { BountyService } from "../shared/bounty.service";

@NgModule({
    declarations: [
        BountyComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        BountyRoutingModule,
    ],
    providers: [
        BountyService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BountyModule { }
