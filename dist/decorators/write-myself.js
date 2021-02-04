"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteMyself = void 0;
var tslib_1 = require("tslib");
var create_rule_1 = tslib_1.__importDefault(require("../create-rule"));
exports.WriteMyself = create_rule_1.default({
    type: "write",
    firebaseRule: function (propertyName) {
        return propertyName + " === auth.uid";
    },
});
//# sourceMappingURL=write-myself.js.map