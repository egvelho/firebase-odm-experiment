"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Read = void 0;
var tslib_1 = require("tslib");
var create_rule_1 = tslib_1.__importDefault(require("../create-rule"));
exports.Read = create_rule_1.default({
    type: "read",
    firebaseRule: function () {
        return true;
    },
});
//# sourceMappingURL=read.js.map