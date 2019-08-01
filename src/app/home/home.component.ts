import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { StatisticDataService, GlobalStatistics } from "~/app/shared/statistic-data.service";
import { UserService, UserStatistics } from "~/app/shared/user.service";

@Component({
    selector: "ns-home",
    styleUrls: ["./home.component.scss"],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    // global stats
    globalStatistics$: Observable<GlobalStatistics>;

    // user stats
    userStatistics$: Observable<UserStatistics>;

    constructor(
        private statisticDataService: StatisticDataService,
        private userService: UserService,
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

        // Get global stats from server
        this.globalStatistics$ = this.statisticDataService.getGlobalStatistics();

        // Get user stats from server
        this.userStatistics$ = this.userService.getUserStatistics();
    }
}
