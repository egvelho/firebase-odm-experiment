import createRule from "../create-rule";

export default createRule({
  type: "write",
  firebaseRule(propertyName) {
    return `${propertyName} === auth.uid`;
  },
});
