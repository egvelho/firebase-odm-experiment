"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadMyself = void 0;
var tslib_1 = require("tslib");
var create_rule_1 = tslib_1.__importDefault(require("../create-rule"));
exports.ReadMyself = create_rule_1.default({
    type: "read",
    firebaseRule: function (propertyName) {
        return propertyName + " === auth.uid";
    },
});
//# sourceMappingURL=read-myself.js.map