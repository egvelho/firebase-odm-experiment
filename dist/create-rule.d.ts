export default function createRule<ValidationArgs extends (...args: any[]) => never>({ type, firebaseRule, classLevel, }: {
    type: "read" | "write";
    firebaseRule: (validationArgs?: Parameters<ValidationArgs>) => any;
    classLevel?: boolean;
}): (...args: Parameters<ValidationArgs>) => (object: Object, propertyName: string) => void;
