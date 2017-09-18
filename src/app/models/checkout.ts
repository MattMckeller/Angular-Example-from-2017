import { Address } from './address';

export class CheckoutModel {
  constructor(
    public shippingAddress: Address = new Address(),
    public phone: string = null,
    public shippingSelection: string = null,
    public cardNumber: number = null,
    public cardExpirationMonth: string = null,
    public cardExpirationYear: string = null,
    public cardSecurityCode: string = null,
    public useShippingAddressForBilling: Boolean = true,
    public billingAddress: Address = new Address()
  ) {  }
}