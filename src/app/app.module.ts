// tslint:disable-next-line:ordered-imports
import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { addCategories, enable as traceEnable } from "tns-core-modules/trace";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

import { UserService } from "./shared/user.service";

traceEnable();

export class MyErrorHandler implements ErrorHandler {
    handleError(error) {
        console.log("### ErrorHandler Error: " + error.toString());
        console.log("### ErrorHandler Stack: " + error.stack);
    }
}

// tslint:disable-next-line:max-classes-per-file
@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        AppRoutingModule,
    ],
    providers: [
        UserService,
        { provide: ErrorHandler, useClass: MyErrorHandler },
   ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})

/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
