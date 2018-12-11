export const onUserLogin = (username) => {
    return {
        type : 'USER_LOGIN_SUCCES',
        payload : username
    }
}