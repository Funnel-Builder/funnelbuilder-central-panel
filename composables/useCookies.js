import moment from "moment";

export function accessToken() {
    const cookieToken = useCookie('token')
    return cookieToken.value || null
}

export function getExpiresIn() {
    const cookieExpires = useCookie('expires_in')
    return cookieExpires.value || 0
}

export function getUser() {
    const cookieUser = useCookie('user')
    return cookieUser.value || null
}

export const setUser = (user) => {
    let cookieMaxAge = 43200
    const cookieExpires = useCookie('expires_in')
    if (cookieExpires.value && moment(cookieExpires.value).diff(moment(), 'seconds') > 0) {
        cookieMaxAge = moment(cookieExpires.value).diff(moment(), 'seconds')
    }
    const cookieOptions = {
        maxAge: cookieMaxAge,
        priority: 'high',
        secure: true
    }
    const cookieUser = useCookie('user', cookieOptions)
    cookieUser.value = user || ''
}

export function setAccessToken(authorization) {
    const cookieOptions = {
        maxAge: authorization?.expires_in,
        priority: 'high',
        // httpOnly: true, // Secure cooke ... don't allow javascript to access cookie
        secure: true
    }
    const cookieToken = useCookie('token', cookieOptions)
    cookieToken.value = authorization?.token || ''

    //create const setExpire which is moment current time + expires_in in seconds then save it in timestamp
    const now = moment().format()
    const setExpire = moment(now).add(authorization?.expires_in, 'seconds').format()
    const cookieExpires = useCookie('expires_in', cookieOptions)
    cookieExpires.value = setExpire
    return true
}

export const resetAllCookies = () => {
    const cookieOptions = {
        maxAge: 0,
        priority: 'high',
        secure: true
    }
    const cookieToken = useCookie('token', cookieOptions)
    cookieToken.value = ''

    const cookieExpires = useCookie('expires_in', cookieOptions)
    cookieExpires.value = ''

    const cookieUser = useCookie('user', cookieOptions)
    cookieUser.value = ''
}