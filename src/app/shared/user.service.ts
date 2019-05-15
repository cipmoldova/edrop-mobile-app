import { Injectable } from "@angular/core";
import { Errors, User } from "kinvey-nativescript-sdk";
import { LoginUser } from "./user.model";

@Injectable()
export class UserService {
    register(user: LoginUser) {
        return new Promise((resolve, reject) => {
            User.logout()
                .then(() => {
                    User.signup({ username: user.email, password: user.password })
                        .then(resolve)
                        .catch((error) => { this.handleErrors(error); reject(); });
                })
                .catch((error) => { this.handleErrors(error); reject(); });
        });
    }

    login(user: LoginUser) {
        return new Promise((resolve, reject) => {
            User.logout()
                .then(() => {
                    User.login(user.email, user.password)
                        .then(resolve)
                        .catch((error) => { this.handleErrors(error); reject(); });
                })
                .catch((error) => { this.handleErrors(error); reject(); });
        });
    }

    resetPassword(email) {
        return User.resetPassword(email)
            .catch(this.handleErrors);
    }

    handleErrors(error: Errors.BaseError) {
        console.error(error.message);
    }
}
