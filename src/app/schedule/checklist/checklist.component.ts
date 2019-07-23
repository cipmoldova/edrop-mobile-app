import { Component, OnInit } from "@angular/core";
import { ActivatedRoute  } from "@angular/router";

import { RouterExtensions } from "nativescript-angular/router";
import { alert } from "tns-core-modules/ui/dialogs";

import { DashboardComponent } from "~/app/dashboard/dashboard.component";
import { ChecklistQuestion, ScheduleService } from "~/app/shared/schedule.service";

@Component({
    selector: "ns-checklist",
    styleUrls: [ "./checklist.component.scss" ],
    templateUrl: "./checklist.component.html"
})
export class ChecklistComponent implements OnInit {

    checklistQuestions: Array<ChecklistQuestion>;

    constructor(
        private routerExtension: RouterExtensions,
        private route: ActivatedRoute,
        private dashboard: DashboardComponent,
        private scheduleService: ScheduleService,
    ) {
    }

    ngOnInit(): void {
        // Init your component properties here
        this.scheduleService.getChecklistQuestions().subscribe(
            (checklistQuestions) => this.checklistQuestions = checklistQuestions
        );
    }

    goHome(): void {
        this.dashboard.goHome();
    }

    check(): void {
        // check whether there are wrong answers
        const failedQuestions = this.checklistQuestions.filter((question) => !question.pass()).length;

        if (failedQuestions > 0) {
            const unansweredQuestions = this.checklistQuestions.filter((question) => question.getLastAnswer() === "");
            if (unansweredQuestions.length > 0) {
                alert({
                    title: "Chestionar necompletat!",
                    message: "Vă rugăm răspundeți la toate întrebările!",
                    okButtonText: "Bine",
                });
            } else {
                alert({
                    title: "Ne pare rău!",
                    message: "Din păcate în acest moment nu sunteți pregătit pentru donare!",
                    okButtonText: "Bine",
                });
                this.dashboard.goHome();
            }
        } else {
            this.routerExtension.navigate(
                ["../booking"],
                { relativeTo: this.route },
            );
        }
    }
}
