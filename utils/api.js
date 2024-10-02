export const mainURL = "https://book-store-two-flax.vercel.app";
const url = mainURL + "/api/v1";

const user = {
    login: url + "/user/login",
    signUp: url + "/user/signup",
    adminLogin: url + "/user/adminLogin"
}

const bookList = {
    updateBooks: url + "/bookList/updateBooks",
    getBooks: url + "/bookList/getBooks",
    deleteBooks: url + "/bookList/deleteBooks"
}

export const API = {
    user,
    bookList
}