import { isString, ValidationOptions } from "class-validator";
import createValidator from "../create-validator";

export default createValidator<
  (validationOptions?: ValidationOptions) => never
>({
  name: "firebaseIsString",
  constraintsLength: 0,
  validate: isString,
  firebaseRule() {
    return "newData.isString()";
  },
});
