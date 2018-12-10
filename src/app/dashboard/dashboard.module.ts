import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { COMPONENTS, DashboardRoutingModule  } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    bootstrap: [
        DashboardComponent
    ],
    declarations: [
        DashboardComponent,
        ...COMPONENTS
    ],
    imports: [
        NativeScriptModule,
        DashboardRoutingModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DashboardModule { }
