/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/paypal-script.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ScriptService } from './script.service';
export class PayPalScriptService {
    /**
     * @param {?} scriptService
     */
    constructor(scriptService) {
        this.scriptService = scriptService;
        this.paypalWindowName = 'paypal';
    }
    /**
     * @param {?} config
     * @param {?} onReady
     * @return {?}
     */
    registerPayPalScript(config, onReady) {
        this.scriptService.registerScript(this.getUrlForConfig(config), this.paypalWindowName, onReady);
    }
    /**
     * @return {?}
     */
    destroyPayPalScript() {
        this.scriptService.cleanup(this.paypalWindowName);
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    getUrlForConfig(config) {
        /** @type {?} */
        const params = [
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
            params.push(...config.extraParams);
        }
        return `https://www.paypal.com/sdk/js${this.getQueryString(params)}`;
    }
    /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    getQueryString(queryParams) {
        /** @type {?} */
        let queryString = '';
        for (let i = 0; i < queryParams.length; i++) {
            /** @type {?} */
            const queryParam = queryParams[i];
            if (i === 0) {
                queryString += '?';
            }
            else {
                queryString += '&';
            }
            queryString += `${queryParam.name}=${queryParam.value}`;
        }
        return queryString;
    }
}
PayPalScriptService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PayPalScriptService.ctorParameters = () => [
    { type: ScriptService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXNjcmlwdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9wYXlwYWwtc2NyaXB0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBSzVCLFlBQ2MsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFKekIscUJBQWdCLEdBQUcsUUFBUSxDQUFDO0lBTTdDLENBQUM7Ozs7OztJQUVELG9CQUFvQixDQUFDLE1BQXdCLEVBQUUsT0FBaUM7UUFDNUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEcsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxNQUF3Qjs7Y0FDdEMsTUFBTSxHQUFrQjtZQUMxQjtnQkFDSSxJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRO2FBQ3pCO1NBQ0o7UUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDUixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRO2FBQ3pCLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDUixJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU07YUFDdkIsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNSLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSzthQUN0QixDQUFDLENBQUM7U0FDTjtRQUVELElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxnQ0FBZ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3pFLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxXQUEwQjs7WUFDekMsV0FBVyxHQUFHLEVBQUU7UUFFcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUNuQyxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ1QsV0FBVyxJQUFJLEdBQUcsQ0FBQzthQUN0QjtpQkFBTTtnQkFDSCxXQUFXLElBQUksR0FBRyxDQUFDO2FBQ3RCO1lBRUQsV0FBVyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0Q7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDOzs7WUF0RUosVUFBVTs7OztZQUZGLGFBQWE7Ozs7Ozs7SUFLbEIsK0NBQTZDOzs7OztJQUl6Qyw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElQYXlQYWxVcmxDb25maWcsIElRdWVyeVBhcmFtIH0gZnJvbSAnLi4vbW9kZWxzL3BheXBhbC1tb2RlbHMnO1xuaW1wb3J0IHsgU2NyaXB0U2VydmljZSB9IGZyb20gJy4vc2NyaXB0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGF5UGFsU2NyaXB0U2VydmljZSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBheXBhbFdpbmRvd05hbWUgPSAncGF5cGFsJztcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzY3JpcHRTZXJ2aWNlOiBTY3JpcHRTZXJ2aWNlLFxuICAgICkge1xuICAgIH1cblxuICAgIHJlZ2lzdGVyUGF5UGFsU2NyaXB0KGNvbmZpZzogSVBheVBhbFVybENvbmZpZywgb25SZWFkeTogKHBheVBhbEFwaTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2NyaXB0U2VydmljZS5yZWdpc3RlclNjcmlwdCh0aGlzLmdldFVybEZvckNvbmZpZyhjb25maWcpLCB0aGlzLnBheXBhbFdpbmRvd05hbWUsIG9uUmVhZHkpO1xuICAgIH1cblxuICAgIGRlc3Ryb3lQYXlQYWxTY3JpcHQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2NyaXB0U2VydmljZS5jbGVhbnVwKHRoaXMucGF5cGFsV2luZG93TmFtZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRVcmxGb3JDb25maWcoY29uZmlnOiBJUGF5UGFsVXJsQ29uZmlnKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcGFyYW1zOiBJUXVlcnlQYXJhbVtdID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjbGllbnQtaWQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBjb25maWcuY2xpZW50SWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBpZiAoY29uZmlnLmN1cnJlbmN5KSB7XG4gICAgICAgICAgICBwYXJhbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogY29uZmlnLmN1cnJlbmN5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcuY29tbWl0KSB7XG4gICAgICAgICAgICBwYXJhbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2NvbW1pdCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGNvbmZpZy5jb21taXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy52YXVsdCkge1xuICAgICAgICAgICAgcGFyYW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6ICd2YXVsdCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGNvbmZpZy52YXVsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLmV4dHJhUGFyYW1zKSB7XG4gICAgICAgICAgICBwYXJhbXMucHVzaCguLi5jb25maWcuZXh0cmFQYXJhbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGBodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcyR7dGhpcy5nZXRRdWVyeVN0cmluZyhwYXJhbXMpfWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRRdWVyeVN0cmluZyhxdWVyeVBhcmFtczogSVF1ZXJ5UGFyYW1bXSk6IHN0cmluZyB7XG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnlQYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW0gPSBxdWVyeVBhcmFtc1tpXTtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gJz8nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeVN0cmluZyArPSAnJic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGAke3F1ZXJ5UGFyYW0ubmFtZX09JHtxdWVyeVBhcmFtLnZhbHVlfWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmc7XG4gICAgfVxufVxuIl19