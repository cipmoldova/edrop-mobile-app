import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

import { RouterExtensions } from "nativescript-angular/router";
import { LoginUser } from "../shared/user.model";
import { UserService } from "../shared/user.service";

@Component({
    selector: "ns-login",
    styleUrls: ["./login.component.scss"],
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    isLoggingIn = true;
    user: LoginUser;

    @ViewChild("confirmPassword") confirmPassword: ElementRef;
    @ViewChild("password") password: ElementRef;

    constructor(
        private page: Page,
        private userService: UserService,
        private routerExtension: RouterExtensions,
    ) {
        this.page.actionBarHidden = true;
        this.user = new LoginUser();
        this.user.email = "foo2@foo.com"; // debug
        this.user.password = "foo"; // debug
    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    submit() {
        if (!this.user.email || !this.user.password) {
            this.alert("Vă rugăm să scrieți un nume de utilizator și o parolă corecte.");

            return;
        }

        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    login() {
        this.userService.login(this.user)
            .then(() => {
                this.user.tocken = "ZwPNMBoK8XD8Q="; // TODO : get from server
                this.routerExtension.navigate(
                    ["../dashboard/default"],
                    { clearHistory: true }
                );
            })
            .catch(() => {
                this.alert("Din păcate nu am reușit să vă identificăm.");
            });
    }

    register() {
        if (this.user.password !== this.user.confirmPassword) {
            this.alert("Parolele nu se potrivesc.");

            return;
        }
        this.userService.register(this.user)
            .then(() => {
                this.alert("Contul dumneavoastră a fost generat.");
                this.isLoggingIn = true;
            })
            .catch(() => {
                this.alert("Din păcate nu am reușit să vă generăm un cont de utilizator.");
            });
    }

    forgotPassword() {
        prompt({
            cancelButtonText: "Cancel",
            defaultText: "",
            inputType: "email",
            message: "Vă rugăm introduceți adresa de email cu care v-ați înregistrat.",
            okButtonText: "Ok",
            title: "Parolă uitată"
        }).then((data) => {
            if (data.result) {
                this.userService.resetPassword(data.text.trim())
                    .then(() => {
                        this.alert("Parola dumneavoastră a fost resetată. \
                        Vă rugăm să vă verificați căsuța de e-mail pentru a afla cum \
                        să vă alegeți o nouă parolă pentru contul dumneavoastră.");
                    }).catch(() => {
                        this.alert("Din păcate a apărut o eroare la resetarea parolei.");
                    });
            }
        });
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }
    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }

    alert(message: string) {
        return alert({
            message,
            okButtonText: "Bine",
            title: "eDrop"
        });
    }

    ngOnInit(): void {
        //
    }
}
