import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ScheduleModule } from "../schedule/schedule.module";
import { HomeRoutingModule  } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        ScheduleModule,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
