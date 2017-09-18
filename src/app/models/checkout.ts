import { Address } from './address';
import { CardPaymentMethod } from './card-payment-method';

export class CheckoutModel {
  constructor(
    public shippingAddress: Address = new Address(),
    public phone: string = null,
    public shippingSelection: string = null,
    public cardPaymentMethod: CardPaymentMethod = new CardPaymentMethod(),
    public useShippingAddressForBilling: Boolean = true,
    public billingAddress: Address = new Address()
  ) {  }
}