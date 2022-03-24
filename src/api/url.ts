const API_URL = {
  USER: {
    LOGIN: 'api/login',
    REGISTER: 'api/register',
  },
  ORDER: {
    GET_ALL: 'api/orders',
    CREATE: 'api/order',
    GET: (id: number) => 'api/order/' + id,
  },
  PRODUCT: {
    GET_ALL: 'api/product/lists',
    GET: (id: any) => 'api/product/detail/' + id,
    CREATE: 'api/product/create',
    DELETE: (id: any) => `api/product/${id}/delete`,
    UPDATE: (id: any) => `api/product/${id}/edit`,
  },
  SUPPLIER: {
    GET_ALL: 'api/suppliers',
  },
};

export default API_URL;
