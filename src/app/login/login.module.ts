import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { UserService } from "~/app/shared/user.service";
import { LoginRoutingModule  } from "./login-routing.module";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
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
