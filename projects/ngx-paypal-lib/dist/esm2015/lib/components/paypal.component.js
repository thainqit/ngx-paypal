/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/paypal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { PayPalScriptService } from '../services/paypal-script.service';
export class NgxPaypalComponent {
    /**
     * @param {?} paypalScriptService
     * @param {?} cdr
     * @param {?} ngZone
     */
    constructor(paypalScriptService, cdr, ngZone) {
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
        this.scriptLoaded = new EventEmitter();
        this.ngUnsubscribe = new Subject();
        /**
         * Flag that indicates if paypal should be initialized (required for handling script load events and availability of DOM element)
         */
        this.initializePayPal = true;
    }
    /**
     * @param {?} content
     * @return {?}
     */
    set payPalButtonContainer(content) {
        this.payPalButtonContainerElem = content;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.payPalButtonContainerId) {
            this.payPalButtonContainerId = this.generateElementId();
        }
        // first time config setup
        /** @type {?} */
        const config = this.config;
        if (changes.config.isFirstChange()) {
            if (config && this.registerScript) {
                this.initPayPalScript(config, (/**
                 * @param {?} payPal
                 * @return {?}
                 */
                (payPal) => {
                    // store reference to paypal global script
                    this.payPal = payPal;
                    this.doPayPalCheck();
                }));
            }
        }
        // changes to config
        if (!changes.config.isFirstChange()) {
            this.reinitialize(config);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.paypalScriptService.destroyPayPalScript();
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.doPayPalCheck();
    }
    /**
     * @param {?} payPal
     * @return {?}
     */
    customInit(payPal) {
        this.payPal = payPal;
        this.doPayPalCheck();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    reinitialize(config) {
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
                this.initPayPalScript(this.config, (/**
                 * @param {?} payPal
                 * @return {?}
                 */
                (payPal) => {
                    // store reference to paypal global script
                    this.payPal = payPal;
                    this.doPayPalCheck();
                }));
            }
            else {
                this.doPayPalCheck();
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    doPayPalCheck() {
        if (this.initializePayPal && this.config && this.payPal && this.payPalButtonContainerElem) {
            // make sure that id is also set
            if (this.payPalButtonContainerElem.nativeElement.id) {
                this.initializePayPal = false;
                this.initPayPal(this.config, this.payPal);
            }
        }
    }
    /**
     * @private
     * @param {?} config
     * @param {?} initPayPal
     * @return {?}
     */
    initPayPalScript(config, initPayPal) {
        this.paypalScriptService.registerPayPalScript({
            clientId: config.clientId,
            commit: config.advanced && config.advanced.commit ? config.advanced.commit : undefined,
            currency: config.currency,
            vault: config.vault,
            extraParams: config.advanced && config.advanced.extraQueryParams ? config.advanced.extraQueryParams : []
        }, (/**
         * @param {?} paypal
         * @return {?}
         */
        (paypal) => {
            this.scriptLoaded.next(paypal);
            initPayPal(paypal);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    generateElementId() {
        return `ngx-captcha-id-${new Date().valueOf()}`;
    }
    /**
     * @private
     * @param {?} config
     * @param {?} paypal
     * @return {?}
     */
    initPayPal(config, paypal) {
        // Running outside angular zone prevents infinite ngDoCheck lifecycle calls
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            // https://developer.paypal.com/docs/checkout/integrate/#2-add-the-paypal-script-to-your-web-page
            /** @type {?} */
            const createOrder = (/**
             * @param {?} data
             * @param {?} actions
             * @return {?}
             */
            (data, actions) => {
                return this.ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    if (config.createOrderOnClient && config.createOrderOnServer) {
                        throw Error(`Both 'createOrderOnClient' and 'createOrderOnServer' are defined.
                    Please choose one or the other.`);
                    }
                    if (!config.createOrderOnClient && !config.createOrderOnServer) {
                        throw Error(`Neither 'createOrderOnClient' or 'createOrderOnServer' are defined.
                    Please define one of these to create order.`);
                    }
                    if (config.createOrderOnClient) {
                        return actions.order.create(config.createOrderOnClient(data));
                    }
                    if (config.createOrderOnServer) {
                        return config.createOrderOnServer(data);
                    }
                    throw Error(`Invalid state for 'createOrder'.`);
                }));
            });
            /** @type {?} */
            const createSubscription = (/**
             * @param {?} data
             * @param {?} actions
             * @return {?}
             */
            (data, actions) => {
                return this.ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    if (config.createSubscription) {
                        return config.createSubscription(data, actions);
                    }
                }));
            });
            /** @type {?} */
            const onShippingChange = (/**
             * @param {?} data
             * @param {?} actions
             * @return {?}
             */
            (data, actions) => {
                return this.ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    if (config.onShippingChange) {
                        return config.onShippingChange(data, actions);
                    }
                }));
            });
            /** @type {?} */
            const buttonsConfig = Object.assign(Object.assign(Object.assign({ style: config.style, onApprove: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    return this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.onApprove) {
                            config.onApprove(data, actions);
                        }
                        // capture on server
                        if (config.authorizeOnServer) {
                            return config.authorizeOnServer(data, actions);
                        }
                        // capture on client
                        /** @type {?} */
                        const onClientAuthorization = config.onClientAuthorization;
                        if (onClientAuthorization) {
                            actions.order.capture().then((/**
                             * @param {?} details
                             * @return {?}
                             */
                            (details) => {
                                this.ngZone.run((/**
                                 * @return {?}
                                 */
                                () => {
                                    onClientAuthorization(details);
                                }));
                            }));
                            return;
                        }
                    }));
                }), onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.onError) {
                            config.onError(error);
                        }
                    }));
                }), onCancel: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.onCancel) {
                            config.onCancel(data, actions);
                        }
                    }));
                }), onClick: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.onClick) {
                            config.onClick(data, actions);
                        }
                    }));
                }), onInit: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.onInit) {
                            config.onInit(data, actions);
                        }
                    }));
                }) }, ((config.createOrderOnClient || config.createOrderOnServer) && { createOrder })), (config.createSubscription && { createSubscription })), (config.onShippingChange && { onShippingChange }));
            paypal.Buttons(buttonsConfig).render(`#${this.payPalButtonContainerId}`);
        }));
    }
}
NgxPaypalComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'ngx-paypal',
                template: `
    <div #payPalButtonContainer [id]="payPalButtonContainerId"></div>
    `
            }] }
];
/** @nocollapse */
NgxPaypalComponent.ctorParameters = () => [
    { type: PayPalScriptService },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
NgxPaypalComponent.propDecorators = {
    config: [{ type: Input }],
    registerScript: [{ type: Input }],
    scriptLoaded: [{ type: Output }],
    payPalButtonContainer: [{ type: ViewChild, args: ['payPalButtonContainer', { static: false },] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9wYXlwYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVILHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBRU4sU0FBUyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFpQi9CLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBU3hFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQXdDM0IsWUFDWSxtQkFBd0MsRUFDeEMsR0FBc0IsRUFDdEIsTUFBYztRQUZkLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7Ozs7UUFoQ2pCLG1CQUFjLEdBQVksSUFBSSxDQUFDOzs7O1FBSzlCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQU9oQyxrQkFBYSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDOzs7O1FBVTVELHFCQUFnQixHQUFZLElBQUksQ0FBQztJQVl6QyxDQUFDOzs7OztJQW5CRCxJQUEyRCxxQkFBcUIsQ0FBQyxPQUFtQjtRQUNoRyxJQUFJLENBQUMseUJBQXlCLEdBQUcsT0FBTyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBbUJELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQy9CLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMzRDs7O2NBR0ssTUFBTSxHQUFHLElBQUks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QyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBL1BKLFNBQVMsU0FBQztnQkFDUCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7S0FFVDthQUNKOzs7O1lBUlEsbUJBQW1CO1lBN0J4QixpQkFBaUI7WUFLakIsTUFBTTs7O3FCQXNDTCxLQUFLOzZCQU1MLEtBQUs7MkJBS0wsTUFBTTtvQ0FVTixTQUFTLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7Ozs7O0lBckJyRCxvQ0FBZ0M7Ozs7OztJQU1oQyw0Q0FBd0M7Ozs7O0lBS3hDLDBDQUFpRDs7Ozs7SUFLakQscURBQXdDOzs7OztJQUV4QywyQ0FBb0U7Ozs7O0lBRXBFLHVEQUErQzs7Ozs7O0lBUS9DLDhDQUF5Qzs7Ozs7O0lBS3pDLG9DQUFvQjs7Ozs7SUFHaEIsaURBQWdEOzs7OztJQUNoRCxpQ0FBOEI7Ozs7O0lBQzlCLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgTmdab25lLFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT3V0cHV0LFxuICAgIFNpbXBsZUNoYW5nZXMsXG4gICAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgICBJQ2FuY2VsQ2FsbGJhY2tEYXRhLFxuICAgIElDbGllbnRBdXRob3JpemVDYWxsYmFja0RhdGEsXG4gICAgSUNyZWF0ZU9yZGVyQ2FsbGJhY2tBY3Rpb25zLFxuICAgIElJbml0Q2FsbGJhY2tEYXRhLFxuICAgIElPbkFwcHJvdmVDYWxsYmFja0FjdGlvbnMsXG4gICAgSU9uQXBwcm92ZUNhbGxiYWNrRGF0YSxcbiAgICBJT25DbGlja0NhbGxiYWNrQWN0aW9ucyxcbiAgICBJT25Jbml0Q2FsbGJhY2tBY3Rpb25zLFxuICAgIElPblNoaXBwaW5nQ2hhbmdlQWN0aW9ucyxcbiAgICBJT25TaGlwcGluZ0NoYW5nZURhdGEsXG4gICAgSVBheVBhbENvbmZpZyxcbiAgICBJQ3JlYXRlU3Vic2NyaXB0aW9uQ2FsbGJhY2tBY3Rpb25zLFxuICAgIElDcmVhdGVTdWJzY3JpcHRpb25DYWxsYmFja0RhdGEsXG59IGZyb20gJy4uL21vZGVscy9wYXlwYWwtbW9kZWxzJztcbmltcG9ydCB7IFBheVBhbFNjcmlwdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wYXlwYWwtc2NyaXB0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBzZWxlY3RvcjogJ25neC1wYXlwYWwnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAjcGF5UGFsQnV0dG9uQ29udGFpbmVyIFtpZF09XCJwYXlQYWxCdXR0b25Db250YWluZXJJZFwiPjwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTmd4UGF5cGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJhdGlvbiBmb3IgcGF5cGFsLlxuICAgICAqL1xuICAgIEBJbnB1dCgpIGNvbmZpZz86IElQYXlQYWxDb25maWc7XG5cbiAgICAvKipcbiAgICAgKiBJZiBlbmFibGVkLCBwYXlwYWwgU0RLIHNjcmlwdCB3aWxsIGJlIGxvYWRlZC4gVXNlZnVsIGlmIHlvdSB3YW50IHRvIGhhdmUgbXVsdGlwbGUgUGF5UGFsIGNvbXBvbmVudHMgb24gdGhlIHNhbWUgcGFnZVxuICAgICAqIHNoYXJpbmcgYmFzZSBjb25maWd1cmF0aW9uLiBJbiBzdWNoIGEgY2FzZSBvbmx5IGEgc2luZ2xlIGNvbXBvbmVudCBtYXkgcmVnaXN0ZXIgc2NyaXB0LlxuICAgICAqL1xuICAgIEBJbnB1dCgpIHJlZ2lzdGVyU2NyaXB0OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiBwYXlwYWwgc2NyaXB0IGlzIGxvYWRlZFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBzY3JpcHRMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIC8qKlxuICAgICAqIElkIG9mIHRoZSBlbGVtZW50IHdoZXJlIFBheVBhbCBidXR0b24gd2lsbCBiZSByZW5kZXJlZFxuICAgICAqL1xuICAgIHB1YmxpYyBwYXlQYWxCdXR0b25Db250YWluZXJJZD86IHN0cmluZztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmdVbnN1YnNjcmliZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgICBwcml2YXRlIHBheVBhbEJ1dHRvbkNvbnRhaW5lckVsZW0/OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3BheVBhbEJ1dHRvbkNvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBzZXQgcGF5UGFsQnV0dG9uQ29udGFpbmVyKGNvbnRlbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5wYXlQYWxCdXR0b25Db250YWluZXJFbGVtID0gY29udGVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGbGFnIHRoYXQgaW5kaWNhdGVzIGlmIHBheXBhbCBzaG91bGQgYmUgaW5pdGlhbGl6ZWQgKHJlcXVpcmVkIGZvciBoYW5kbGluZyBzY3JpcHQgbG9hZCBldmVudHMgYW5kIGF2YWlsYWJpbGl0eSBvZiBET00gZWxlbWVudClcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXRpYWxpemVQYXlQYWw6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRvIFBheVBhbCBnbG9iYWwgQVBJXG4gICAgICovXG4gICAgcHJpdmF0ZSBwYXlQYWw6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBheXBhbFNjcmlwdFNlcnZpY2U6IFBheVBhbFNjcmlwdFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnBheVBhbEJ1dHRvbkNvbnRhaW5lcklkKSB7XG4gICAgICAgICAgICB0aGlzLnBheVBhbEJ1dHRvbkNvbnRhaW5lcklkID0gdGhpcy5nZW5lcmF0ZUVsZW1lbnRJZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgdGltZSBjb25maWcgc2V0dXBcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG5cbiAgICAgICAgaWYgKGNoYW5nZXMuY29uZmlnLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiB0aGlzLnJlZ2lzdGVyU2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0UGF5UGFsU2NyaXB0KGNvbmZpZywgKHBheVBhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSByZWZlcmVuY2UgdG8gcGF5cGFsIGdsb2JhbCBzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXlQYWwgPSBwYXlQYWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9QYXlQYWxDaGVjaygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hhbmdlcyB0byBjb25maWdcbiAgICAgICAgaWYgKCFjaGFuZ2VzLmNvbmZpZy5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVpbml0aWFsaXplKGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYXlwYWxTY3JpcHRTZXJ2aWNlLmRlc3Ryb3lQYXlQYWxTY3JpcHQoKTtcbiAgICAgICAgdGhpcy5uZ1Vuc3Vic2NyaWJlLm5leHQoKTtcbiAgICAgICAgdGhpcy5uZ1Vuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRvUGF5UGFsQ2hlY2soKTtcbiAgICB9XG5cbiAgICBjdXN0b21Jbml0KHBheVBhbDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMucGF5UGFsID0gcGF5UGFsO1xuICAgICAgICB0aGlzLmRvUGF5UGFsQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZWluaXRpYWxpemUoY29uZmlnOiBJUGF5UGFsQ29uZmlnIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLnBheVBhbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5wYXlwYWxTY3JpcHRTZXJ2aWNlLmRlc3Ryb3lQYXlQYWxTY3JpcHQoKTtcbiAgICAgICAgdGhpcy5wYXlQYWxCdXR0b25Db250YWluZXJJZCA9IHRoaXMuZ2VuZXJhdGVFbGVtZW50SWQoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUGF5UGFsID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5wYXlQYWxCdXR0b25Db250YWluZXJFbGVtKSB7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5wYXlQYWxCdXR0b25Db250YWluZXJFbGVtLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF5UGFsQnV0dG9uQ29udGFpbmVyRWxlbS5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMucGF5UGFsQnV0dG9uQ29udGFpbmVyRWxlbS5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBheVBhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFBheVBhbFNjcmlwdCh0aGlzLmNvbmZpZywgKHBheVBhbCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHJlZmVyZW5jZSB0byBwYXlwYWwgZ2xvYmFsIHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBheVBhbCA9IHBheVBhbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1BheVBhbENoZWNrKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZG9QYXlQYWxDaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGRvUGF5UGFsQ2hlY2soKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVQYXlQYWwgJiYgdGhpcy5jb25maWcgJiYgdGhpcy5wYXlQYWwgJiYgdGhpcy5wYXlQYWxCdXR0b25Db250YWluZXJFbGVtKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBpZCBpcyBhbHNvIHNldFxuICAgICAgICAgICAgaWYgKHRoaXMucGF5UGFsQnV0dG9uQ29udGFpbmVyRWxlbS5uYXRpdmVFbGVtZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplUGF5UGFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0UGF5UGFsKHRoaXMuY29uZmlnLCB0aGlzLnBheVBhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRQYXlQYWxTY3JpcHQoY29uZmlnOiBJUGF5UGFsQ29uZmlnLCBpbml0UGF5UGFsOiAocGF5cGFsOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYXlwYWxTY3JpcHRTZXJ2aWNlLnJlZ2lzdGVyUGF5UGFsU2NyaXB0KHtcbiAgICAgICAgICAgIGNsaWVudElkOiBjb25maWcuY2xpZW50SWQsXG4gICAgICAgICAgICBjb21taXQ6IGNvbmZpZy5hZHZhbmNlZCAmJiBjb25maWcuYWR2YW5jZWQuY29tbWl0ID8gY29uZmlnLmFkdmFuY2VkLmNvbW1pdCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBjb25maWcuY3VycmVuY3ksXG4gICAgICAgICAgICB2YXVsdDogY29uZmlnLnZhdWx0LFxuICAgICAgICAgICAgZXh0cmFQYXJhbXM6IGNvbmZpZy5hZHZhbmNlZCAmJiBjb25maWcuYWR2YW5jZWQuZXh0cmFRdWVyeVBhcmFtcyA/IGNvbmZpZy5hZHZhbmNlZC5leHRyYVF1ZXJ5UGFyYW1zIDogW11cbiAgICAgICAgfSwgKHBheXBhbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY3JpcHRMb2FkZWQubmV4dChwYXlwYWwpO1xuICAgICAgICAgICAgaW5pdFBheVBhbChwYXlwYWwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlRWxlbWVudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgbmd4LWNhcHRjaGEtaWQtJHtuZXcgRGF0ZSgpLnZhbHVlT2YoKX1gO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdFBheVBhbChjb25maWc6IElQYXlQYWxDb25maWcsIHBheXBhbDogYW55KTogdm9pZCB7XG4gICAgICAgIC8vIFJ1bm5pbmcgb3V0c2lkZSBhbmd1bGFyIHpvbmUgcHJldmVudHMgaW5maW5pdGUgbmdEb0NoZWNrIGxpZmVjeWNsZSBjYWxsc1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLnBheXBhbC5jb20vZG9jcy9jaGVja291dC9pbnRlZ3JhdGUvIzItYWRkLXRoZS1wYXlwYWwtc2NyaXB0LXRvLXlvdXItd2ViLXBhZ2VcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZU9yZGVyID0gKGRhdGE6IGFueSwgYWN0aW9uczogSUNyZWF0ZU9yZGVyQ2FsbGJhY2tBY3Rpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuY3JlYXRlT3JkZXJPbkNsaWVudCAmJiBjb25maWcuY3JlYXRlT3JkZXJPblNlcnZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYEJvdGggJ2NyZWF0ZU9yZGVyT25DbGllbnQnIGFuZCAnY3JlYXRlT3JkZXJPblNlcnZlcicgYXJlIGRlZmluZWQuXG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBjaG9vc2Ugb25lIG9yIHRoZSBvdGhlci5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmNyZWF0ZU9yZGVyT25DbGllbnQgJiYgIWNvbmZpZy5jcmVhdGVPcmRlck9uU2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgTmVpdGhlciAnY3JlYXRlT3JkZXJPbkNsaWVudCcgb3IgJ2NyZWF0ZU9yZGVyT25TZXJ2ZXInIGFyZSBkZWZpbmVkLlxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZGVmaW5lIG9uZSBvZiB0aGVzZSB0byBjcmVhdGUgb3JkZXIuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmNyZWF0ZU9yZGVyT25DbGllbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLmNyZWF0ZShjb25maWcuY3JlYXRlT3JkZXJPbkNsaWVudChkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmNyZWF0ZU9yZGVyT25TZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25maWcuY3JlYXRlT3JkZXJPblNlcnZlcihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIHN0YXRlIGZvciAnY3JlYXRlT3JkZXInLmApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVN1YnNjcmlwdGlvbiA9IChkYXRhOiBJQ3JlYXRlU3Vic2NyaXB0aW9uQ2FsbGJhY2tEYXRhLCBhY3Rpb25zOiBJQ3JlYXRlU3Vic2NyaXB0aW9uQ2FsbGJhY2tBY3Rpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuY3JlYXRlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnLmNyZWF0ZVN1YnNjcmlwdGlvbihkYXRhLCBhY3Rpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG9uU2hpcHBpbmdDaGFuZ2UgPSAoZGF0YTogSU9uU2hpcHBpbmdDaGFuZ2VEYXRhLCBhY3Rpb25zOiBJT25TaGlwcGluZ0NoYW5nZUFjdGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5vblNoaXBwaW5nQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnLm9uU2hpcHBpbmdDaGFuZ2UoZGF0YSwgYWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBidXR0b25zQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIHN0eWxlOiBjb25maWcuc3R5bGUsXG4gICAgICAgICAgICAgICAgb25BcHByb3ZlOiAoZGF0YTogSU9uQXBwcm92ZUNhbGxiYWNrRGF0YSwgYWN0aW9uczogSU9uQXBwcm92ZUNhbGxiYWNrQWN0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcub25BcHByb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLm9uQXBwcm92ZShkYXRhLCBhY3Rpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FwdHVyZSBvbiBzZXJ2ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuYXV0aG9yaXplT25TZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnLmF1dGhvcml6ZU9uU2VydmVyKGRhdGEsIGFjdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXB0dXJlIG9uIGNsaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb25DbGllbnRBdXRob3JpemF0aW9uID0gY29uZmlnLm9uQ2xpZW50QXV0aG9yaXphdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkNsaWVudEF1dGhvcml6YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLm9yZGVyLmNhcHR1cmUoKS50aGVuKChkZXRhaWxzOiBJQ2xpZW50QXV0aG9yaXplQ2FsbGJhY2tEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWVudEF1dGhvcml6YXRpb24oZGV0YWlscyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkVycm9yOiAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5vbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsOiAoZGF0YTogSUNhbmNlbENhbGxiYWNrRGF0YSwgYWN0aW9uczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLm9uQ2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLm9uQ2FuY2VsKGRhdGEsIGFjdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IChkYXRhOiBhbnksIGFjdGlvbnM6IElPbkNsaWNrQ2FsbGJhY2tBY3Rpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLm9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcub25DbGljayhkYXRhLCBhY3Rpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkluaXQ6IChkYXRhOiBJSW5pdENhbGxiYWNrRGF0YSwgYWN0aW9uczogSU9uSW5pdENhbGxiYWNrQWN0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5vbkluaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcub25Jbml0KGRhdGEsIGFjdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgZnVuY3Rpb25zIGlmIHRoZXkndmUgYmVlbiBjcmVhdGVkIGluIHRoZSBjb25maWcgb2JqZWN0XG4gICAgICAgICAgICAgICAgLy8gVGhlIEFQSSBvbmx5IGFsbG93cyBvbmUgb2YgdGhlIHR3byB0byBiZSBzZXRcbiAgICAgICAgICAgICAgICAuLi4oKGNvbmZpZy5jcmVhdGVPcmRlck9uQ2xpZW50IHx8IGNvbmZpZy5jcmVhdGVPcmRlck9uU2VydmVyKSAmJiB7IGNyZWF0ZU9yZGVyIH0pLFxuICAgICAgICAgICAgICAgIC4uLihjb25maWcuY3JlYXRlU3Vic2NyaXB0aW9uICYmIHsgY3JlYXRlU3Vic2NyaXB0aW9uIH0pLFxuICAgICAgICAgICAgICAgIC8vIFRoZSBvblNoaXBwaW5nQ2hhbmdlIGNhbGxiYWNrIGNhbm5vdCBiZSB1c2VkIHdpdGggc3Vic2NyaXB0aW9uc1xuICAgICAgICAgICAgICAgIC8vIHNvIHdlIG9ubHkgYWRkIGl0IGlmIGl0IGlzIHNldFxuICAgICAgICAgICAgICAgIC4uLihjb25maWcub25TaGlwcGluZ0NoYW5nZSAmJiB7IG9uU2hpcHBpbmdDaGFuZ2UgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwYXlwYWwuQnV0dG9ucyhidXR0b25zQ29uZmlnKS5yZW5kZXIoYCMke3RoaXMucGF5UGFsQnV0dG9uQ29udGFpbmVySWR9YCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuIl19