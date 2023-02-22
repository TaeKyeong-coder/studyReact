import React from "react";

const students = [
    {
        id: 1,
        name: "TaeTae",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

//id를 key값으로
// function AttendanceBook(props) {
//     return (
//         <ul>
//             {students.map((student) => {
//                 return <li key={student.id}>{student.name}</li>
//             })}
//         </ul>
//     );
// }

//포맷팅 된 문자열을 key로 사용
// function AttendanceBook(props) {
//     return (
//         <ul>
//             {students.map((student) => {
//                 return <li key={`student-id-${student.id}`}>{student.name}</li>
//             })}
//         </ul>
//     );
// }

//key를 index로 변경
function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;