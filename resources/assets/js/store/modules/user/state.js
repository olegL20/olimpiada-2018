export default {
    id: null,
    name: null,
    email: null,
    password: null,
    passwordConfirmation: null,
    logged: false,
    token: null,
    currentLang: window.Cookies.get('locale') || 'en',
    createdAt: null,
    updatedAt: null,
};
