declare class User {
    teste: string;
    teste2?: string;
}
declare class Users {
    $uid: User;
}
declare class Rules {
    users: Users;
}
declare const rules: Rules;
export declare function test(): Promise<void>;
export default rules;
