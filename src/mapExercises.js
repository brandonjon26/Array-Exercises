import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentNames
// It should not accept any parameters`
// It should return an array of strings. Each string should be the full name of the student
export let getStudentNames = () => {
  return students.map(obj => {
    return `${obj.firstName} ${obj.lastName}`
  })
}

// Export a function named StudentList
// It should not accept any parameters
// It should return a single HTMLString that contains a <div> element for every student that looks like the following:
// Ex:
/*
  <div>
    <h1>Summer Smith</h1>
    <h2>Cohort 43</h2>
  </div>
*/
export let StudentList = () => {
  let newArray = students.map(obj => {
    return `
    <div>
    <h1>${obj.firstName} ${obj.lastName}</h1>
    <h2>Cohort ${obj.cohort}</h2>
    </div>
    `
  })
  return newArray.join("");
}
