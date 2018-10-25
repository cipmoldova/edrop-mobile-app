import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isLoggingIn = true;
    user: User;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;

    constructor(private page: Page, private userService: UserService, private router: Router) {
        this.page.actionBarHidden = true;
        this.user = new User();
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";
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
                this.router.navigate(["/dashboard"]);
            })
            .catch(() => {
                this.alert("Din păcate nu am reușit să vă identificăm.");
            });
    }

    register() {
        if (this.user.password != this.user.confirmPassword) {
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
            title: "Parolă uitată",
            message: "Vă rugăm introduceți adresa de email cu care v-ați înregistrat.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then((data) => {
            if (data.result) {
                this.userService.resetPassword(data.text.trim())
                    .then(() => {
                        this.alert("Parola dumneavoastră a fost resetată. Vă rugăm să vă verificați căsuța de e-mail pentru a afla să alegeți o nouă parolă pentru contul dumneavoastră.");
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
            title: "eDrop",
            okButtonText: "Bine",
            message: message
        });
    }
}
