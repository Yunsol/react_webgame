import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
// useMemo : 복잡한 함수 결과값을 기억
// useRef : 일반값을 기억
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
    const lottoNumbers = useMemo(() => getWinNumbers(), []); // Hooks는 전체를 다시 실행하는데 useMemo를 사용하면 값을 기억하고 있어서 해당 값은 함수호출을 안함
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

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
    const onClickRedo = () => {
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    };

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
