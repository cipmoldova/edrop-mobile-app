import { Injectable } from "@angular/core";
import { Errors, User } from "kinvey-nativescript-sdk";
import { Observable, of } from "rxjs";

export class LoginUser {
    email: string;
    password: string;
    confirmPassword: string;
    tocken: string;
}

export enum Sex {
    Masculin = "M",
    Feminin = "F"
    // Cursed be he/she who tries to add or use other so-called "genders" in this application!
}

// tslint:disable-next-line:max-classes-per-file
export class Person {
    firstName: string;
    middleName: string;
    lastName: string;
    address: string;
    email: string;
    password: string;
    phoneNumber: string;
    sex: Sex;

    getFullName(): string {
        return this.firstName
            + (this.middleName ? " " + this.middleName : "")
            + (this.lastName ? " " + this.lastName : "")
        ;
    }
}

// tslint:disable-next-line: max-classes-per-file
@Injectable()
export class UserService {

    authenticatedUser: LoginUser = new LoginUser();

    getNumberOfDonations(): Observable<number> {
        return of(15);
    }

    getNumberOfCredits(): Observable<number> {
        return of(3000);
    }

    getDateLastDonation(): Observable<Date> {
        return of(new Date());
    }

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

    resetPassword(email: string) {
        return User.resetPassword(email)
            .catch(this.handleErrors);
    }

    handleErrors(error: Errors.KinveyError) {
        console.error(error.message);
    }
}
