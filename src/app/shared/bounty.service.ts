import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface Company {
    name: string;
    imageSrc: string;
}

@Injectable()
export class BountyService {

    useBounty(company: Company) {
        return new Promise((resolve, reject) => {
            resolve();
            // reject();
            // TODO send to server
        });
    }

    getCompanies(): Observable<Array<Company>> {
        // TODO get from server
        return of (
            [
                {
                    name: "Andy's Pizza",
                    imageSrc: "res://marketplace_andyspizza",
                },
                {
                    name: "Bucuria",
                    imageSrc: "res://marketplace_bucuria",
                },
                {
                    name: "Farmacia Familiei",
                    imageSrc: "res://marketplace_farmaciafamiliei",
                },
                {
                    name: "Fidesco",
                    imageSrc: "res://marketplace_fidesco",
                },
                {
                    name: "Orange",
                    imageSrc: "res://marketplace_orange",
                },
                {
                    name: "StarNet",
                    imageSrc: "res://marketplace_starnet",
                },
                {
                    name: "Teatrul „Mihai Eminescu”",
                    imageSrc: "res://marketplace_teatrulmihaieminescu",
                },
            ]
        );
    }
}
