import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
// useMemo : 복잡한 함수 결과값을 기억
// useRef : 일반값을 기억
// useCallback: 함수 자체를 기억
import Ball from "./Ball";

function getWinNumbers() {
    console.log("getWinNumbers");
    const candidate = Array(45)
        .fill()
        .map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(
            candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
        );
    }
    const bonusNumbner = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumbner];
}

const Lotto = () => {
    // Hooks를 선언할때 조건문 안에 넣으면 안되고 반복문도 웬만하면 넣지 말기(순서가 확실히 정해진 반복문은 괜찮지만..)
    // 두번쨰 요소에 넣는값이 바뀌지 않는이상 리턴값을 계속 기억해둠
    const lottoNumbers = useMemo(() => getWinNumbers(), []); // Hooks는 전체를 다시 실행하는데 useMemo를 사용하면 값을 기억하고 있어서 해당 값은 함수호출을 안함
    const [winBalls, setWinBalls] = useState([]);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    // componentDidUpdate에만 하고싶을 때 (패턴 외우삼)
    // const mounted = useRef(false);
    // useEffect(() => {
    //     if (!mounted.current) {
    //         mounted.current = true;
    //     } else {
    //         // componentDidUpdate에서만 하고싶은거..  ajax호출 등...
    //     }
    // }, [바뀌는 값]);
    
    //useEffect안에 useState쓰지말기
    useEffect(() => {
        if (winBalls.length === 0) {
            runTimeouts();
        }
        return () => {
            timeouts.current.forEach((t) => {
                clearTimeout(t);
            });
        };
    }, [bonus]); // 두번쨰 인수가 빈 배열이면 componentDidMount와 동일
    //배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행
    // return 은 componentWillUnmount

    const runTimeouts = () => {
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevState) => {
                    return [...prevState, winNumbers[i]];
                });
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
    };
    const onClickRedo = useCallback(() => {
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }, []);
    // 함수컴포넌트는 전체가 다시 실행되는데 함수 자체를 기억해서 함수컴포넌트가 재실행되도 onClickRedo를 재생성하지 않음
    // 첫번째 state를 계속 기억함...state를 사용할때는 두번쨰 인자에 넣어주어야 변경된 값을 기억함
    // useCallback 필수로 적용해야할때: 자식컴포넌트에 함수를 넘길때 필수! useCallback을 안쓸때 자식한테 새로운 함수를 준다고 생각해서 새로 렌더링을 함

    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => (
                    <Ball key={v} number={v} />
                ))}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number={bonus} />}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    );
};

export default Lotto;
