(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ngx-paypal', ['exports', '@angular/common', '@angular/core', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-paypal'] = {}, global.ng.common, global.ng.core, global.rxjs));
}(this, (function (exports, common, core, rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/script.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScriptService = /** @class */ (function () {
        /**
         * @param {?} zone
         */
        function ScriptService(zone) {
            this.zone = zone;
        }
        /**
         * @param {?} url
         * @param {?} globalVar
         * @param {?} onReady
         * @return {?}
         */
        ScriptService.prototype.registerScript = function (url, globalVar, onReady) {
            var _this = this;
            /** @type {?} */
            var existingGlobalVar = (( /** @type {?} */(window)))[globalVar];
            if (existingGlobalVar) {
                // global variable is present = script was already loaded
                this.zone.run(( /**
                 * @return {?}
                 */function () {
                    onReady(existingGlobalVar);
                }));
                return;
            }
            // prepare script elem
            /** @type {?} */
            var scriptElem = document.createElement('script');
            scriptElem.id = this.getElemId(globalVar);
            scriptElem.innerHTML = '';
            scriptElem.onload = ( /**
             * @return {?}
             */function () {
                _this.zone.run(( /**
                 * @return {?}
                 */function () {
                    onReady((( /** @type {?} */(window)))[globalVar]);
                }));
            });
            scriptElem.src = url;
            scriptElem.async = true;
            scriptElem.defer = true;
            // add script to header
            document.getElementsByTagName('head')[0].appendChild(scriptElem);
        };
        /**
         * @param {?} globalVar
         * @return {?}
         */
        ScriptService.prototype.cleanup = function (globalVar) {
            // remove script from DOM
            /** @type {?} */
            var scriptElem = document.getElementById(this.getElemId(globalVar));
            if (scriptElem) {
                scriptElem.remove();
            }
        };
        /**
         * @private
         * @param {?} globalVar
         * @return {?}
         */
        ScriptService.prototype.getElemId = function (globalVar) {
            return "ngx-paypal-script-elem-" + globalVar;
        };
        return ScriptService;
    }());
    ScriptService.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    ScriptService.ctorParameters = function () { return [
        { type: core.NgZone }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        ScriptService.prototype.zone;
    }

    var PayPalScriptService = /** @class */ (function () {
        /**
         * @param {?} scriptService
         */
        function PayPalScriptService(scriptService) {
            this.scriptService = scriptService;
            this.paypalWindowName = 'paypal';
        }
        /**
         * @param {?} config
         * @param {?} onReady
         * @return {?}
         */
        PayPalScriptService.prototype.registerPayPalScript = function (config, onReady) {
            this.scriptService.registerScript(this.getUrlForConfig(config), this.paypalWindowName, onReady);
        };
        /**
         * @return {?}
         */
        PayPalScriptService.prototype.destroyPayPalScript = function () {
            this.scriptService.cleanup(this.paypalWindowName);
        };
        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        PayPalScriptService.prototype.getUrlForConfig = function (config) {
            /** @type {?} */
            var params = [
                {
                    name: 'client-id',
                    value: config.clientId
                }
            ];
            if (config.currency) {
                params.push({
                    name: 'currency',
                    value: config.currency
                });
            }
            if (config.commit) {
                params.push({
                    name: 'commit',
                    value: config.commit
                });
            }
            if (config.vault) {
                params.push({
                    name: 'vault',
                    value: config.vault
                });
            }
            if (config.extraParams) {
                params.push.apply(params, __spread(config.extraParams));
            }
            return "https://www.paypal.com/sdk/js" + this.getQueryString(params);
        };
        /**
         * @private
         * @param {?} queryParams
         * @return {?}
         */
        PayPalScriptService.prototype.getQueryString = function (queryParams) {
            /** @type {?} */
            var queryString = '';
            for (var i = 0; i < queryParams.length; i++) {
                /** @type {?} */
                var queryParam = queryParams[i];
                if (i === 0) {
                    queryString += '?';
                }
                else {
                    queryString += '&';
                }
                queryString += queryParam.name + "=" + queryParam.value;
            }
            return queryString;
        };
        return PayPalScriptService;
    }());
    PayPalScriptService.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    PayPalScriptService.ctorParameters = function () { return [
        { type: ScriptService }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        PayPalScriptService.prototype.paypalWindowName;
        /**
         * @type {?}
         * @protected
         */
        PayPalScriptService.prototype.scriptService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/paypal.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxPaypalComponent = /** @class */ (function () {
        /**
         * @param {?} paypalScriptService
         * @param {?} cdr
         * @param {?} ngZone
         */
        function NgxPaypalComponent(paypalScriptService, cdr, ngZone) {
            this.paypalScriptService = paypalScriptService;
            this.cdr = cdr;
            this.ngZone = ngZone;
            /**
             * If enabled, paypal SDK script will be loaded. Useful if you want to have multiple PayPal components on the same page
             * sharing base configuration. In such a case only a single component may register script.
             */
            this.registerScript = true;
            /**
             * Emitted when paypal script is loaded
             */
            this.scriptLoaded = new core.EventEmitter();
            this.ngUnsubscribe = new rxjs.Subject();
            /**
             * Flag that indicates if paypal should be initialized (required for handling script load events and availability of DOM element)
             */
            this.initializePayPal = true;
        }
        Object.defineProperty(NgxPaypalComponent.prototype, "payPalButtonContainer", {
            /**
             * @param {?} content
             * @return {?}
             */
            set: function (content) {
                this.payPalButtonContainerElem = content;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        NgxPaypalComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (!this.payPalButtonContainerId) {
                this.payPalButtonContainerId = this.generateElementId();
            }
            // first time config setup
            /** @type {?} */
            var config = this.config;
            if (changes.config.isFirstChange()) {
                if (config && this.registerScript) {
                    this.initPayPalScript(config, ( /**
                     * @param {?} payPal
                     * @return {?}
                     */function (payPal) {
                        // store reference to paypal global script
                        _this.payPal = payPal;
                        _this.doPayPalCheck();
                    }));
                }
            }
            // changes to config
            if (!changes.config.isFirstChange()) {
                this.reinitialize(config);
            }
        };
        /**
         * @return {?}
         */
        NgxPaypalComponent.prototype.ngOnDestroy = function () {
            this.paypalScriptService.destroyPayPalScript();
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
        };
        /**
         * @return {?}
         */
        NgxPaypalComponent.prototype.ngAfterViewInit = function () {
            this.doPayPalCheck();
        };
        /**
         * @param {?} payPal
         * @return {?}
         */
        NgxPaypalComponent.prototype.customInit = function (payPal) {
            this.payPal = payPal;
            this.doPayPalCheck();
        };
        /**
         * @param {?} config
         * @return {?}
         */
        NgxPaypalComponent.prototype.reinitialize = function (config) {
            var _this = this;
            this.config = config;
            this.payPal = undefined;
            this.paypalScriptService.destroyPayPalScript();
            this.payPalButtonContainerId = this.generateElementId();
            this.initializePayPal = true;
            if (this.payPalButtonContainerElem) {
                while (this.payPalButtonContainerElem.nativeElement.firstChild) {
                    this.payPalButtonContainerElem.nativeElement.removeChild(this.payPalButtonContainerElem.nativeElement.firstChild);
                }
            }
            this.cdr.detectChanges();
            if (this.config) {
                if (!this.payPal) {
                    this.initPayPalScript(this.config, ( /**
                     * @param {?} payPal
                     * @return {?}
                     */function (payPal) {
                        // store reference to paypal global script
                        _this.payPal = payPal;
                        _this.doPayPalCheck();
                    }));
                }
                else {
                    this.doPayPalCheck();
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgxPaypalComponent.prototype.doPayPalCheck = function () {
            if (this.initializePayPal && this.config && this.payPal && this.payPalButtonContainerElem) {
                // make sure that id is also set
                if (this.payPalButtonContainerElem.nativeElement.id) {
                    this.initializePayPal = false;
                    this.initPayPal(this.config, this.payPal);
                }
            }
        };
        /**
         * @private
         * @param {?} config
         * @param {?} initPayPal
         * @return {?}
         */
        NgxPaypalComponent.prototype.initPayPalScript = function (config, initPayPal) {
            var _this = this;
            this.paypalScriptService.registerPayPalScript({
                clientId: config.clientId,
                commit: config.advanced && config.advanced.commit ? config.advanced.commit : undefined,
                currency: config.currency,
                vault: config.vault,
                extraParams: config.advanced && config.advanced.extraQueryParams ? config.advanced.extraQueryParams : []
            }, ( /**
             * @param {?} paypal
             * @return {?}
             */function (paypal) {
                _this.scriptLoaded.next(paypal);
                initPayPal(paypal);
            }));
        };
        /**
         * @private
         * @return {?}
         */
        NgxPaypalComponent.prototype.generateElementId = function () {
            return "ngx-captcha-id-" + new Date().valueOf();
        };
        /**
         * @private
         * @param {?} config
         * @param {?} paypal
         * @return {?}
         */
        NgxPaypalComponent.prototype.initPayPal = function (config, paypal) {
            var _this = this;
            // Running outside angular zone prevents infinite ngDoCheck lifecycle calls
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                // https://developer.paypal.com/docs/checkout/integrate/#2-add-the-paypal-script-to-your-web-page
                /** @type {?} */
                var createOrder = ( /**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */function (data, actions) {
                    return _this.ngZone.run(( /**
                     * @return {?}
                     */function () {
                        if (config.createOrderOnClient && config.createOrderOnServer) {
                            throw Error("Both 'createOrderOnClient' and 'createOrderOnServer' are defined.\n                    Please choose one or the other.");
                        }
                        if (!config.createOrderOnClient && !config.createOrderOnServer) {
                            throw Error("Neither 'createOrderOnClient' or 'createOrderOnServer' are defined.\n                    Please define one of these to create order.");
                        }
                        if (config.createOrderOnClient) {
                            return actions.order.create(config.createOrderOnClient(data));
                        }
                        if (config.createOrderOnServer) {
                            return config.createOrderOnServer(data);
                        }
                        throw Error("Invalid state for 'createOrder'.");
                    }));
                });
                /** @type {?} */
                var createSubscription = ( /**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */function (data, actions) {
                    return _this.ngZone.run(( /**
                     * @return {?}
                     */function () {
                        if (config.createSubscription) {
                            return config.createSubscription(data, actions);
                        }
                    }));
                });
                /** @type {?} */
                var onShippingChange = ( /**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */function (data, actions) {
                    return _this.ngZone.run(( /**
                     * @return {?}
                     */function () {
                        if (config.onShippingChange) {
                            return config.onShippingChange(data, actions);
                        }
                    }));
                });
                /** @type {?} */
                var buttonsConfig = Object.assign(Object.assign(Object.assign({ style: config.style, onApprove: ( /**
                         * @param {?} data
                         * @param {?} actions
                         * @return {?}
                         */function (data, actions) {
                        return _this.ngZone.run(( /**
                         * @return {?}
                         */function () {
                            if (config.onApprove) {
                                config.onApprove(data, actions);
                            }
                            // capture on server
                            if (config.authorizeOnServer) {
                                return config.authorizeOnServer(data, actions);
                            }
                            // capture on client
                            /** @type {?} */
                            var onClientAuthorization = config.onClientAuthorization;
                            if (onClientAuthorization) {
                                actions.order.capture().then(( /**
                                 * @param {?} details
                                 * @return {?}
                                 */function (details) {
                                    _this.ngZone.run(( /**
                                     * @return {?}
                                     */function () {
                                        onClientAuthorization(details);
                                    }));
                                }));
                                return;
                            }
                        }));
                    }), onError: ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        _this.ngZone.run(( /**
                         * @return {?}
                         */function () {
                            if (config.onError) {
                                config.onError(error);
                            }
                        }));
                    }), onCancel: ( /**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */function (data, actions) {
                        _this.ngZone.run(( /**
                         * @return {?}
                         */function () {
                            if (config.onCancel) {
                                config.onCancel(data, actions);
                            }
                        }));
                    }), onClick: ( /**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */function (data, actions) {
                        _this.ngZone.run(( /**
                         * @return {?}
                         */function () {
                            if (config.onClick) {
                                config.onClick(data, actions);
                            }
                        }));
                    }), onInit: ( /**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */function (data, actions) {
                        _this.ngZone.run(( /**
                         * @return {?}
                         */function () {
                            if (config.onInit) {
                                config.onInit(data, actions);
                            }
                        }));
                    }) }, ((config.createOrderOnClient || config.createOrderOnServer) && { createOrder: createOrder })), (config.createSubscription && { createSubscription: createSubscription })), (config.onShippingChange && { onShippingChange: onShippingChange }));
                paypal.Buttons(buttonsConfig).render("#" + _this.payPalButtonContainerId);
            }));
        };
        return NgxPaypalComponent;
    }());
    NgxPaypalComponent.decorators = [
        { type: core.Component, args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    selector: 'ngx-paypal',
                    template: "\n    <div #payPalButtonContainer [id]=\"payPalButtonContainerId\"></div>\n    "
                }] }
    ];
    /** @nocollapse */
    NgxPaypalComponent.ctorParameters = function () { return [
        { type: PayPalScriptService },
        { type: core.ChangeDetectorRef },
        { type: core.NgZone }
    ]; };
    NgxPaypalComponent.propDecorators = {
        config: [{ type: core.Input }],
        registerScript: [{ type: core.Input }],
        scriptLoaded: [{ type: core.Output }],
        payPalButtonContainer: [{ type: core.ViewChild, args: ['payPalButtonContainer', { static: false },] }]
    };
    if (false) {
        /**
         * Configuration for paypal.
         * @type {?}
         */
        NgxPaypalComponent.prototype.config;
        /**
         * If enabled, paypal SDK script will be loaded. Useful if you want to have multiple PayPal components on the same page
         * sharing base configuration. In such a case only a single component may register script.
         * @type {?}
         */
        NgxPaypalComponent.prototype.registerScript;
        /**
         * Emitted when paypal script is loaded
         * @type {?}
         */
        NgxPaypalComponent.prototype.scriptLoaded;
        /**
         * Id of the element where PayPal button will be rendered
         * @type {?}
         */
        NgxPaypalComponent.prototype.payPalButtonContainerId;
        /**
         * @type {?}
         * @private
         */
        NgxPaypalComponent.prototype.ngUnsubscribe;
        /**
         * @type {?}
         * @private
         */
        NgxPaypalComponent.prototype.payPalButtonContainerElem;
        /**
         * Flag that indicates if paypal should be initialized (required for handling script load events and availability of DOM element)
         * @type {?}
         * @private
         */
        NgxPaypalComponent.prototype.initializePayPal;
        /**
         * Reference to PayPal global API
         * @type {?}
         * @private
         */
        NgxPaypalComponent.prototype.payPal;
        /**
         * @type {?}
         * @private
         */
        NgxPaypalComponent.prototype.paypalScriptService;
        /**
         * @type {?}
         * @private
         */
        NgxPaypalComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NgxPaypalComponent.prototype.ngZone;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-paypal.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxPayPalModule = /** @class */ (function () {
        function NgxPayPalModule() {
        }
        return NgxPayPalModule;
    }());
    NgxPayPalModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        NgxPaypalComponent,
                    ],
                    exports: [
                        NgxPaypalComponent,
                    ],
                    providers: [
                        ScriptService,
                        PayPalScriptService
                    ]
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-paypal.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxPayPalModule = NgxPayPalModule;
    exports.NgxPaypalComponent = NgxPaypalComponent;
    exports.PayPalScriptService = PayPalScriptService;
    exports.ɵa = ScriptService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-paypal.umd.js.map
