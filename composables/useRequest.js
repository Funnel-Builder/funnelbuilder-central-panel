import moment from "moment";
import {useToast} from "vue-toastification";

const createRequest = async (url, method, body = null) => {
    const config = useRuntimeConfig();
    const { data, pending, error, refresh } = await useFetch(url, {
        baseURL: config.public.baseURL,
        onRequest({ request, options }) {
            options.method = method;
            options.headers = options.headers || {};
            options.headers.Authorization = accessToken() ? `Bearer ${accessToken()}` : '';
            options.headers.accept = 'application/json'

            if (body) {
                options.body = body;
                options.headers.contentType = 'multipart/form-data'
            }

            // if getExpiresIn() expires in less than 30 minutes, refresh token
            if (!(getExpiresIn() && accessToken() && url !== 'refresh_token')) {
                return;
            }
            const now = moment().format();
            console.log(moment(getExpiresIn()).diff(moment(now), 'seconds'))
            if (moment(getExpiresIn()).diff(moment(now), 'seconds') < 1800 && moment(getExpiresIn()).diff(moment(now), 'seconds') > 0) {
                const authStore = useAuthStore()
                authStore.refreshToken()
            }
        },
        onRequestError({ request, options, error }) {
            // Handle the request errors
        },
        onResponse({ request, response, options }) {
           // Handle the response object

        },
        onResponseError({ request, response, options }) {
           // Handle the response errors
            const toast = useToast()
            // if (response.status === 401 && url !== 'refresh_token') {
            //     const authStore = useAuthStore()
            //     authStore.refreshToken()
            // }
            if (response.status === 422) {
                toast.error('Oops, something went wrong!')
            }
            if (response.status === 500) {
                toast.error('Oops, Server Error!')
            }
            if (response.status === 404) {
                toast.error('Oops, Not Found!')
            }
        }
    });

    return { data, pending, error, refresh };
}

export const getData = async (url) => {
    return createRequest(url, 'GET');
};

export const postData = async (url, body) => {
    return createRequest(url, 'POST', body);
};

export const deleteData = async (url) => {
    return createRequest(url, 'DELETE');
};
