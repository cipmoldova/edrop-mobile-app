import { Component, OnInit, } from "@angular/core";

import { ActivatedRoute  } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import * as fs from "tns-core-modules/file-system";
import { alert } from "tns-core-modules/ui/dialogs";
import { DashboardComponent } from "~/app/dashboard/dashboard.component";
import { ChecklistQuestion } from "./checklist-question";

@Component({
    selector: "ns-checklist",
    styleUrls: ["./checklist.component.scss"],
    templateUrl: "./checklist.component.html"
})
export class ChecklistComponent implements OnInit {

    writtenContent: string;
    file: fs.File;

    checklistQuestions: Array<ChecklistQuestion>;
    height: number = 864; // TODO: de calculat in mod dinamic

    constructor(
        private routerExtension: RouterExtensions,
        private route: ActivatedRoute,
        private dashboard: DashboardComponent,
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        // TODO:
        // this.file.readText().then(
        //     res => {
        //         this.writtenContent = res;
        //     }
        // ).catch(err => {
        //     console.log(err.stack);
        // });
        // this.a.color

        // Credits: Organizatia Tinerilor din Sibiu (otsibiu.ro)
        this.checklistQuestions = new Array<ChecklistQuestion>(
            new ChecklistQuestion("<span><p>Aveți vârsta cuprinsă între 18 și 60 de ani?</p></span>", "DA"),
            new ChecklistQuestion("<span><p>Aveți greutatea de peste 50 kg?</p></span>", "DA"),
            new ChecklistQuestion("<span><p>Ați suferit intervenții chirurgicale în ultimele 6 luni?</p></span>", "NU"),
            new ChecklistQuestion("<span><p>Aveți alergii?</p></span>", "NU"),
            new ChecklistQuestion("<span><p>Ați consumat grăsimi, băuturi alcoolice sau țigări în ultimele 48 ore?</p></span>", "NU"),
            new ChecklistQuestion("<span><p>Dacă sunteți femeie, sunteți însărcinată sau în perioada menstruală?</p></span>", "NU"),
            new ChecklistQuestion("<span><p>Sunteți sub tratament pentru una din următoarele afecțiuni: <br> - hipertensiune, <br> - boli de inimă, <br> - boli renale, <br> - boli psihice, <br> - boli endocrine, <br> - boli cu transmitere sexuală <br>?</p></span>", "NU"),
            new ChecklistQuestion("<span><p>Aveți sau ați avut una dintre următoarele boli: <br> - hepatită (de orice fel), <br> - TBC, <br> - sifilis, <br> - malarie, <br> - epilepsie sau alte boli neurologice, <br> - diabet zaharat, <br> - boli de inimă, <br> - boli de piele<br>?</p></span>", "NU"),
        );
    }

    cancel(): void {
        this.dashboard.goHome();
    }

    check(): void {
        // check whether there are wrong answers
        const failedQuestions = this.checklistQuestions.filter((question) => !question.pass()).length;

        if (failedQuestions > 0 && false) { // dbg
            alert({
                message: "Din păcate în acest moment nu sunteți pregătit pentru donare!",
                okButtonText: "Bine",
                title: "Ne pare rău!"
            });
            this.dashboard.goHome();
        } else {
            this.routerExtension.navigate(
                ["../booking"],
                { relativeTo: this.route },
            );
        }
    }
}
