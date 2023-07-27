import React, { useState } from 'react';

const ArrayObject = () => {
    // 배열로 지정된 state의 type을 지정해볼게요!
    const [names, setNames] = useState<string[]>(['원장', '제천', '동훈', '상림', '명한', '병수', '창영', '재상']);

    // 타입이 지정된 객체 상태와 초기값을 세팅해요.
    const [person, setPerson] = useState<{ name: string; age: number }>({
        name: '원장',
        age: 21
    });

    // 기존의 배열에 새로운 이름을 추가하는 함수입니다.
    // 만약 input 또는 output이 었었다면 관련 type은 반드시 넣어줘야겠죠.
    const addNewName = () => {
        // 추가할 때 마다 배열의 개수가 덧붙여져 신규 튜터님 이름이 생성됩니다.
        const newName = `신규 튜터님 -> ${names.length + 1}`;
        setNames([...names, newName]);
    };
    // 나이를 업데이트하는 함수입니다.
    const updateAge = () => {
        setPerson({ ...person, age: person.age + 1 });
    };

    return (
        <div>
            <h1>리액트 튜터 목록</h1>
            <ul>
                {names.map((name: string, index: number) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <button onClick={addNewName}>튜터 추가하기</button>

            <h1>가장 젊은 사람</h1>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <button onClick={updateAge}>철들이기</button>
        </div>
    );
};

export default ArrayObject;
