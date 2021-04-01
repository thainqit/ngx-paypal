/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/paypal-models.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IPayPalConfig() { }
if (false) {
    /**
     * Currency - Defaults to USD if not provided
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.currency;
    /**
     * Use when creating order on client
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.createOrderOnClient;
    /**
     * Use for creating orders on server. PayPal expects you to return 'orderId' in this method
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.createOrderOnServer;
    /**
     * Advanced configuration
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.advanced;
    /**
     * Client id
     * @type {?}
     */
    IPayPalConfig.prototype.clientId;
    /**
     * Shipping callback
     * see https://developer.paypal.com/docs/checkout/integration-features/shipping-callback/
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.onShippingChange;
    /**
     * Called when 'onApprove' event occurs
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.onApprove;
    /**
     * Called when authorization on client succeeds
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.onClientAuthorization;
    /**
     * Implement for authorizing on server side
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.authorizeOnServer;
    /**
     * Button style configuration
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.style;
    /**
     * Error handler
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.onError;
    /**
     * Click handler
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.onClick;
    /**
     * Cancel handler
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.onCancel;
    /**
     * Init handler.
     * can be used for validation, see: https://developer.paypal.com/docs/checkout/integration-features/validation/#
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.onInit;
    /**
     * Create subscription handler
     * https://developer.paypal.com/docs/subscriptions/integrate/
     *
     * Note: the vault property in the advanced configuration also has to be set to true
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.createSubscription;
    /**
     * Vault - must be set to true when creating subscriptions
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.vault;
}
/**
 * @record
 */
export function IPayPalUrlConfig() { }
if (false) {
    /** @type {?} */
    IPayPalUrlConfig.prototype.clientId;
    /** @type {?|undefined} */
    IPayPalUrlConfig.prototype.currency;
    /** @type {?|undefined} */
    IPayPalUrlConfig.prototype.commit;
    /** @type {?|undefined} */
    IPayPalUrlConfig.prototype.vault;
    /** @type {?|undefined} */
    IPayPalUrlConfig.prototype.extraParams;
}
/**
 * @record
 */
export function IOrderDetails() { }
if (false) {
    /** @type {?} */
    IOrderDetails.prototype.create_time;
    /** @type {?} */
    IOrderDetails.prototype.update_time;
    /** @type {?} */
    IOrderDetails.prototype.id;
    /** @type {?} */
    IOrderDetails.prototype.intent;
    /** @type {?} */
    IOrderDetails.prototype.payer;
    /** @type {?} */
    IOrderDetails.prototype.status;
    /** @type {?} */
    IOrderDetails.prototype.links;
    /** @type {?} */
    IOrderDetails.prototype.purchase_units;
}
/**
 * @record
 */
export function IClientAuthorizeCallbackData() { }
if (false) {
    /** @type {?} */
    IClientAuthorizeCallbackData.prototype.links;
}
/**
 * @record
 */
export function ILinkDescription() { }
if (false) {
    /** @type {?} */
    ILinkDescription.prototype.href;
    /** @type {?} */
    ILinkDescription.prototype.rel;
    /** @type {?|undefined} */
    ILinkDescription.prototype.method;
}
/**
 * @record
 */
export function IQueryParam() { }
if (false) {
    /** @type {?} */
    IQueryParam.prototype.name;
    /** @type {?} */
    IQueryParam.prototype.value;
}
/**
 * @record
 */
export function IOnShippingChangeData() { }
if (false) {
    /** @type {?} */
    IOnShippingChangeData.prototype.paymentToken;
    /** @type {?} */
    IOnShippingChangeData.prototype.shipping_address;
    /** @type {?|undefined} */
    IOnShippingChangeData.prototype.selected_shipping_method;
}
/**
 * @record
 */
export function IOnShippingChangeActions() { }
if (false) {
    /** @type {?} */
    IOnShippingChangeActions.prototype.resolve;
    /** @type {?} */
    IOnShippingChangeActions.prototype.reject;
    /** @type {?} */
    IOnShippingChangeActions.prototype.patch;
}
/**
 * @record
 */
export function IAdvancedConfiguration() { }
if (false) {
    /** @type {?|undefined} */
    IAdvancedConfiguration.prototype.commit;
    /** @type {?|undefined} */
    IAdvancedConfiguration.prototype.extraQueryParams;
}
/**
 * @record
 */
export function IOnApproveCallbackData() { }
if (false) {
    /** @type {?} */
    IOnApproveCallbackData.prototype.orderID;
    /** @type {?} */
    IOnApproveCallbackData.prototype.payerID;
    /** @type {?} */
    IOnApproveCallbackData.prototype.subscriptionID;
}
/**
 * @record
 */
export function ICreateOrderCallbackActions() { }
if (false) {
    /** @type {?} */
    ICreateOrderCallbackActions.prototype.order;
}
/**
 * @record
 */
export function ICancelCallbackData() { }
if (false) {
    /** @type {?} */
    ICancelCallbackData.prototype.orderID;
}
/**
 * @record
 */
export function IOnApproveCallbackActions() { }
if (false) {
    /** @type {?} */
    IOnApproveCallbackActions.prototype.redirect;
    /** @type {?} */
    IOnApproveCallbackActions.prototype.restart;
    /** @type {?} */
    IOnApproveCallbackActions.prototype.order;
}
/**
 * @record
 */
export function IOnInitCallbackActions() { }
if (false) {
    /** @type {?} */
    IOnInitCallbackActions.prototype.enable;
    /** @type {?} */
    IOnInitCallbackActions.prototype.disable;
}
/**
 * @record
 */
export function ICreateSubscriptionCallbackActions() { }
if (false) {
    /** @type {?} */
    ICreateSubscriptionCallbackActions.prototype.subscription;
}
/**
 * @record
 */
export function IInitCallbackData() { }
/**
 * @record
 */
export function ICreateSubscriptionCallbackData() { }
/**
 * @record
 */
export function IOnClickCallbackActions() { }
if (false) {
    /** @type {?} */
    IOnClickCallbackActions.prototype.resolve;
    /** @type {?} */
    IOnClickCallbackActions.prototype.reject;
}
/**
 * @record
 */
export function IPayPalButtonStyle() { }
if (false) {
    /** @type {?|undefined} */
    IPayPalButtonStyle.prototype.label;
    /** @type {?|undefined} */
    IPayPalButtonStyle.prototype.size;
    /** @type {?|undefined} */
    IPayPalButtonStyle.prototype.shape;
    /** @type {?|undefined} */
    IPayPalButtonStyle.prototype.color;
    /** @type {?|undefined} */
    IPayPalButtonStyle.prototype.layout;
    /** @type {?|undefined} */
    IPayPalButtonStyle.prototype.tagline;
    /** @type {?|undefined} */
    IPayPalButtonStyle.prototype.height;
}
/**
 * @record
 */
export function ICreateOrderRequest() { }
if (false) {
    /** @type {?} */
    ICreateOrderRequest.prototype.intent;
    /** @type {?} */
    ICreateOrderRequest.prototype.purchase_units;
    /** @type {?|undefined} */
    ICreateOrderRequest.prototype.payer;
    /** @type {?|undefined} */
    ICreateOrderRequest.prototype.application_context;
}
/**
 * @record
 */
export function ICreateSubscriptionRequest() { }
if (false) {
    /** @type {?} */
    ICreateSubscriptionRequest.prototype.plan_id;
    /** @type {?|undefined} */
    ICreateSubscriptionRequest.prototype.quantity;
    /** @type {?|undefined} */
    ICreateSubscriptionRequest.prototype.plan;
    /** @type {?|undefined} */
    ICreateSubscriptionRequest.prototype.subscriber;
    /** @type {?|undefined} */
    ICreateSubscriptionRequest.prototype.application_context;
}
/**
 * @record
 */
export function IPayer() { }
if (false) {
    /** @type {?|undefined} */
    IPayer.prototype.name;
    /** @type {?|undefined} */
    IPayer.prototype.email_address;
    /** @type {?|undefined} */
    IPayer.prototype.payer_id;
    /** @type {?|undefined} */
    IPayer.prototype.birth_date;
    /** @type {?|undefined} */
    IPayer.prototype.tax_info;
    /** @type {?|undefined} */
    IPayer.prototype.address;
    /** @type {?|undefined} */
    IPayer.prototype.phone;
}
/**
 * @record
 */
export function IApplicationContext() { }
if (false) {
    /** @type {?|undefined} */
    IApplicationContext.prototype.brand_name;
    /** @type {?|undefined} */
    IApplicationContext.prototype.locale;
    /** @type {?|undefined} */
    IApplicationContext.prototype.landing_page;
    /** @type {?|undefined} */
    IApplicationContext.prototype.shipping_preference;
    /** @type {?|undefined} */
    IApplicationContext.prototype.user_action;
    /** @type {?|undefined} */
    IApplicationContext.prototype.payment_method;
    /** @type {?|undefined} */
    IApplicationContext.prototype.return_url;
    /** @type {?|undefined} */
    IApplicationContext.prototype.cancel_url;
}
/**
 * @record
 */
export function IPaymentMethod() { }
if (false) {
    /** @type {?|undefined} */
    IPaymentMethod.prototype.payer_selected;
    /** @type {?|undefined} */
    IPaymentMethod.prototype.payee_preferred;
}
/**
 * @record
 */
export function IPhone() { }
if (false) {
    /** @type {?|undefined} */
    IPhone.prototype.phone_type;
    /** @type {?|undefined} */
    IPhone.prototype.phone_number;
}
/**
 * @record
 */
export function ITaxInfo() { }
if (false) {
    /** @type {?} */
    ITaxInfo.prototype.tax_id;
    /** @type {?} */
    ITaxInfo.prototype.tax_id_type;
}
/**
 * @record
 */
export function IPhoneNumber() { }
if (false) {
    /** @type {?} */
    IPhoneNumber.prototype.national_number;
}
/**
 * @record
 */
export function IPurchaseUnit() { }
if (false) {
    /** @type {?} */
    IPurchaseUnit.prototype.amount;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.reference_id;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.payee;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.payment_instruction;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.description;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.custom_id;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.invoice_id;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.soft_descriptor;
    /** @type {?} */
    IPurchaseUnit.prototype.items;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.shipping;
}
/**
 * @record
 */
export function IPayee() { }
if (false) {
    /** @type {?|undefined} */
    IPayee.prototype.email_address;
    /** @type {?|undefined} */
    IPayee.prototype.merchant_id;
}
/**
 * @record
 */
export function IPaymentInstructions() { }
if (false) {
    /** @type {?|undefined} */
    IPaymentInstructions.prototype.platform_fees;
    /** @type {?|undefined} */
    IPaymentInstructions.prototype.disbursement_mode;
}
/**
 * @record
 */
export function IPlatformFee() { }
if (false) {
    /** @type {?} */
    IPlatformFee.prototype.amount;
    /** @type {?|undefined} */
    IPlatformFee.prototype.payee;
}
/**
 * @record
 */
export function ITransactionItem() { }
if (false) {
    /** @type {?} */
    ITransactionItem.prototype.name;
    /** @type {?} */
    ITransactionItem.prototype.unit_amount;
    /** @type {?} */
    ITransactionItem.prototype.quantity;
    /** @type {?|undefined} */
    ITransactionItem.prototype.description;
    /** @type {?|undefined} */
    ITransactionItem.prototype.sku;
    /** @type {?|undefined} */
    ITransactionItem.prototype.category;
    /** @type {?|undefined} */
    ITransactionItem.prototype.tax;
}
/**
 * @record
 */
export function ITax() { }
if (false) {
    /** @type {?} */
    ITax.prototype.currency_code;
    /** @type {?} */
    ITax.prototype.value;
}
/**
 * @record
 */
export function IUnitAmount() { }
if (false) {
    /** @type {?} */
    IUnitAmount.prototype.currency_code;
    /** @type {?} */
    IUnitAmount.prototype.value;
    /** @type {?|undefined} */
    IUnitAmount.prototype.breakdown;
}
/**
 * @record
 */
export function IMoney() { }
if (false) {
    /** @type {?} */
    IMoney.prototype.currency_code;
    /** @type {?} */
    IMoney.prototype.value;
}
/**
 * @record
 */
export function IUnitBreakdown() { }
if (false) {
    /** @type {?|undefined} */
    IUnitBreakdown.prototype.item_total;
    /** @type {?|undefined} */
    IUnitBreakdown.prototype.shipping;
    /** @type {?|undefined} */
    IUnitBreakdown.prototype.handling;
    /** @type {?|undefined} */
    IUnitBreakdown.prototype.tax_total;
    /** @type {?|undefined} */
    IUnitBreakdown.prototype.insurance;
    /** @type {?|undefined} */
    IUnitBreakdown.prototype.shipping_discount;
    /** @type {?|undefined} */
    IUnitBreakdown.prototype.discount;
}
/**
 * @record
 */
export function IPartyName() { }
if (false) {
    /** @type {?|undefined} */
    IPartyName.prototype.prefix;
    /** @type {?|undefined} */
    IPartyName.prototype.given_name;
    /** @type {?|undefined} */
    IPartyName.prototype.surname;
    /** @type {?|undefined} */
    IPartyName.prototype.middle_name;
    /** @type {?|undefined} */
    IPartyName.prototype.suffix;
    /** @type {?|undefined} */
    IPartyName.prototype.alternate_full_name;
    /** @type {?|undefined} */
    IPartyName.prototype.full_name;
}
/**
 * @record
 */
export function IAddressPortable() { }
if (false) {
    /** @type {?} */
    IAddressPortable.prototype.country_code;
    /** @type {?|undefined} */
    IAddressPortable.prototype.address_line_1;
    /** @type {?|undefined} */
    IAddressPortable.prototype.address_line_2;
    /** @type {?|undefined} */
    IAddressPortable.prototype.admin_area_2;
    /** @type {?|undefined} */
    IAddressPortable.prototype.admin_area_1;
    /** @type {?|undefined} */
    IAddressPortable.prototype.postal_code;
}
/**
 * @record
 */
export function IShipping() { }
if (false) {
    /** @type {?|undefined} */
    IShipping.prototype.name;
    /** @type {?|undefined} */
    IShipping.prototype.address;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLW1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWxzL3BheXBhbC1tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxtQ0FxRkM7Ozs7OztJQWpGRyxpQ0FBa0I7Ozs7O0lBS2xCLDRDQUF5RDs7Ozs7SUFLekQsNENBQXFEOzs7OztJQUtyRCxpQ0FBa0M7Ozs7O0lBS2xDLGlDQUFpQjs7Ozs7O0lBTWpCLHlDQUE0Qzs7Ozs7SUFLNUMsa0NBQWlFOzs7OztJQUtqRSw4Q0FBOEU7Ozs7O0lBSzlFLDBDQUFpRjs7Ozs7SUFLakYsOEJBQTJCOzs7OztJQUszQixnQ0FBNkI7Ozs7O0lBSzdCLGdDQUFnRTs7Ozs7SUFLaEUsaUNBQTZEOzs7Ozs7SUFNN0QsK0JBQTRFOzs7Ozs7OztJQVE1RSwyQ0FBa0g7Ozs7O0lBS2xILDhCQUFrQjs7Ozs7QUFLdEIsc0NBTUM7OztJQUxHLG9DQUFpQjs7SUFDakIsb0NBQWtCOztJQUNsQixrQ0FBbUI7O0lBQ25CLGlDQUFrQjs7SUFDbEIsdUNBQTRCOzs7OztBQUdoQyxtQ0FTQzs7O0lBUkcsb0NBQW9COztJQUNwQixvQ0FBb0I7O0lBQ3BCLDJCQUFXOztJQUNYLCtCQUFvQjs7SUFDcEIsOEJBQWM7O0lBQ2QsK0JBQW9COztJQUNwQiw4QkFBMEI7O0lBQzFCLHVDQUFnQzs7Ozs7QUFHcEMsa0RBRUM7OztJQURHLDZDQUEwQjs7Ozs7QUFHOUIsc0NBSUM7OztJQUhHLGdDQUFhOztJQUNiLCtCQUFZOztJQUNaLGtDQUFvQjs7Ozs7QUFHeEIsaUNBR0M7OztJQUZHLDJCQUFhOztJQUNiLDRCQUFjOzs7OztBQUtsQiwyQ0FJQzs7O0lBSEcsNkNBQXFCOztJQUNyQixpREFBc0I7O0lBQ3RCLHlEQUErQjs7Ozs7QUFHbkMsOENBSUM7OztJQUhHLDJDQUFtQjs7SUFDbkIsMENBQWtCOztJQUNsQix5Q0FBaUI7Ozs7O0FBS3JCLDRDQUdD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LHdDQUFxQjs7SUFFckIsMENBQXdCOztJQUN4QiwwQ0FBd0I7O0lBQ3hCLHdDQUFzQjs7SUFDdEIsd0NBQXNCOztJQUN0Qix1Q0FBcUI7Ozs7O0FBR3pCLCtCQUdDOzs7SUFGRyx5QkFBa0I7O0lBQ2xCLDRCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGludGVyZmFjZSBJUGF5UGFsQ29uZmlnIHtcbiAgICAvKipcbiAgICAgKiBDdXJyZW5jeSAtIERlZmF1bHRzIHRvIFVTRCBpZiBub3QgcHJvdmlkZWRcbiAgICAgKi9cbiAgICBjdXJyZW5jeT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICogVXNlIHdoZW4gY3JlYXRpbmcgb3JkZXIgb24gY2xpZW50XG4gICAgKi9cbiAgICBjcmVhdGVPcmRlck9uQ2xpZW50PzogKGRhdGE6IGFueSkgPT4gSUNyZWF0ZU9yZGVyUmVxdWVzdDtcblxuICAgIC8qKlxuICAgICAqIFVzZSBmb3IgY3JlYXRpbmcgb3JkZXJzIG9uIHNlcnZlci4gUGF5UGFsIGV4cGVjdHMgeW91IHRvIHJldHVybiAnb3JkZXJJZCcgaW4gdGhpcyBtZXRob2RcbiAgICAgKi9cbiAgICBjcmVhdGVPcmRlck9uU2VydmVyPzogKGRhdGE6IGFueSkgPT4gUHJvbWlzZTxzdHJpbmc+O1xuXG4gICAgLyoqXG4gICAgICogQWR2YW5jZWQgY29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIGFkdmFuY2VkPzogSUFkdmFuY2VkQ29uZmlndXJhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIENsaWVudCBpZFxuICAgICAqL1xuICAgIGNsaWVudElkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBTaGlwcGluZyBjYWxsYmFja1xuICAgICAqIHNlZSBodHRwczovL2RldmVsb3Blci5wYXlwYWwuY29tL2RvY3MvY2hlY2tvdXQvaW50ZWdyYXRpb24tZmVhdHVyZXMvc2hpcHBpbmctY2FsbGJhY2svXG4gICAgICovXG4gICAgb25TaGlwcGluZ0NoYW5nZT86IE9uU2hpcHBpbmdDaGFuZ2VDYWxsYmFjaztcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuICdvbkFwcHJvdmUnIGV2ZW50IG9jY3Vyc1xuICAgICAqL1xuICAgIG9uQXBwcm92ZT86IChkYXRhOiBJT25BcHByb3ZlQ2FsbGJhY2tEYXRhLCBhY3Rpb25zOiBhbnkpID0+IHZvaWQ7XG5cbiAgICAvKipcbiAgICAqIENhbGxlZCB3aGVuIGF1dGhvcml6YXRpb24gb24gY2xpZW50IHN1Y2NlZWRzXG4gICAgKi9cbiAgICBvbkNsaWVudEF1dGhvcml6YXRpb24/OiAoYXV0aG9yaXphdGlvbjogSUNsaWVudEF1dGhvcml6ZUNhbGxiYWNrRGF0YSkgPT4gdm9pZDtcblxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudCBmb3IgYXV0aG9yaXppbmcgb24gc2VydmVyIHNpZGVcbiAgICAgKi9cbiAgICBhdXRob3JpemVPblNlcnZlcj86IChkYXRhOiBJT25BcHByb3ZlQ2FsbGJhY2tEYXRhLCBhY3Rpb25zOiBhbnkpID0+IFByb21pc2U8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEJ1dHRvbiBzdHlsZSBjb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgc3R5bGU/OiBJUGF5UGFsQnV0dG9uU3R5bGU7XG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBoYW5kbGVyXG4gICAgICovXG4gICAgb25FcnJvcj86IChlcnI6IGFueSkgPT4gdm9pZDtcblxuICAgIC8qKlxuICAgICAqIENsaWNrIGhhbmRsZXJcbiAgICAgKi9cbiAgICBvbkNsaWNrPzogKGRhdGE6IGFueSwgYWN0aW9uczogSU9uQ2xpY2tDYWxsYmFja0FjdGlvbnMpID0+IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBDYW5jZWwgaGFuZGxlclxuICAgICAqL1xuICAgIG9uQ2FuY2VsPzogKGRhdGE6IElDYW5jZWxDYWxsYmFja0RhdGEsIGFjdGlvbnM6IGFueSkgPT4gdm9pZDtcblxuICAgIC8qKlxuICAgICAqIEluaXQgaGFuZGxlci5cbiAgICAgKiBjYW4gYmUgdXNlZCBmb3IgdmFsaWRhdGlvbiwgc2VlOiBodHRwczovL2RldmVsb3Blci5wYXlwYWwuY29tL2RvY3MvY2hlY2tvdXQvaW50ZWdyYXRpb24tZmVhdHVyZXMvdmFsaWRhdGlvbi8jXG4gICAgICovXG4gICAgb25Jbml0PzogKGRhdGE6IElJbml0Q2FsbGJhY2tEYXRhLCBhY3Rpb25zOiBJT25Jbml0Q2FsbGJhY2tBY3Rpb25zKSA9PiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHN1YnNjcmlwdGlvbiBoYW5kbGVyXG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXIucGF5cGFsLmNvbS9kb2NzL3N1YnNjcmlwdGlvbnMvaW50ZWdyYXRlL1xuICAgICAqXG4gICAgICogTm90ZTogdGhlIHZhdWx0IHByb3BlcnR5IGluIHRoZSBhZHZhbmNlZCBjb25maWd1cmF0aW9uIGFsc28gaGFzIHRvIGJlIHNldCB0byB0cnVlXG4gICAgICovXG4gICAgY3JlYXRlU3Vic2NyaXB0aW9uPzogKGRhdGE6IElDcmVhdGVTdWJzY3JpcHRpb25DYWxsYmFja0RhdGEsIGFjdGlvbnM6IElDcmVhdGVTdWJzY3JpcHRpb25DYWxsYmFja0FjdGlvbnMpID0+IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBWYXVsdCAtIG11c3QgYmUgc2V0IHRvIHRydWUgd2hlbiBjcmVhdGluZyBzdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgdmF1bHQ/OiBUcnVlRmFsc2U7XG59XG5cbmV4cG9ydCB0eXBlIFRydWVGYWxzZSA9ICd0cnVlJyB8ICdmYWxzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBheVBhbFVybENvbmZpZyB7XG4gICAgY2xpZW50SWQ6IHN0cmluZztcbiAgICBjdXJyZW5jeT86IHN0cmluZztcbiAgICBjb21taXQ/OiBUcnVlRmFsc2U7XG4gICAgdmF1bHQ/OiBUcnVlRmFsc2U7XG4gICAgZXh0cmFQYXJhbXM/OiBJUXVlcnlQYXJhbVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPcmRlckRldGFpbHMge1xuICAgIGNyZWF0ZV90aW1lOiBzdHJpbmc7XG4gICAgdXBkYXRlX3RpbWU6IHN0cmluZztcbiAgICBpZDogc3RyaW5nO1xuICAgIGludGVudDogT3JkZXJJbnRlbnQ7XG4gICAgcGF5ZXI6IElQYXllcjtcbiAgICBzdGF0dXM6IE9yZGVyU3RhdHVzO1xuICAgIGxpbmtzOiBJTGlua0Rlc2NyaXB0aW9uW107XG4gICAgcHVyY2hhc2VfdW5pdHM6IElQdXJjaGFzZVVuaXRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2xpZW50QXV0aG9yaXplQ2FsbGJhY2tEYXRhIGV4dGVuZHMgSU9yZGVyRGV0YWlscyB7XG4gICAgbGlua3M6IElMaW5rRGVzY3JpcHRpb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTGlua0Rlc2NyaXB0aW9uIHtcbiAgICBocmVmOiBzdHJpbmc7XG4gICAgcmVsOiBTdHJpbmc7XG4gICAgbWV0aG9kPzogTGlua01ldGhvZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUXVlcnlQYXJhbSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIE9uU2hpcHBpbmdDaGFuZ2VDYWxsYmFjayA9IChkYXRhOiBJT25TaGlwcGluZ0NoYW5nZURhdGEsIGFjdGlvbnM6IElPblNoaXBwaW5nQ2hhbmdlQWN0aW9ucykgPT4gYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIElPblNoaXBwaW5nQ2hhbmdlRGF0YSB7XG4gICAgcGF5bWVudFRva2VuOiBzdHJpbmc7XG4gICAgc2hpcHBpbmdfYWRkcmVzczogYW55O1xuICAgIHNlbGVjdGVkX3NoaXBwaW5nX21ldGhvZD86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT25TaGlwcGluZ0NoYW5nZUFjdGlvbnMge1xuICAgIHJlc29sdmU6ICgpID0+IGFueTtcbiAgICByZWplY3Q6ICgpID0+IGFueTtcbiAgICBwYXRjaDogKCkgPT4gYW55O1xufVxuXG5leHBvcnQgdHlwZSBMaW5rTWV0aG9kID0gJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdERUxFVEUnIHwgJ0hFQUQnIHwgJ0NPTk5FQ1QnIHwgJ09QVElPTlMnIHwgJ1BBVENIJztcblxuZXhwb3J0IGludGVyZmFjZSBJQWR2YW5jZWRDb25maWd1cmF0aW9uIHtcbiAgICBjb21taXQ/OiBUcnVlRmFsc2U7XG4gICAgZXh0cmFRdWVyeVBhcmFtcz86IElRdWVyeVBhcmFtW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9uQXBwcm92ZUNhbGxiYWNrRGF0YSB7XG4gICAgb3JkZXJJRDogc3RyaW5nO1xuICAgIHBheWVySUQ6IHN0cmluZztcbiAgICBzdWJzY3JpcHRpb25JRDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDcmVhdGVPcmRlckNhbGxiYWNrQWN0aW9ucyB7XG4gICAgb3JkZXI6IHtcbiAgICAgICAgY3JlYXRlOiAob3JkZXI6IElDcmVhdGVPcmRlclJlcXVlc3QpID0+IFByb21pc2U8YW55PjtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDYW5jZWxDYWxsYmFja0RhdGEge1xuICAgIG9yZGVySUQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT25BcHByb3ZlQ2FsbGJhY2tBY3Rpb25zIHtcbiAgICByZWRpcmVjdDogKCkgPT4gdm9pZDtcbiAgICByZXN0YXJ0OiAoKSA9PiB2b2lkO1xuICAgIG9yZGVyOiB7XG4gICAgICAgIGF1dGhvcml6ZTogKCkgPT4gUHJvbWlzZTxhbnk+O1xuICAgICAgICBjYXB0dXJlOiAoKSA9PiBQcm9taXNlPGFueT47XG4gICAgICAgIGdldDogKCkgPT4gUHJvbWlzZTxJT3JkZXJEZXRhaWxzPjtcbiAgICAgICAgcGF0Y2g6ICgpID0+IFByb21pc2U8YW55PjtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPbkluaXRDYWxsYmFja0FjdGlvbnMge1xuICAgIGVuYWJsZTogKCkgPT4gdm9pZDtcbiAgICBkaXNhYmxlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDcmVhdGVTdWJzY3JpcHRpb25DYWxsYmFja0FjdGlvbnMge1xuICAgIHN1YnNjcmlwdGlvbjoge1xuICAgICAgICBjcmVhdGU6IChzdWJzY3JpcHRpb246IElDcmVhdGVTdWJzY3JpcHRpb25SZXF1ZXN0KSA9PiBQcm9taXNlPGFueT47XG4gICAgfTtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBJSW5pdENhbGxiYWNrRGF0YSB7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgSUNyZWF0ZVN1YnNjcmlwdGlvbkNhbGxiYWNrRGF0YSB7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9uQ2xpY2tDYWxsYmFja0FjdGlvbnMge1xuICAgIHJlc29sdmU6ICgpID0+IHZvaWQ7XG4gICAgcmVqZWN0OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQYXlQYWxCdXR0b25TdHlsZSB7XG4gICAgbGFiZWw/OiAncGF5cGFsJyB8ICdjaGVja291dCcgfCAncGF5JyB8ICdpbnN0YWxsbWVudCcgfCAnYnV5bm93JztcbiAgICBzaXplPzogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJyB8ICdyZXNwb25zaXZlJztcbiAgICBzaGFwZT86ICdwaWxsJyB8ICdyZWN0JztcbiAgICBjb2xvcj86ICdnb2xkJyB8ICdibHVlJyB8ICdzaWx2ZXInIHwgJ3doaXRlJyB8ICdibGFjayc7XG4gICAgbGF5b3V0PzogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbiAgICB0YWdsaW5lPzogYm9vbGVhbjtcbiAgICBoZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNyZWF0ZU9yZGVyUmVxdWVzdCB7XG4gICAgaW50ZW50OiBPcmRlckludGVudDtcbiAgICBwdXJjaGFzZV91bml0czogSVB1cmNoYXNlVW5pdFtdO1xuXG4gICAgcGF5ZXI/OiBJUGF5ZXI7XG4gICAgYXBwbGljYXRpb25fY29udGV4dD86IElBcHBsaWNhdGlvbkNvbnRleHQ7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ3JlYXRlU3Vic2NyaXB0aW9uUmVxdWVzdCB7XG4gICAgcGxhbl9pZDogc3RyaW5nO1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgIHBsYW4/OiBhbnk7XG4gICAgc3Vic2NyaWJlcj86IGFueTtcbiAgICBhcHBsaWNhdGlvbl9jb250ZXh0PzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQYXllciB7XG4gICAgbmFtZT86IElQYXJ0eU5hbWU7XG4gICAgZW1haWxfYWRkcmVzcz86IHN0cmluZztcbiAgICBwYXllcl9pZD86IHN0cmluZztcbiAgICBiaXJ0aF9kYXRlPzogc3RyaW5nO1xuICAgIHRheF9pbmZvPzogSVRheEluZm87XG4gICAgYWRkcmVzcz86IElBZGRyZXNzUG9ydGFibGU7XG4gICAgcGhvbmU/OiBJUGhvbmU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcGxpY2F0aW9uQ29udGV4dCB7XG4gICAgYnJhbmRfbmFtZT86IHN0cmluZztcbiAgICBsb2NhbGU/OiBzdHJpbmc7XG4gICAgbGFuZGluZ19wYWdlPzogUGF5cGFsTGFuZGluZ1BhZ2U7XG4gICAgc2hpcHBpbmdfcHJlZmVyZW5jZT86IFNoaXBwaW5nUHJlZmVyZW5jZTtcbiAgICB1c2VyX2FjdGlvbj86IFBheVBhbFVzZXJBY3Rpb247XG4gICAgcGF5bWVudF9tZXRob2Q/OiBJUGF5bWVudE1ldGhvZDtcbiAgICByZXR1cm5fdXJsPzogc3RyaW5nO1xuICAgIGNhbmNlbF91cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBheW1lbnRNZXRob2Qge1xuICAgIHBheWVyX3NlbGVjdGVkPzogUGF5ZXJTZWxlY3RlZDtcbiAgICBwYXllZV9wcmVmZXJyZWQ/OiBQYXllZVByZWZlcnJlZDtcbn1cblxuZXhwb3J0IHR5cGUgUGF5ZWVQcmVmZXJyZWQgPSAnVU5SRVNUUklDVEVEJyB8ICdJTU1FRElBVEVfUEFZTUVOVF9SRVFVSVJFRCc7XG5cbmV4cG9ydCB0eXBlIFBheWVyU2VsZWN0ZWQgPSAnUEFZUEFMX0NSRURJVCcgfCAnUEFZUEFMJztcblxuZXhwb3J0IHR5cGUgUGF5UGFsVXNlckFjdGlvbiA9ICdDT05USU5VRScgfCAnUEFZX05PVyc7XG5cbmV4cG9ydCB0eXBlIFNoaXBwaW5nUHJlZmVyZW5jZSA9ICdHRVRfRlJPTV9GSUxFJyB8ICdOT19TSElQUElORycgfCAnU0VUX1BST1ZJREVEX0FERFJFU1MnO1xuXG5leHBvcnQgdHlwZSBQYXlwYWxMYW5kaW5nUGFnZSA9ICdMT0dJTicgfCAnQklMTElORyc7XG5cbmV4cG9ydCB0eXBlIE9yZGVySW50ZW50ID0gJ0NBUFRVUkUnIHwgJ0FVVEhPUklaRSc7XG5cbmV4cG9ydCB0eXBlIERpc2J1cnNlbWVudE1vZGUgPSAnSU5TVEFOVCcgfCAnREVMQVlFRCc7XG5cbmV4cG9ydCB0eXBlIEl0ZW1DYXRlZ29yeSA9ICdESUdJVEFMX0dPT0RTJyB8ICdQSFlTSUNBTF9HT09EUyc7XG5cbmV4cG9ydCB0eXBlIFBob25lVHlwZSA9ICdGQVgnIHwgJ0hPTUUnIHwgJ01PQklMRScgfCAnT1RIRVInIHwgJ1BBR0VSJztcblxuZXhwb3J0IHR5cGUgVGF4SWRUeXBlID0gJ0JSX0NQRicgfCAnQlJfQ05QSic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBob25lIHtcbiAgICBwaG9uZV90eXBlPzogUGhvbmVUeXBlO1xuICAgIHBob25lX251bWJlcj86IElQaG9uZU51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGF4SW5mbyB7XG4gICAgdGF4X2lkOiBzdHJpbmc7XG4gICAgdGF4X2lkX3R5cGU6IFRheElkVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUGhvbmVOdW1iZXIge1xuICAgIG5hdGlvbmFsX251bWJlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQdXJjaGFzZVVuaXQge1xuICAgIGFtb3VudDogSVVuaXRBbW91bnQ7XG5cbiAgICByZWZlcmVuY2VfaWQ/OiBzdHJpbmc7XG4gICAgcGF5ZWU/OiBJUGF5ZWU7XG4gICAgcGF5bWVudF9pbnN0cnVjdGlvbj86IElQYXltZW50SW5zdHJ1Y3Rpb25zO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIGN1c3RvbV9pZD86IHN0cmluZztcbiAgICBpbnZvaWNlX2lkPzogc3RyaW5nO1xuICAgIHNvZnRfZGVzY3JpcHRvcj86IHN0cmluZztcbiAgICBpdGVtczogSVRyYW5zYWN0aW9uSXRlbVtdO1xuICAgIHNoaXBwaW5nPzogSVNoaXBwaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQYXllZSB7XG4gICAgZW1haWxfYWRkcmVzcz86IHN0cmluZztcbiAgICBtZXJjaGFudF9pZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUGF5bWVudEluc3RydWN0aW9ucyB7XG4gICAgcGxhdGZvcm1fZmVlcz86IElQbGF0Zm9ybUZlZVtdO1xuICAgIGRpc2J1cnNlbWVudF9tb2RlPzogRGlzYnVyc2VtZW50TW9kZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUGxhdGZvcm1GZWUge1xuICAgIGFtb3VudDogSVVuaXRBbW91bnQ7XG4gICAgcGF5ZWU/OiBJUGF5ZWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyYW5zYWN0aW9uSXRlbSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHVuaXRfYW1vdW50OiBJVW5pdEFtb3VudDtcbiAgICBxdWFudGl0eTogc3RyaW5nO1xuXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgc2t1Pzogc3RyaW5nO1xuICAgIGNhdGVnb3J5PzogSXRlbUNhdGVnb3J5O1xuICAgIHRheD86IElUYXg7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRheCB7XG4gICAgY3VycmVuY3lfY29kZTogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVuaXRBbW91bnQge1xuICAgIGN1cnJlbmN5X2NvZGU6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGJyZWFrZG93bj86IElVbml0QnJlYWtkb3duO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElNb25leSB7XG4gICAgY3VycmVuY3lfY29kZTogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVuaXRCcmVha2Rvd24ge1xuICAgIGl0ZW1fdG90YWw/OiBJVW5pdEFtb3VudDtcbiAgICBzaGlwcGluZz86IElVbml0QW1vdW50O1xuICAgIGhhbmRsaW5nPzogSVVuaXRBbW91bnQ7XG4gICAgdGF4X3RvdGFsPzogSVVuaXRBbW91bnQ7XG4gICAgaW5zdXJhbmNlPzogSVVuaXRBbW91bnQ7XG4gICAgc2hpcHBpbmdfZGlzY291bnQ/OiBJVW5pdEFtb3VudDtcbiAgICBkaXNjb3VudD86IElNb25leTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUGFydHlOYW1lIHtcbiAgICBwcmVmaXg/OiBzdHJpbmc7XG4gICAgZ2l2ZW5fbmFtZT86IHN0cmluZztcbiAgICBzdXJuYW1lPzogc3RyaW5nO1xuICAgIG1pZGRsZV9uYW1lPzogc3RyaW5nO1xuICAgIHN1ZmZpeD86IHN0cmluZztcbiAgICBhbHRlcm5hdGVfZnVsbF9uYW1lPzogc3RyaW5nO1xuICAgIGZ1bGxfbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWRkcmVzc1BvcnRhYmxlIHtcbiAgICBjb3VudHJ5X2NvZGU6IHN0cmluZztcblxuICAgIGFkZHJlc3NfbGluZV8xPzogc3RyaW5nO1xuICAgIGFkZHJlc3NfbGluZV8yPzogc3RyaW5nO1xuICAgIGFkbWluX2FyZWFfMj86IHN0cmluZztcbiAgICBhZG1pbl9hcmVhXzE/OiBzdHJpbmc7XG4gICAgcG9zdGFsX2NvZGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNoaXBwaW5nIHtcbiAgICBuYW1lPzogSVBhcnR5TmFtZTtcbiAgICBhZGRyZXNzPzogSUFkZHJlc3NQb3J0YWJsZTtcbn1cblxuZXhwb3J0IHR5cGUgT3JkZXJTdGF0dXMgPSAnQVBQUk9WRUQnIHwgJ1NBVkVEJyB8ICdDUkVBVEVEJyB8ICdWT0lERUQnIHwgJ0NPTVBMRVRFRCc7XG5cblxuIl19