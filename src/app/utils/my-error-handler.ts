import { ErrorHandler } from "@angular/core";
import { of, Observable } from "rxjs";

export class MyErrorHandler implements ErrorHandler {

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    static handleHttpError<T> (operation = "operation", result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    handleError(error: { stack: string; }) {
        console.log("### ErrorHandler Stack: " + error.stack);
    }

}
