import createRule from "../create-rule";

export default createRule({
  type: "write",
  firebaseRule() {
    return true;
  },
});
