import createRule from "../create-rule";

export default createRule({
  type: "read",
  firebaseRule(propertyName) {
    return `${propertyName} === auth.uid`;
  },
});
