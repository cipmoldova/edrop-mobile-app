import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { NativeScriptPickerModule } from "nativescript-picker/angular";

import { ChecklistComponent } from "./checklist/checklist.component";
import { ScheduleRoutingModule  } from "./schedule-routing.module";
import { ScheduleComponent } from "./schedule.component";

@NgModule({
    declarations: [
        ScheduleComponent,
        ChecklistComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptDateTimePickerModule,
        NativeScriptPickerModule,
        ScheduleRoutingModule,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})
export class ScheduleModule { }
