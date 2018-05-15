import messages from 'vee-validate/dist/locale/uk';

export default {
    messages: {
        ...messages.messages,
        login() {
            return 'The specified user does not exist.';
        },
        unique() {
            return 'Email already exists';
        },
    },
    attributes: {
        name: 'Ім\'я',
        surname: 'Прізвище',
        dateOfBirth: 'Дата народження',
        email: 'E-mail',
        password: 'Пароль',
        rePassword: 'Підтвердження паролю',
        photo: 'Фото',
        questionType: 'Тип запитання',
    },
};
