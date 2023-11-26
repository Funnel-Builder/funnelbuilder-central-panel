export const getData = async (url) => {
    const config = useRuntimeConfig()
    const {data, pending, error, refresh} = await useFetch(url, {
        baseURL: config.public.baseURL,
        onRequest({request, options}) {
            // Set the request headers
            options.headers = options.headers || {}
            options.headers.Authorization = getToken() ? `Bearer ${getToken()}` : ''
        },
        onRequestError({request, options, error}) {
            // Handle the request errors
        },
        onResponse({request, response, options}) {
            // Process the response data
        },
        onResponseError({request, response, options}) {
            // console.log(response)
            // Handle the response errors
        }
    })
    return {data, pending, error, refresh}
}