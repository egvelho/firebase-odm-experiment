import "reflect-metadata";
import fs from "fs";
import IsString from "./decorators/IsString";
import Read from "./decorators/Read";
import Write from "./decorators/Write";
import query from "./query";
import WriteMyself from "./decorators/WriteMyself";
import ReadMyself from "./decorators/ReadMyself";
import IsNotEmpty from "./decorators/IsNotEmpty";
import Child from "./decorators/Child";
import Node from "./decorators/Node";
import generateSchema from "./generate-schema";

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

(async () => {
  const { data } = await query(rules, "users").prop("$uid", "teste").get();

  console.log(data);
})();

fs.writeFileSync("firebase-schema.json", JSON.stringify(generateSchema(rules)));
