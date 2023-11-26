export function getToken() {
    const cookieToken = useCookie('token')
    return cookieToken.value || ''
}