import rawiriFletcher from '../img/profilePicture.png';
import jasminaSalvador from '../img/teacherProfilePicture.png';

export const studentLogin = async () => {
    return {
        id: 1,
        isTeacher: false,
        teacher: 'Jasmina Salvador',
        school: 'Homai School',
        course: 'beginner',
        dateOfBirth: '25 June 2010',
        contactNo: '022 524 63 99',
        username: 'Rawiri Fletcher',
        password: 'rawirifletcher123',
        email: 'fletchy.r@gmail.com',
        profilePicture: rawiriFletcher,
    };
};

export const teacherLogin = async () => {
    return {
        id: 2,
        isTeacher: true,
        school: 'Homai School',
        coursesPurchased: 'Beginner',
        dateOfBirth: '25 June 1986',
        contactNo: '027 754 28 00',
        username: 'Jasmina Salvador',
        password: 'jasminasalvador123',
        email: 'jsalvador@homai.edu',
        profilePicture: jasminaSalvador
    };
};