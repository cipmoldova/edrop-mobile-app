import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-donation",
    templateUrl: "./donation.component.html"
})
export class DonationComponent implements OnInit {

    infoText: Array<string>;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        this.infoText = new Array<string>(
            "Sîngele donat de tine poate contribui la salvarea vietii unui copil nou-nascut, unei mame, unui tata, unui frate sau surori. O donatie de sînge poate salva chiar trei vieti."
            , "Poti fi sigur ca sîngele donat de tine va fi întotdeauna necesar si poate fi de folos chiar cuiva apropiat tie."
            , "Sîngele reprezinta un dar nepretuit, care nu poate fi cumparat cu bani, ci poate fi doar donat de la o presoana la alta."
            , "E ceva ce poti oferi „din inima”, desi uneori nu este suficient pentru toata lumea, care are nevoie."
            , "E un mod de a fi admirat de ceir din jur pentru gestul care l-ai facut."
            , "E un mod de a arata ca esti receptiv la suferintele altor oameni."
            , "Donînd sînge, întri în familia mare a donatorilor si poti fi sigur, ca cînd va fi nevoie, vei fi ajutat."
            , "Procedura de donatie e simpla, rapida si inofensiva. Îti va lua doar o jumatate de ora."
            , "E un lucru demn de urmat, uman, corect, care nu cere un efort mare pentru a-l efectua."
            , "Vei pasi mai usor dupa donare, vei fi mai „usor” cu aproape o jumatate de kilogram."
        );
    }
}
