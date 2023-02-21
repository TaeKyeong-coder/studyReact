import React, { useState } from "react";

function useCounter(initialValue) { //초기 카운트 값을 parameter로 받음.
    const [count, setCount] = useState(initialValue); //count라는 이름의 hook을 생성하여 값을 제공

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count-1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;