import Cookies from "js-cookie"

const SetCookie = (cookiename, value) => {
    Cookies.set(cookiename, value, { 
        expires: 1,
        secure: true,
        sameSite: "strict",
        path: "/"
    })
}

export default SetCookie