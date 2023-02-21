import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10; //최대 카운트 개수.

function Accommodate(props) { //Accommodate라는 이름의 리액트 함수 컴포넌트.
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0); //내가 만든 useCounter Hook을 사용하여 counter를 관리.

    useEffect(() => { //useEffect Hook의 작동방식 확인을 위해 useEffect 두 개 사용
        console.log(`=================`);
        console.log(`useEffect() is called.`);
        console.log(`isFull: ${isFull}`); //isFull은 용량이 가득 찼는지 아닌지의 상태를 저장하는 state
    }); //의존성 배열이 없는 형태 => component가 mount된 직후에 호출되고 이후 component가 업데이트 될 때마다 호출됨.

    useEffect(()=>{
        setIsFull(count>=MAX_CAPACITY); //카운트 개수가 최대 용량을 초과하면
        console.log(`Current count value: ${count}`); //경고문 표시
    }, [count]); //의존성 배열이 있는 형태

    return (
        <div style={{ padding:16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color:"red"}}>정원이 가득찼습니다.</p>}
        </div>
    )
}

export default Accommodate;