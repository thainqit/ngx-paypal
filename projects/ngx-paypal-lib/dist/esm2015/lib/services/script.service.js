/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/script.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone } from '@angular/core';
export class ScriptService {
    /**
     * @param {?} zone
     */
    constructor(zone) {
        this.zone = zone;
    }
    /**
     * @param {?} url
     * @param {?} globalVar
     * @param {?} onReady
     * @return {?}
     */
    registerScript(url, globalVar, onReady) {
        /** @type {?} */
        const existingGlobalVar = ((/** @type {?} */ (window)))[globalVar];
        if (existingGlobalVar) {
            // global variable is present = script was already loaded
            this.zone.run((/**
             * @return {?}
             */
            () => {
                onReady(existingGlobalVar);
            }));
            return;
        }
        // prepare script elem
        /** @type {?} */
        const scriptElem = document.createElement('script');
        scriptElem.id = this.getElemId(globalVar);
        scriptElem.innerHTML = '';
        scriptElem.onload = (/**
         * @return {?}
         */
        () => {
            this.zone.run((/**
             * @return {?}
             */
            () => {
                onReady(((/** @type {?} */ (window)))[globalVar]);
            }));
        });
        scriptElem.src = url;
        scriptElem.async = true;
        scriptElem.defer = true;
        // add script to header
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    }
    /**
     * @param {?} globalVar
     * @return {?}
     */
    cleanup(globalVar) {
        // remove script from DOM
        /** @type {?} */
        const scriptElem = document.getElementById(this.getElemId(globalVar));
        if (scriptElem) {
            scriptElem.remove();
        }
    }
    /**
     * @private
     * @param {?} globalVar
     * @return {?}
     */
    getElemId(globalVar) {
        return `ngx-paypal-script-elem-${globalVar}`;
    }
}
ScriptService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScriptService.ctorParameters = () => [
    { type: NgZone }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ScriptService.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3NjcmlwdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFFdEIsWUFDYyxJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUUxQixDQUFDOzs7Ozs7O0lBRUQsY0FBYyxDQUFDLEdBQVcsRUFBRSxTQUFpQixFQUFFLE9BQWlDOztjQUN0RSxpQkFBaUIsR0FBRyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BELElBQUksaUJBQWlCLEVBQUU7WUFDbkIseURBQXlEO1lBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsR0FBRyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQy9CLENBQUMsRUFBQyxDQUFDO1lBQ0gsT0FBTztTQUNWOzs7Y0FJSyxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDbkQsVUFBVSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxNQUFNOzs7UUFBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLENBQUMsRUFBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFBLENBQUM7UUFDRixVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNyQixVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN4QixVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUV4Qix1QkFBdUI7UUFDdkIsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxTQUFpQjs7O2NBRWYsVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVyRSxJQUFJLFVBQVUsRUFBRTtZQUNaLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxTQUFpQjtRQUMvQixPQUFPLDBCQUEwQixTQUFTLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzs7WUEvQ0osVUFBVTs7OztZQUZVLE1BQU07Ozs7Ozs7SUFNbkIsNkJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY3JpcHRTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgICkge1xuICAgIH1cblxuICAgIHJlZ2lzdGVyU2NyaXB0KHVybDogc3RyaW5nLCBnbG9iYWxWYXI6IHN0cmluZywgb25SZWFkeTogKGdsb2JhbFZhcjogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nR2xvYmFsVmFyID0gKHdpbmRvdyBhcyBhbnkpW2dsb2JhbFZhcl07XG4gICAgICAgIGlmIChleGlzdGluZ0dsb2JhbFZhcikge1xuICAgICAgICAgICAgLy8gZ2xvYmFsIHZhcmlhYmxlIGlzIHByZXNlbnQgPSBzY3JpcHQgd2FzIGFscmVhZHkgbG9hZGVkXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBvblJlYWR5KGV4aXN0aW5nR2xvYmFsVmFyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBwcmVwYXJlIHNjcmlwdCBlbGVtXG4gICAgICAgIGNvbnN0IHNjcmlwdEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0RWxlbS5pZCA9IHRoaXMuZ2V0RWxlbUlkKGdsb2JhbFZhcik7XG4gICAgICAgIHNjcmlwdEVsZW0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHNjcmlwdEVsZW0ub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25SZWFkeSgod2luZG93IGFzIGFueSlbZ2xvYmFsVmFyXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NyaXB0RWxlbS5zcmMgPSB1cmw7XG4gICAgICAgIHNjcmlwdEVsZW0uYXN5bmMgPSB0cnVlO1xuICAgICAgICBzY3JpcHRFbGVtLmRlZmVyID0gdHJ1ZTtcblxuICAgICAgICAvLyBhZGQgc2NyaXB0IHRvIGhlYWRlclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdEVsZW0pO1xuICAgIH1cblxuICAgIGNsZWFudXAoZ2xvYmFsVmFyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgLy8gcmVtb3ZlIHNjcmlwdCBmcm9tIERPTVxuICAgICAgICBjb25zdCBzY3JpcHRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5nZXRFbGVtSWQoZ2xvYmFsVmFyKSk7XG5cbiAgICAgICAgaWYgKHNjcmlwdEVsZW0pIHtcbiAgICAgICAgICAgIHNjcmlwdEVsZW0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEVsZW1JZChnbG9iYWxWYXI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgbmd4LXBheXBhbC1zY3JpcHQtZWxlbS0ke2dsb2JhbFZhcn1gO1xuICAgIH1cbn1cbiJdfQ==