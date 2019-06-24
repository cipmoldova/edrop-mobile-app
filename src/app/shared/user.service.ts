import { Injectable } from "@angular/core";
import { Errors, User } from "kinvey-nativescript-sdk";
import { Observable, of } from "rxjs";

import { LoginUser, Person, Sex } from "./user.model";

@Injectable()
export class UserService {

    authenticatedUser: LoginUser = new LoginUser();

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
                    this.authenticatedUser = null;
                    User.login(user.email, user.password)
                        .then(() => {
                            this.authenticatedUser = user;
                            resolve();
                        })
                        .catch((error) => { this.handleErrors(error); reject(); });
                })
                .catch((error) => { this.handleErrors(error); reject(); });
        });
    }

    getPersonDetails(user: LoginUser): Observable<Person> {
        // TODO get from server
        const person: Person = new Person();
        person.firstName = "Andrei";
        person.middleName = "Ion";
        person.lastName = "Filip";
        person.address = "194/3 Alba Iulia street, Chisinau";
        person.email = "office@cipm.md";
        person.password = "1234";
        person.phoneNumber = "(+373) 68459217";
        person.sex = Sex.Masculin;

        return of (person);
    }

    resetPassword(email) {
        return User.resetPassword(email)
            .catch(this.handleErrors);
    }

    handleErrors(error: Errors.KinveyError) {
        console.error(error.message);
    }
}
