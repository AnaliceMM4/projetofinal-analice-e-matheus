export interface IUserSignup{
    displayName: String;
    username: String;
    password: String;
}

export interface IUserLogin{
    username: String;
    password: String;
}

export interface ICategory {
    id?: number;
    name: string;
}
