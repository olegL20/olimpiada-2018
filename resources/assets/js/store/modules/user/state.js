export default {
    id: null,
    name: null,
    surname: null,
    email: null,
    password: null,
    passwordConfirmation: null,
    dateOfBirth: null,
    logged: false,
    token: null,
    currentLang: window.Cookies.get('locale') || 'ua',
    createdAt: null,
    updatedAt: null,
};
