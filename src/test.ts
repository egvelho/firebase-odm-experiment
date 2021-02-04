import { Node, IsNotEmpty, IsString, Read, Write, Child, query } from "./index";

@Node("$uid")
class User {
  @IsNotEmpty()
  @IsString({ message: "teste 1" })
  teste!: string;

  @IsNotEmpty()
  @IsString()
  teste2?: string;
}

@Node("users")
class Users {
  @Read()
  @Write()
  @Child(User)
  $uid!: User;
}

@Node("rules")
class Rules {
  @Child(Users)
  @Read()
  @Write()
  users!: Users;
}

const rules = new Rules();

export async function test() {
  const { data } = await query(rules, "users").prop("$uid", "teste").get();
  console.log(data);
}

export default rules;
