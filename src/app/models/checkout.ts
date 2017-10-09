import { Address } from './address';
import { CardPaymentMethod } from './card-payment-method';
import {ShippingOption} from "@models/shipping-option";

export class CheckoutModel {
  constructor(
    public shippingAddress: Address = new Address(),
    public phoneNumber: string = null,
    public shippingSelection: ShippingOption = null,
    public cardPaymentMethod: CardPaymentMethod = new CardPaymentMethod(),
    public useShippingAddressForBilling: Boolean = true,
    public billingAddress: Address = new Address()
  ) {  }
}