
export class LoginUser {
    email: string;
    password: string;
    confirmPassword: string;
    tocken: string;
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

    getFullName(): string {
        return this.firstName
            + (this.middleName ? " " + this.middleName : "")
            + (this.lastName ? " " + this.lastName : "")
        ;
    }
}
