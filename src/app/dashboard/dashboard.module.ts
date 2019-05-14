import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TNSFontIconModule, TNSFontIconService } from "nativescript-ngx-fonticon";

import { DashboardRoutingModule  } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        NativeScriptCommonModule,
        DashboardRoutingModule,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})
export class DashboardModule { }
