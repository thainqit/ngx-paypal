import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { IPayPalConfig } from '../models/paypal-models';
import { PayPalScriptService } from '../services/paypal-script.service';
export declare class NgxPaypalComponent implements OnChanges, OnDestroy, AfterViewInit {
    private paypalScriptService;
    private cdr;
    private ngZone;
    /**
     * Configuration for paypal.
     */
    config?: IPayPalConfig;
    /**
     * If enabled, paypal SDK script will be loaded. Useful if you want to have multiple PayPal components on the same page
     * sharing base configuration. In such a case only a single component may register script.
     */
    registerScript: boolean;
    /**
     * Emitted when paypal script is loaded
     */
    scriptLoaded: EventEmitter<any>;
    /**
     * Id of the element where PayPal button will be rendered
     */
    payPalButtonContainerId?: string;
    private readonly ngUnsubscribe;
    private payPalButtonContainerElem?;
    set payPalButtonContainer(content: ElementRef);
    /**
     * Flag that indicates if paypal should be initialized (required for handling script load events and availability of DOM element)
     */
    private initializePayPal;
    /**
     * Reference to PayPal global API
     */
    private payPal;
    constructor(paypalScriptService: PayPalScriptService, cdr: ChangeDetectorRef, ngZone: NgZone);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    customInit(payPal: any): void;
    reinitialize(config: IPayPalConfig | undefined): void;
    private doPayPalCheck;
    private initPayPalScript;
    private generateElementId;
    private initPayPal;
}
