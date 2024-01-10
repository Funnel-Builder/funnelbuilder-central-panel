import moment from "moment";

const commonCookieOptions = {
    priority: 'high',
};

const useTokenCookie = () => useCookie('token', commonCookieOptions);
const useExpiresCookie = () => useCookie('expires_in', commonCookieOptions);
const useUserCookie = () => useCookie('user', commonCookieOptions);
const useOtpCookie = () => useCookie('otp', commonCookieOptions);

export function accessToken() {
    const cookieToken = useTokenCookie();
    return cookieToken.value || null;
}

export function getExpiresIn() {
    const cookieExpires = useExpiresCookie();
    return cookieExpires.value || 0;
}

export function getUser() {
    const cookieUser = useUserCookie();
    return cookieUser.value || null;
}

export function getOtp() {
    const cookieOtp = useOtpCookie();
    return cookieOtp.value || null;
}

export const setCookies = (name, value, maxAge) => {
    const cookieOptions = {
        ...commonCookieOptions,
        maxAge,
    };
    const cookie = useCookie(name, cookieOptions);
    cookie.value = value;
};

export const setUser = (user) => {
    let cookieMaxAge = 43200;
    // const cookieExpires = useExpiresCookie();
    // if (cookieExpires.value && moment(cookieExpires.value).diff(moment(), 'seconds') > 0) {
    //     cookieMaxAge = moment(cookieExpires.value).diff(moment(), 'seconds');
    // }
    setCookies('user', user || '', cookieMaxAge);
    // setCookies('expires_in', expires, cookieMaxAge);
};

export const setOtpCookies = (data) => {
    const cookieOptions = {
        ...commonCookieOptions,
        maxAge: 3600,
    };
    const cookieOtp = useOtpCookie(cookieOptions);
    cookieOtp.value = '';
    data.expires_in = moment().add(5, 'm').format('lll');
    cookieOtp.value = data;
};

export const setAccessToken = (authorization) =>{
    const cookieOptions = {
        ...commonCookieOptions,
        maxAge: authorization?.expires_in,
    };
    setCookies('token', authorization?.token || '', cookieOptions.maxAge);

    const now = moment().format();
    const setExpire = moment(now).add(authorization?.expires_in, 'seconds').format();
    setCookies('expires_in', setExpire, cookieOptions.maxAge);

    return true;
}

export const resetAllCookies = () => {
    setCookies('token', '');
    setCookies('expires_in', '');
    setCookies('user', '');
};
