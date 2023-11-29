import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type SingleProduct = {
    "id": string,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images": string[]
};

export type Products = {
    "products" : SingleProduct[],
    "total": number,
    "skip": number,
    "limit": number,
};

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Products, void>({
            query: () => 'products',
        }),
    }),
});

export const { useGetAllProductsQuery } = productsApi;