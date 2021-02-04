import createRule from "../create-rule";

export default createRule({
  type: "read",
  firebaseRule() {
    return true;
  },
});
