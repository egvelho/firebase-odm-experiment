"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForm = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
function mapValues(input, values, client, computedResults) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var results, _b, errors, errors_1;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(computedResults !== null && computedResults !== void 0)) return [3 /*break*/, 1];
                    _b = computedResults;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, client(input, { validateOnly: true })];
                case 2:
                    _b = (_c.sent());
                    _c.label = 3;
                case 3:
                    results = _b;
                    if (typeof results.data === "object" &&
                        typeof results.data.output === "undefined" &&
                        Array.isArray(results.data.errors) &&
                        ((_a = results.data.errors.filter(function (data) {
                            var _a, _b;
                            return typeof ((_a = (data !== null && data !== void 0 ? data : {})) === null || _a === void 0 ? void 0 : _a.property) === "string" &&
                                typeof ((_b = (data !== null && data !== void 0 ? data : {})) === null || _b === void 0 ? void 0 : _b.constraints) === "object";
                        })) === null || _a === void 0 ? void 0 : _a.length) === results.data.errors.length) {
                        errors = results.data.errors;
                        errors_1 = errors.reduce(function (stack, _a) {
                            var _b;
                            var property = _a.property, constraints = _a.constraints;
                            return (tslib_1.__assign(tslib_1.__assign({}, stack), (_b = {}, _b[property] = Object.values(constraints), _b)));
                        }, {});
                        return [2 /*return*/, Object.keys(input).reduce(function (stack, key) {
                                var _a;
                                var _b;
                                return tslib_1.__assign(tslib_1.__assign({}, stack), (_a = {}, _a[key] = tslib_1.__assign(tslib_1.__assign({}, values[key]), { value: input[key], errors: (_b = errors_1[key]) !== null && _b !== void 0 ? _b : [] }), _a));
                            }, {})];
                    }
                    else {
                        return [2 /*return*/, Object.keys(input).reduce(function (stack, key) {
                                var _a;
                                return tslib_1.__assign(tslib_1.__assign({}, stack), (_a = {}, _a[key] = tslib_1.__assign(tslib_1.__assign({}, values[key]), { value: input[key], errors: [] }), _a));
                            }, {})];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getInitialValues(input) {
    return Object.keys(input).reduce(function (stack, key) {
        var _a;
        return tslib_1.__assign(tslib_1.__assign({}, stack), (_a = {}, _a[key] = {
            value: input[key],
            focus: false,
            touched: false,
            errors: [],
        }, _a));
    }, {});
}
function useForm(client, initialState) {
    var _a = tslib_1.__read(react_1.useState(false), 2), loading = _a[0], setLoading = _a[1];
    var _b = tslib_1.__read(react_1.useState(initialState), 2), state = _b[0], setState = _b[1];
    var _c = tslib_1.__read(react_1.useState(getInitialValues(initialState)), 2), values = _c[0], setValues = _c[1];
    react_1.useEffect(function () {
        mapValues(state, values, client).then(setValues);
    }, []);
    react_1.useEffect(function () {
        mapValues(state, values, client).then(setValues);
    }, [state]);
    return {
        loading: loading,
        data: state,
        form: values,
        submitForm: function (customInput, config) {
            if (customInput === void 0) { customInput = {}; }
            if (config === void 0) { config = {}; }
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var touchedValues, response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            setLoading(true);
                            touchedValues = Object.keys(values).reduce(function (stack, key) {
                                var _a;
                                return (tslib_1.__assign(tslib_1.__assign({}, stack), (_a = {}, _a[key] = tslib_1.__assign(tslib_1.__assign({}, values[key]), { touched: true }), _a)));
                            }, {});
                            return [4 /*yield*/, client(tslib_1.__assign(tslib_1.__assign({}, state), customInput), config)];
                        case 1:
                            response = _a.sent();
                            mapValues(state, touchedValues, client, response).then(setValues);
                            setLoading(false);
                            return [2 /*return*/, response];
                    }
                });
            });
        },
        setForm: function (nextState) { return setState(tslib_1.__assign(tslib_1.__assign({}, state), nextState)); },
        setFormFocus: function (key) {
            var _a;
            return setValues(tslib_1.__assign(tslib_1.__assign({}, values), (_a = {}, _a[key] = tslib_1.__assign(tslib_1.__assign({}, values[key]), { focus: true }), _a)));
        },
        setFormBlur: function (key) {
            var _a;
            return setValues(tslib_1.__assign(tslib_1.__assign({}, values), (_a = {}, _a[key] = tslib_1.__assign(tslib_1.__assign({}, values[key]), { focus: false, touched: true }), _a)));
        },
    };
}
exports.useForm = useForm;
//# sourceMappingURL=use-form.js.map