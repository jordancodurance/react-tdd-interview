import {User} from "./User";

export interface UserGateway {
    getAll(): Promise<User[]>
}