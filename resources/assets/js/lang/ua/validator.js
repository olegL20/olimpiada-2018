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
        subjectName0: 'Назва предмету',
        subjectName1: 'Назва предмету',
        subjectName2: 'Назва предмету',
        subjectName3: 'Назва предмету',
        subjectName4: 'Назва предмету',
        subjectName5: 'Назва предмету',
        subjectName6: 'Назва предмету',
        subjectName7: 'Назва предмету',
        subjectName8: 'Назва предмету',
        subjectName9: 'Назва предмету',
        subjectName10: 'Назва предмету',
        subjectName11: 'Назва предмету',
        subjectName12: 'Назва предмету',
        subjectScore0: 'Оцінка',
        subjectScore1: 'Оцінка',
        subjectScore2: 'Оцінка',
        subjectScore3: 'Оцінка',
        subjectScore4: 'Оцінка',
        subjectScore5: 'Оцінка',
        subjectScore6: 'Оцінка',
        subjectScore7: 'Оцінка',
        subjectScore8: 'Оцінка',
        subjectScore9: 'Оцінка',
        subjectScore10: 'Оцінка',
        subjectScore11: 'Оцінка',
        subjectScore12: 'Оцінка',
    },
};
