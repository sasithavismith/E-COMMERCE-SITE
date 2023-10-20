interface ProductDataInterface {
  products: product;
}
interface CategoryInterface {
  category: {};
}
interface product {
  title: string;
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
}
interface ProductReqData {
  id: string;
}
interface CategoryProductReqData {
  cName: string;
}
interface UserCreateSendRes {
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: string;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}
interface UserloginRes {
  username: string;
  password: string;
}
interface UserCartDataInterface {
  id: number;
  userId: number;
  date: string;
  product: UserCartProductDataInterface;
}
interface UserCartProductDataInterface {
  productId: number;
  quantity: number;
}
interface userId {
  userid: string;
}
interface decodedJwtJsonData {
  iat: number;
  sub: number;
  user: string;
}
interface token {
  jwt: string;
}
interface UserCreateErrors {
  email: string;
  username: string;
  password: string;

  firstname: string;
  lastname: string;

  city: string;
  street: string;
  number: string;
  zipcode: string;

  lat: string;
  long: string;

  phone: string;
}
