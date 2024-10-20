export type NavBarValue = string[]
export type PromoSectionValue = string[]

export interface ContactData {
    validSubmission: {
        firstName: string;
        lastName: string;
        email: string;
        message: string;
    },
    "invalidEmail": {
        firstName: string;
        lastName: string;
        email: string;
        message: string;
    },
    "registrationForm": {
        "firstName": string,
        "lastName": string,
        "userEmail": string,
        "userNumber": string,
        "subjects": string,
        "currentAddress": string,
        "state": string,
        "city": string
    },
    "textBox": {
        "fullName": string,
        "email": string,
        "currentAddress": string,
        "permanentAddress": string
    }
}

