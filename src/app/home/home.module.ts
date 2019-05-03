import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule  } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ScheduleComponent } from "./schedule/schedule.component";

@NgModule({
    declarations: [
        HomeComponent,
        ScheduleComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptFormsModule,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
