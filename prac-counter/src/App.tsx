import React, { useEffect, useState } from 'react';

function App() {
    // <number> 제네릭은 여기서는 생략해도 됩니다.
    // 생략 시 initialState 값인 0에 따라 타입추론되어 number의 type은 number가 됩니다.
    const [number, setNumber] = useState<number>(0);
    const downButtonHandler = () => {
        setNumber((prev) => prev - 1);
    };
    const upButtonHandler = () => {
        setNumber((prev) => prev + 1);
    };

    // typescript에서는 함수를 생성할 떄, input/output에 대한 type을 명시해야해요!
    const createAlertMsg = (num: number): string => {
        return `현재숫자는 ${number} 입니다.`;
    };

    // input/output이 없는 함수는 타입을 적지 않아도 무방합니다.
    // 만약 명시하고 싶다면, output에 해당하는 return 값을 void 라고 표기해줘도 좋습니다.
    // const alertMsg = () : void ⇒ { … }
    const alertMsg = () => {
        alert(createAlertMsg(number));
    };

    useEffect(() => {
        console.log(`number가 ${number}로 변경되어 알려드립니다.`);
    }, [number]);

    return (
        <>
            <div style={{ padding: '20px' }}>
                <div>
                    <h4>{number}</h4>
                </div>
                <div>
                    <button onClick={downButtonHandler}>감소버튼</button>
                    <button onClick={upButtonHandler}>증가버튼</button>
                </div>
                <button onClick={alertMsg}>메세지 출력</button>
            </div>
        </>
    );
}

export default App;
