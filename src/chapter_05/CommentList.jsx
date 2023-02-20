//여러 개의 댓글 component를 포함하고 있는 댓글 목록 컴포넌트
import React from "react";
import Comment from "./Comment";

// step 1 : undefine 형태
// function CommentList(props) {
//     return (
//         <div>
//             <Comment />
//         </div>
//     );
// }

//step 2 : props 추가해서 데이터 각각 추가
// function CommentList(props) {
//     return (
//         <div>
//             <Comment name={"taekyeong"} Comment={"hi, my first component."} />
//             <Comment name={"taekyeong2"} Comment={"리액트 재미없어~!"} />
//         </div>
//     );
// }

//step 3 : 데이터를 별도의 객체로 분리해서 동적으로 표시하는 구조
const comments = [
    {
        name: "태태",
        comment : "안녕하세요, 태태예요.",
    },
    {
        name: "경경",
        comment : "리액트는 재미없어요~!",
    },
    {
        name: "태경",
        comment : "배불러요!!",
    },
]

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;