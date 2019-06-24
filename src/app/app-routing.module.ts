import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "login",
        loadChildren: () => import("~/app/login/login.module").then(m => m.LoginModule),
    },
    {
        path: "dashboard",
        loadChildren: () => import("~/app/dashboard/dashboard.module").then(m => m.DashboardModule),
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
