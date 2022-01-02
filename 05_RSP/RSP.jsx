import React, { useState, useRef, useEffect } from 'react';


// 클래스의 경우 -> constructor -> render -> ref -> componentDidMount
// (setState/props 바뀔때) -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// 부모가 나를 없앴을때  ->  componentWillUnmount -> 소멸

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === imgCoord;
    })[0];
};

const RSP = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.바위);
    const [score, setScore] = useState(0);
    const interval = useRef();
    
    useEffect(() => { // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
        interval.current = setInterval(changeHand, 100);
        return () => {
            // componentWillUnmount역할
            clearInterval(interval.current);
        }
    }, [imgCoord]);  // 두번째인자(배열)이 바뀔떄 useEffect가 실행됨

    const changeHand = () => {
        if (imgCoord === rspCoords.바위) {
            setImgCoord(rspCoords.가위);
        } else if (imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보);
        } else if (imgCoord === rspCoords.보) {
            setImgCoord(rspCoords.바위);
        }
    }

    // componentDidMount() { // 컴포넌트가 첫 렌덩링 된 후, 여기에 비동기 요청을 많이 해요
    //     this.interval = setInterval(this.changeHand, 100);
    // }

    // componentDidUpdate() { // 리렌더링 후
        
    // }

    // componentWillUnmount() { // 컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 해요
    //     clearInterval(this.interval);
    // }

    const onClickBtn = (choice) => (e) => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
            setResult('비겼습니다.')
        } else if ([-1,2].includes(diff)) {
            setResult('이겼습니다!');
            setScore((prevScore) => {
                return prevScore + 1;
            });
        } else {
            setResult('졌습니다.');
            setScore((prevScore) => {
                return prevScore - 1;
            });
        }
        setTimeout(() => {
            interval.current = setInterval(changeHand, 100);
        }, 2000)
    }

    return (
        <> 
            <div id="computer" style={{background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}></div>
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    )
    
}

export default RSP;