import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TNSCheckBoxModule } from "nativescript-checkbox/angular";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { NativeScriptPickerModule } from "nativescript-picker/angular";

import { DashboardModule } from "../dashboard/dashboard.module";
import { ScheduleService } from "../shared/schedule.service";
import { UserService } from "../shared/user.service";
import { BookingSummaryComponent } from "./booking/booking-summary/booking-summary.component";
import { BookingComponent } from "./booking/booking.component";
import { ChecklistComponent } from "./checklist/checklist.component";
import { HtmlViewerComponent } from "./checklist/HtmlViewerComponent";
import { ScheduleRoutingModule  } from "./schedule-routing.module";
import { ScheduleComponent } from "./schedule.component";
import { DatePipe } from "@angular/common";

@NgModule({
    declarations: [
        BookingComponent,
        BookingSummaryComponent,
        ChecklistComponent,
        ScheduleComponent,
        HtmlViewerComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptDateTimePickerModule,
        NativeScriptPickerModule,
        ScheduleRoutingModule,
        TNSCheckBoxModule,
        DashboardModule,
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
