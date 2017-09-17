export class CheckoutModel {
  constructor(
    public shippingAddress: CheckoutAddress = new CheckoutAddress(),
    public phone: string = null,
    public shippingSelection: string = null,
    public cardNumber: number = null,
    public cardExpirationMonth: string = null,
    public cardExpirationYear: string = null,
    public cardSecurityCode: string = null,
    public useShippingAddressForBilling: Boolean = true,
    public billingAddress: CheckoutAddress = new CheckoutAddress()
  ) {  }
}

export class CheckoutAddress{
  constructor(
    public firstName: string = null,
    public lastName: string = null,
    public address1: string = null,
    public address2: string = null,
    public city: string = null,
    public state: string = null,
    public zip: string = null,
  ) {}
}