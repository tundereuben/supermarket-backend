export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  billingAddress: BillingAddress;
  shippingAddress: ShippingAddress;
  createdAt?: string;
  updatedAt?: string;
  token?: string;
  __v?: number;
  _id?: string;
}

export interface BillingAddress {
  city: string;
  country: string;
  state: string;
  street: string;
}

export interface ShippingAddress {
  city: string;
  country: string;
  state: string;
  street: string;
}
