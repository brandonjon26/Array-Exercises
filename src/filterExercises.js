import { useStudents, useInstructors } from "./data/classroom.js";

let students = useStudents();
let instructors = useInstructors();

// Export a function named getStudentsInCohort
// It should accept one integer parameter named `cohort`
// It should return an array of just the students who are in that cohort
export let getStudentsInCohort = (cohort) => {
    return students.filter(student => student.cohort === cohort)
}

// Export a function called getFullTimeStudents
// It should not accept any parameters
// It should return an array of only the full time students
export let getFullTimeStudents = () => {
    return students.filter(student => student.fullTime === true)
}

// Export a function called getStudentsByInstructorId
// It should accept one integer parameter name `instructorId`
// It should return an array of students with that instructor
export let getStudentsByInstructorId = (instructorId) => {
    return students.filter(student => student.instructorId === instructorId)
}

// Export a function called getPolyglotStudents
// It should accept one integer parameter named `languageCount`
// It should return an array of students who know as many (or more) languages than `languageCount`
// Ex: If the number 2 is passed to the function, only the students who know 2 or more languages should be returned
export let getPolyglotStudents = (languageCount) => {
    return students.filter(student => student.languages.length >= languageCount)
}

// Export a function called getAvailableInstructors
// It should not accept any parameters
// It should return an array of instructors that don't have any students
export let getAvailableInstructors = () => {
    let newStudentArray = students.map(item => {
        return item.instructorId;
    })
    return instructors.filter(item => {
        if (newStudentArray.includes(item.id) === false) {
            return item;
        }
    })
}

// Export a function called getStudentsByLanguage
// It should accept one string parameter named `language`
// It should return an array of students who know the given language
// HINT: In addition to the `filter` method, you might also look up the `some` method
export let getStudentsByLanguage = (language) => {
    return students.filter(item => item.languages.includes(language))
}

/******** ADVANCED CHALLENGE ********/
/******** Only do this if all other tests are passing ****/
/******** To test, uncomment the code at the bottom of tests/filter.spec.js  *****/

// Export a function called getStudentsByLanguages
// It should accept an array of strings as a parameter named `languages`
// It should return an array of students who know ALL of the given languages
// Ex: getStudentsByLanguages(["Javascript", "C#"])
