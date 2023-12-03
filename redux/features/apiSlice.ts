import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Article = {
    id: number,
    title: string,
    content: string
}

export type Data = Article[]

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Data, void>({
            query: () => 'api/article',
        }),
    }),
});

export const { useGetAllProductsQuery } = productsApi;