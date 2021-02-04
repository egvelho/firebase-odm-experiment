import { ValidatorConstraintInterface } from "class-validator";
export default function createValidator<ValidationArgs extends (...args: any[]) => never>({ name, constraintsLength, validate, firebaseRule, classLevel, }: {
    name: string;
    constraintsLength: number;
    validate: ValidatorConstraintInterface["validate"];
    firebaseRule: (validationArgs?: Parameters<ValidationArgs>) => any;
    classLevel?: boolean;
}): (...args: Parameters<ValidationArgs>) => (object: Object, propertyName: string) => void;
