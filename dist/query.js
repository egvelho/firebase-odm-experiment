"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
var tslib_1 = require("tslib");
var client_1 = require("./client");
var baseURL = (_b = (_a = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL) !== null && _a !== void 0 ? _a : process.env.REACT_APP_FIREBASE_DATABASE_URL) !== null && _b !== void 0 ? _b : process.env.FIREBASE_DATABASE_URL;
function query(object, key, arg, keys) {
    if (arg === void 0) { arg = key; }
    if (keys === void 0) { keys = [key]; }
    var obj = object[key];
    return {
        url: function () {
            return "/" + keys.join("/") + ".json";
        },
        prop: function (key, arg_) {
            if (arg_ === void 0) { arg_ = key; }
            return query(obj, key, arg_, tslib_1.__spread(keys, [arg_]));
        },
        get: function (config) {
            if (config === void 0) { config = {}; }
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, client_1.client({}, tslib_1.__assign(tslib_1.__assign({}, config), { method: "GET", url: this.url(), baseURL: baseURL }))];
                        case 1:
                            response = _a.sent();
                            response.data =
                                response.data !== null && response.data.error === undefined
                                    ? response.data
                                    : undefined;
                            return [2 /*return*/, response];
                    }
                });
            });
        },
        post: function (input, config) {
            var _a, _b, _c;
            if (config === void 0) { config = {}; }
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, client_1.validatedClient(input, object, tslib_1.__assign(tslib_1.__assign({}, config), { method: "POST", url: this.url(), baseURL: baseURL }))];
                        case 1:
                            response = _d.sent();
                            response.data = {
                                output: (_a = response.data) === null || _a === void 0 ? void 0 : _a.name,
                                errors: (_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.errors) !== null && _c !== void 0 ? _c : [],
                            };
                            return [2 /*return*/, response];
                    }
                });
            });
        },
        put: function (input, config) {
            var _a, _b, _c;
            if (config === void 0) { config = {}; }
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, client_1.validatedClient(input, object, tslib_1.__assign(tslib_1.__assign({}, config), { method: "PUT", url: this.url(), baseURL: baseURL }))];
                        case 1:
                            response = _d.sent();
                            response.data = {
                                output: response.data && !response.data.error && !((_a = response.data.errors) === null || _a === void 0 ? void 0 : _a.length)
                                    ? response.data
                                    : undefined,
                                errors: (_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.errors) !== null && _c !== void 0 ? _c : [],
                            };
                            return [2 /*return*/, response];
                    }
                });
            });
        },
        patch: function (input, config) {
            var _a, _b, _c;
            if (config === void 0) { config = {}; }
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, client_1.validatedClient(input, object, tslib_1.__assign(tslib_1.__assign({}, config), { method: "PATCH", url: this.url(), baseURL: baseURL }))];
                        case 1:
                            response = _d.sent();
                            response.data = {
                                output: response.data && !response.data.error && !((_a = response.data.errors) === null || _a === void 0 ? void 0 : _a.length)
                                    ? response.data
                                    : undefined,
                                errors: (_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.errors) !== null && _c !== void 0 ? _c : [],
                            };
                            return [2 /*return*/, response];
                    }
                });
            });
        },
        delete: function (config) {
            if (config === void 0) { config = {}; }
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, client_1.client({}, tslib_1.__assign(tslib_1.__assign({}, config), { method: "DELETE", url: this.url(), baseURL: baseURL }))];
                        case 1:
                            response = _a.sent();
                            response.data = response.data === null;
                            return [2 /*return*/, response];
                    }
                });
            });
        },
    };
}
exports.query = query;
//# sourceMappingURL=query.js.map