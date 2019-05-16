import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { NativeScriptPickerModule } from "nativescript-picker/angular";

import { ChecklistComponent } from "./checklist/checklist.component";
import { HomeRoutingModule  } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { MarketplaceComponent } from "./marketplace/marketplace.component";
import { ScheduleComponent } from "./schedule/schedule.component";

@NgModule({
    declarations: [
        HomeComponent,
        ScheduleComponent,
        ChecklistComponent,
        MarketplaceComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptFormsModule,
        NativeScriptDateTimePickerModule,
        NativeScriptPickerModule,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
