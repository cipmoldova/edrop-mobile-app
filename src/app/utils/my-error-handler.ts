import { ErrorHandler } from "@angular/core";

export class MyErrorHandler implements ErrorHandler {
    handleError(error: { stack: string; }) {
        console.log("### ErrorHandler Stack: " + error.stack);
    }
}
