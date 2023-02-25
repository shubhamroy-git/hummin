import { fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'cc2e152c26mshfbe55d4420b5b9ap10c2e1jsn961a44fe777d');
            return headers;
        }
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => 'charts/track?locale=en-US&pageSize=20&startFrom=0'}),
    })
});

export const{
    useGetTopChartsQuery,
} = shazamCoreApi;