
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
