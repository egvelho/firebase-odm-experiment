"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
var tslib_1 = require("tslib");
var index_1 = require("./index");
var User = /** @class */ (function () {
    function User() {
    }
    tslib_1.__decorate([
        index_1.IsNotEmpty(),
        index_1.IsString({ message: "teste 1" }),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "teste", void 0);
    tslib_1.__decorate([
        index_1.IsNotEmpty(),
        index_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "teste2", void 0);
    User = tslib_1.__decorate([
        index_1.Node("$uid")
    ], User);
    return User;
}());
var Users = /** @class */ (function () {
    function Users() {
    }
    tslib_1.__decorate([
        index_1.Read(),
        index_1.Write(),
        index_1.Child(User),
        tslib_1.__metadata("design:type", User)
    ], Users.prototype, "$uid", void 0);
    Users = tslib_1.__decorate([
        index_1.Node("users")
    ], Users);
    return Users;
}());
var Rules = /** @class */ (function () {
    function Rules() {
    }
    tslib_1.__decorate([
        index_1.Child(Users),
        index_1.Read(),
        index_1.Write(),
        tslib_1.__metadata("design:type", Users)
    ], Rules.prototype, "users", void 0);
    Rules = tslib_1.__decorate([
        index_1.Node("rules")
    ], Rules);
    return Rules;
}());
var rules = new Rules();
function test() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_1.query(rules, "users").prop("$uid", "teste").get()];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/];
            }
        });
    });
}
exports.test = test;
exports.default = rules;
//# sourceMappingURL=test.js.map