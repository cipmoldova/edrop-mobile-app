import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

import { StatisticDataService } from "~/app/shared/statistic-data.service";
import { UserService } from "~/app/shared/user.service";

import { HomeRoutingModule  } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIChartModule,
        HomeRoutingModule,
    ],
    providers: [
        UserService,
        StatisticDataService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        HomeComponent,
    ],
})
export class HomeModule { }
