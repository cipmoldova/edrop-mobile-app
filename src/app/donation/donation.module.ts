import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { NativeScriptPickerModule } from "nativescript-picker/angular";

import { ChecklistComponent } from "./checklist/checklist.component";
import { DonationRoutingModule  } from "./donation-routing.module";
import { DonationComponent } from "./donation.component";
import { ScheduleComponent } from "./schedule/schedule.component";

@NgModule({
    declarations: [
        DonationComponent,
        ScheduleComponent,
        ChecklistComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        DonationRoutingModule,
        NativeScriptDateTimePickerModule,
        NativeScriptPickerModule,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DonationModule { }
