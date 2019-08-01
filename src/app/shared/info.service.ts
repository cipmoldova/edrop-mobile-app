import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { retry, catchError } from "rxjs/operators";
import { MyErrorHandler } from "~/app/utils/my-error-handler";

export enum Info { // TODO : externalize
    WHY_DONATE,
    HOW_TO_DONATE,
    WHERE_TO_DONATE,
    USEFUL_INFO,
    ABOUT_BLOOD,
    ABOUT_BLOOD_GROUPS,
    RIGHTS_AND_OBLIGATIONS,
    WHO_CAN_DONATE,
    HOW_TO_PREPARE_FOR_DONATION,
    ABOUT_CNTS,
    HISTORY_CNTS,
    CALLS,
}

export interface InfoItem {
    id: Info;
    title: string;
    detail: string;
}

export interface InfoItemHeader { // TODO ...
    id: Info;
    title: string;
}

@Injectable({
    providedIn: "root"
})
export class InfoService {

  // Define API base URL
  apiURL = "http://5d3a3a81fa091c001447086e.mockapi.io";

  constructor(private http: HttpClient) { }

    // get a list containing only the titles of the info items
    getInfoItemsHeaders(): Observable<Array<InfoItemHeader>> {
        return this.http.get<Array<InfoItemHeader>>(this.apiURL + "/infoItemsHeaders").pipe(
            retry(1),
            catchError(MyErrorHandler.handleHttpError<Array<InfoItemHeader>>("getInfoItemsHeaders", []))
        );
    }

    // get info item
    getInfoItem(id: Info): Observable<InfoItem> {
        return this.http.get<InfoItem>(this.apiURL + "/infoItems" + "/" + id).pipe(
            retry(1),
            catchError(MyErrorHandler.handleHttpError<InfoItem>("getInfoItem", null))
        );
    }
}
