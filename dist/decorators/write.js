"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Write = void 0;
var tslib_1 = require("tslib");
var create_rule_1 = tslib_1.__importDefault(require("../create-rule"));
exports.Write = create_rule_1.default({
    type: "write",
    firebaseRule: function () {
        return true;
    },
});
//# sourceMappingURL=write.js.map