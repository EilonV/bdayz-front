export const cookieService = {
    getCookies,
    findCookie
}
function getCookies() {
    const cookies = document.cookie;
    if (!cookies) {
        return {};
    }

    const cookieArray = cookies.split(";");

    const cookieObject = {};

    for (const cookie of cookieArray) {
        const [name, value] = cookie.trim().split("=");
        cookieObject[name] = decodeURIComponent(value);
    }
    return cookieObject;
}

function findCookie(cookie) {
    const cookies = getCookies()
    switch (cookie) {
        case 'name':
            return cookies.name
        case 'id':
            return cookies.id
        default:
            return null
    }
}
