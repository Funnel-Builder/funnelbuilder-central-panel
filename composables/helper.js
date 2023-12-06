export const randomString = (length = 32) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

// export const apiService = (type= 'auth') => {
//     const config = useRuntimeConfig();
//     if (type === 'auth') {
//         return config.public.SELLER_SERVICE_URL
//     }
//     if (type === 'seller') {
//         return config.public.BASE_URL
//     }
//     return config.public.BASE_URL
// }