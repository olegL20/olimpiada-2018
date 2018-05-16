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
    user: null,
    background: null,
    firstStage: 1,
    universities: [],
    departments: [],
    faculties: [],
    majors: [],
    selectedUniversity: null,
    selectedDepartment: null,
    selectedFaculty: null,
    selectedMajor: null,
    showPreload: false,
    refreshTable: false,
    role: null,
    tests: null,
    selectedTest: null,
    test: null,
    questions: [],
};
