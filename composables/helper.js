export const randomString = (length = 32) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export const urlService = (type= 'auth') => {
    const config = useRuntimeConfig();
    switch (type) {
        case 'auth':
            return config.public.baseURL
        case 'seller':
            return config.public.sellerServiceURL
        case 'seller-front':
            return config.public.sellerServiceFrontendURL
        default:
            return config.public.baseURL
    }

}