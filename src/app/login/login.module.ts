import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { UserService } from "../shared/user.service";
import { LoginRoutingModule  } from "./login-routing.module";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        LoginRoutingModule,
    ],
    providers: [
        UserService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
    ],
})
export class LoginModule { }
