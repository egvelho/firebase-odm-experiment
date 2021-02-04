"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatedClient = exports.client = void 0;
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
function client(input, config) {
    var _a, _b;
    if (config === void 0) { config = {}; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var data, params, response;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    data = ["POST", "PUT", "PATCH"].includes((_a = config.method) !== null && _a !== void 0 ? _a : "")
                        ? input
                        : undefined;
                    params = ["GET", "DELETE"].includes((_b = config.method) !== null && _b !== void 0 ? _b : "")
                        ? input
                        : undefined;
                    return [4 /*yield*/, axios_1.default.request(tslib_1.__assign({ headers: {
                                "Content-Type": "application/json",
                            }, baseURL: config.baseURL, validateStatus: validateStatus, url: config.url, data: data,
                            params: params }, config))];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
exports.client = client;
function validatedClient(input, classInput, config) {
    if (config === void 0) { config = {}; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var client_;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client_ = enforceInput(classInput, client);
                    return [4 /*yield*/, client_(input, config)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.validatedClient = validatedClient;
function validateStatus(status) {
    if (status >= 500) {
        return false;
    }
    else {
        return true;
    }
}
function enforceInput(class_, client_) {
    var _this = this;
    return function (input, config) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var input_, errors;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input_ = class_transformer_1.plainToClass(Object.getPrototypeOf(class_).constructor, input, {
                        ignoreDecorators: true,
                    });
                    return [4 /*yield*/, class_validator_1.validate(input_, {
                            whitelist: true,
                            skipMissingProperties: true,
                        })];
                case 1:
                    errors = _a.sent();
                    if (errors.length > 0 || (config === null || config === void 0 ? void 0 : config.validateOnly)) {
                        process.env.NODE_ENV === "development" &&
                            console.log(input_.constructor.name, errors);
                        return [2 /*return*/, {
                                data: { output: undefined, errors: errors },
                                config: config,
                                status: 200,
                                statusText: "OK",
                                headers: undefined,
                                request: undefined,
                            }];
                    }
                    else {
                        return [2 /*return*/, client_(input, config)];
                    }
                    return [2 /*return*/];
            }
        });
    }); };
}
//# sourceMappingURL=client.js.map