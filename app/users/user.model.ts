import { BaseModel } from "../base.model";

export enum ROLES {
    ADMIN = "admin",
    USER = "user",
    CUSTOMER = "customer",
}

export interface User extends BaseModel {
    username: string;
    password: string;
    role: ROLES;
}
