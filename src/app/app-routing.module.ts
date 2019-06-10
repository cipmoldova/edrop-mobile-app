import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "dashboard",
        loadChildren: "~/app/dashboard/dashboard.module#DashboardModule"
    },
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full",
    },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot(
            routes,
            { enableTracing: false } // <-- debugging purposes only
        )
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
