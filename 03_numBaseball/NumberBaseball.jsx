import React, { Component , useState}  from 'react';
import Try from './Try';

//숫자 4개를 겹치지않고 랜덤하게 뽑는 함수
function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9,0];
    const array = [];
    for(let i = 0 ; i < 4; i+=1){
        const chosen = candidate.splice(Math.floor(Math.random() * (10 - i), i), 1)[0];
        array.push(chosen);
    }
    return array;
}

const NumberBaseball = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런!');
            setTries((prevState) => {
                return [...prevState, {try: value, result:'홈련!'}]
            })
            alert('게임을 다시 시작합니다!');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')} 였습니다.`);
                alert('게임을 다시 시작합니다!');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else  if (answer.includes(answerArray[i])){
                        ball +=1;
                    }
                }

                setTries((prevState) => {
                    return [...prevState, {try: value, result:`${strike} 스트라이크, ${ball} 볼`}]
                })
                setValue('');
            }
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput}/>
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((v, i) => {
                    return (<Try key ={`${i + 1}차 시도:`} tryInfo={v}/>);
                })}
            </ul>
        </>
    );
}

// class NumberBaseball extends Component {
//     state = {
//         result: '',
//         value: '',
//         answer: getNumbers(),
//         tries: []
//     };

//     onSubmitForm = (e) => {
//         const {value, tires, answer} = this.state;
//         e.preventDefault();
//         if (value === answer.join('')) {
//             this.setState((prevState) => {return {result: '홈런!', tries: [...prevState.tries, {try: value, result:'홈런!'}]}});
//             alert('게임을 다시 시작합니다!');
//             this.setState({value: '', answer: getNumbers(), tries:[]});
//         } else {
//             const answerArray = value.split('').map((v) => parseInt(v));
//             let strike = 0;
//             let ball = 0;
//             if (tries.length >= 9) {
//                 this.setState({result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')} 였습니다.`});
//                 alert('게임을 다시 시작합니다!');
//                 this.setState({value: '', answer: getNumbers(), tries:[]});
//             } else {
//                 for (let i = 0; i < 4; i += 1) {
//                     if (answerArray[i] === answer[i]) {
//                         strike += 1;
//                     } else  if (answer.includes(answerArray[i])){
//                         ball +=1;
//                     }
//                 }
//                 this.setState((prevState) => {
//                     return {
//                         tries: [...tries, {try: value, result:`${strike} 스트라이크, ${ball} 볼`}],
//                         value: ''
//                     }
//                 });
//             }
//         }
//     };

//     onChangeInput = (e) => {
//         this.setState({value:e.target.value});
//     };

//     render() {
//         return (
//             <>
//                 <h1>{this.state.result}</h1>
//                 <form onSubmit={this.onSubmitForm}>
//                     <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
//                 </form>
//                 <div>시도: {this.state.tries.length}</div>
//                 <ul>
//                     {this.state.tries.map((v, i) => {
//                         return (<Try key ={`${i + 1}차 시도:`} tryInfo={v}/>);
//                     })}
//                 </ul>
//             </>
//         );
//     }
// }

// export const hello = 'hello'; // import  {hello}
export default NumberBaseball; //import NumberBaseball