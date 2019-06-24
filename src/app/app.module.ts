// tslint:disable-next-line:ordered-imports
import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { enable as traceEnable } from "tns-core-modules/trace";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

traceEnable();

declare global {
    // tslint:disable-next-line: interface-name
    interface Array<T> {
        isFirstIndex(index: number): boolean;
        isLastIndex(index: number): boolean;
    }
}
// tslint:disable-next-line: only-arrow-functions
Array.prototype.isFirstIndex = function(index: number): boolean {
    return index === 0;
};
Array.prototype.isLastIndex = function(index: number): boolean {
    return index === (this.length - 1);
};

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
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
    ],
    providers: [
        { provide: ErrorHandler, useClass: MyErrorHandler },
    ],
    exports: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})

/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
