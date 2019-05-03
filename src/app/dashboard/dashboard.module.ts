import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TNSFontIconModule, TNSFontIconService } from "nativescript-ngx-fonticon";

import { DashboardRoutingModule  } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

import { CommonModule } from "@angular/common";

// turn debug on
TNSFontIconService.debug = true;

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        NativeScriptCommonModule,
        DashboardRoutingModule,
        TNSFontIconModule.forRoot({
            icomoon: "./app-common.css",
            fa: "./app-common.css",
        })
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})
export class DashboardModule { }
