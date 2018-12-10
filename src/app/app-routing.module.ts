import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },

    { path: "login", component: LoginComponent },
    { path: "dashboard", component: DashboardComponent },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot(
            routes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
