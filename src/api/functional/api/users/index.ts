/**
 * @packageDocumentation
 * @module api.functional.api.users
 */
//================================================================
import { AesPkcs5, Fetcher, Primitive } from "nestia-fetcher";
import type { IConnection } from "nestia-fetcher";

import type { CreateUserDto } from "./../../../structures/create-user.dto";
import type { User } from "./../../../../models/tables/user";

/**
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param dto 생성할 유저의 정보
 * @returns 새로 생성된 유저의 정보
 * 
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller UsersController.signUp()
 * @path POST /api/users
 */
export function signUp
    (
        connection: IConnection,
        dto: Primitive<signUp.Input>
    ): Promise<signUp.Output>
{
    return Fetcher.fetch
    (
        connection,
        signUp.ENCRYPTED,
        signUp.METHOD,
        signUp.path(),
        dto
    );
}
export namespace signUp
{
    export type Input = Primitive<CreateUserDto>;
    export type Output = Primitive<User>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/api/users";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string
    {
        return `/api/users`;
    }
}



//---------------------------------------------------------
// TO PREVENT THE UNUSED VARIABLE ERROR
//---------------------------------------------------------
AesPkcs5;
Fetcher;
Primitive;