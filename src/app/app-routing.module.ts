import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "login",
        loadChildren: "~/app/login/login.module#LoginModule"
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
