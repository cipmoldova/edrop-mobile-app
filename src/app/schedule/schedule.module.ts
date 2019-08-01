import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { DatePipe } from "@angular/common";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TNSCheckBoxModule } from "@nstudio/nativescript-checkbox/angular";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { NativeScriptPickerModule } from "nativescript-picker/angular";

import { EDropCommonModule } from "~/app/utils/edrop.common.module";
import { DashboardModule } from "~/app/dashboard/dashboard.module";
import { ScheduleService } from "~/app/shared/schedule.service";
import { UserService } from "~/app/shared/user.service";
import { BookingSummaryComponent } from "./booking/booking-summary/booking-summary.component";
import { BookingComponent } from "./booking/booking.component";
import { ChecklistComponent } from "./checklist/checklist.component";
import { ScheduleRoutingModule  } from "./schedule-routing.module";
import { ScheduleComponent } from "./schedule.component";

@NgModule({
    declarations: [
        BookingComponent,
        BookingSummaryComponent,
        ChecklistComponent,
        ScheduleComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptDateTimePickerModule,
        NativeScriptPickerModule,
        ScheduleRoutingModule,
        TNSCheckBoxModule,
        DashboardModule,
        EDropCommonModule,
    ],
    providers: [
        UserService,
        ScheduleService,
        DatePipe,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})
export class ScheduleModule { }
