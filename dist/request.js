"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
var tslib_1 = require("tslib");
var client_1 = require("./client");
var baseURL = (_b = (_a = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL) !== null && _a !== void 0 ? _a : process.env.REACT_APP_FIREBASE_DATABASE_URL) !== null && _b !== void 0 ? _b : process.env.FIREBASE_DATABASE_URL;
function get(url) {
    var _this = this;
    return function (params, config) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client_1.client(Object.keys(params).reduce(function (obj, key) {
                        var _a;
                        return (tslib_1.__assign(tslib_1.__assign({}, obj), (_a = {}, _a[key] = typeof params[key] === "string"
                            ? "\"" + params[key] + "\""
                            : params[key], _a)));
                    }, {}), tslib_1.__assign({ method: "GET", url: url,
                        baseURL: baseURL }, config))];
                case 1:
                    response = _a.sent();
                    response.data =
                        response.data !== null && response.data.error === undefined
                            ? response.data
                            : undefined;
                    return [2 /*return*/, response];
            }
        });
    }); };
}
function queryGet(response) {
    if (response.data !== undefined) {
        response.data = Object.values(response.data).filter(function (data) { return data; });
        return response;
    }
    else {
        return response;
    }
}
function query(genericGet) {
    var _this = this;
    var get = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, genericGet.apply(void 0, tslib_1.__spread(args))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, queryGet(response)];
                }
            });
        });
    };
    return function (config) {
        if (config === void 0) { config = {}; }
        return ({
            orderBy: function (orderBy) { return ({
                startAt: function (startAt) { return ({
                    limitToFirst: function (limitToFirst) { return ({
                        get: function () { return get({ orderBy: orderBy, startAt: startAt, limitToFirst: limitToFirst }, config); },
                    }); },
                    limitToLast: function (limitToLast) { return ({
                        get: function () { return get({ orderBy: orderBy, startAt: startAt, limitToLast: limitToLast }, config); },
                    }); },
                    endAt: function (endAt) { return ({
                        limitToFirst: function (limitToFirst) { return ({
                            get: function () { return get({ orderBy: orderBy, startAt: startAt, endAt: endAt, limitToFirst: limitToFirst }, config); },
                        }); },
                        limitToLast: function (limitToLast) { return ({
                            get: function () { return get({ orderBy: orderBy, startAt: startAt, endAt: endAt, limitToLast: limitToLast }, config); },
                        }); },
                        get: function () { return get({ orderBy: orderBy, startAt: startAt, endAt: endAt }, config); },
                    }); },
                    get: function () { return get({ orderBy: orderBy, startAt: startAt }, config); },
                }); },
                endAt: function (endAt) { return ({
                    limitToFirst: function (limitToFirst) { return ({
                        get: function () { return get({ orderBy: orderBy, endAt: endAt, limitToFirst: limitToFirst }, config); },
                    }); },
                    limitToLast: function (limitToLast) { return ({
                        get: function () { return get({ orderBy: orderBy, endAt: endAt, limitToLast: limitToLast }, config); },
                    }); },
                    get: function () { return get({ orderBy: orderBy, endAt: endAt }, config); },
                }); },
                limitToFirst: function (limitToFirst) { return ({
                    get: function () { return get({ orderBy: orderBy, limitToFirst: limitToFirst }, config); },
                }); },
                limitToLast: function (limitToLast) { return ({
                    get: function () { return get({ orderBy: orderBy, limitToLast: limitToLast }, config); },
                }); },
                equalTo: function (equalTo) { return ({
                    limitToFirst: function (limitToFirst) { return ({
                        get: function () { return get({ orderBy: orderBy, limitToFirst: limitToFirst, equalTo: equalTo }, config); },
                        limitToLast: function (limitToLast) { return ({
                            get: function () { return get({ orderBy: orderBy, limitToLast: limitToLast, equalTo: equalTo }, config); },
                        }); },
                    }); },
                    limitToLast: function (limitToLast) { return ({
                        get: function () { return get({ orderBy: orderBy, limitToLast: limitToLast, equalTo: equalTo }, config); },
                    }); },
                    get: function () { return get({ orderBy: orderBy, equalTo: equalTo }, config); },
                }); },
                get: function () { return get({ orderBy: orderBy }, config); },
            }); },
            orderByChild: function (key) {
                return {
                    get: function () { return get({ orderByChild: key }, config); },
                };
            },
            orderByValue: function () {
                return {
                    get: function () { return get({ orderByValue: true }, config); },
                };
            },
            orderByKey: function () {
                return {
                    get: function () { return get({ orderByKey: true }, config); },
                };
            },
        });
    };
}
function request(object, key, arg, keys) {
    if (arg === void 0) { arg = key; }
    if (keys === void 0) { keys = [key]; }
    var obj = object[key];
    return {
        path: function () {
            return keys;
        },
        url: function () {
            return "/" + keys.join("/") + ".json";
        },
        prop: function (key, arg_) {
            if (arg_ === void 0) { arg_ = key; }
            return request(obj, key, arg_, tslib_1.__spread(keys, [arg_]));
        },
        query: function (config) {
            if (config === void 0) { config = {}; }
            return query(get(this.url()))(config);
        },
        get: function (params, config) {
            if (params === void 0) { params = {}; }
            if (config === void 0) { config = {}; }
            return get(this.url())(params, config);
        },
        post: function (input, config) {
            var _a, _b, _c;
            if (config === void 0) { config = {}; }
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, client_1.validatedClient(input, object, tslib_1.__assign({ method: "POST", url: this.url(), baseURL: baseURL }, config))];
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
                        case 0: return [4 /*yield*/, client_1.validatedClient(input, object, tslib_1.__assign({ method: "PUT", url: this.url(), baseURL: baseURL }, config))];
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
                        case 0: return [4 /*yield*/, client_1.validatedClient(input, object, tslib_1.__assign({ method: "PATCH", url: this.url(), baseURL: baseURL }, config))];
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
                        case 0: return [4 /*yield*/, client_1.client({}, tslib_1.__assign({ method: "DELETE", url: this.url(), baseURL: baseURL }, config))];
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
exports.request = request;
//# sourceMappingURL=request.js.map