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
        case 'subscription':
            return config.public.subscriptionServiceURL;
        case 'seller':
            return config.public.sellerServiceURL
        case 'seller-front':
            return config.public.sellerServiceFrontendURL
        default:
            return config.public.baseURL
    }

}

export const formatPhone = (phone) => {
    if (phone.startsWith('0')) {
        return `+88${phone}`;
    } else if (phone.startsWith('88')) {
        return `+${phone}`;
    } else if (phone.startsWith('+88')) {
        return phone;
    }
    return `+88${phone}`;
}

export const normalizeBDPhoneNumber = (phoneNumber) => {
    phoneNumber = phoneNumber.replace(/[^\d+]/g, '');
    if (phoneNumber.startsWith("+880")) {
        phoneNumber = phoneNumber.replace("+880", "880");
    } else if (phoneNumber.startsWith("880")) {
    } else if (phoneNumber.startsWith("0")) {
        phoneNumber = "880" + phoneNumber.substring(1);
    } else {
        phoneNumber = "880" + phoneNumber;
    }
    if (phoneNumber.length === 13) {
        return `+${phoneNumber}`;
    } else if (phoneNumber.length > 13 && phoneNumber.startsWith("880")) {
        return `+${phoneNumber}`;
    } else if (phoneNumber.length < 13) {
        return null;
    }
}

export const goToShopPanel = (shopId, redirectDomain, token) => {
    const config = useRuntimeConfig();
    if (config.public.appEnv === 'local') {
        let redirectUrl = urlService('seller-front')
        window.location.href = `${redirectUrl}/auth/verify?shop_id=${shopId}&token=${token}`
        return
    }
    window.location.href = `//${redirectDomain}/auth/verify?shop_id=${shopId}&token=${token}`
}