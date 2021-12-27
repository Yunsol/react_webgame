import React, {Component} from 'react';

// props를 받는곳이지만 보통 구조분해해서 쓴다
const Try = ({tryInfo}) => {
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    );
}

// class Try extends Component {
//     render(){
//         return (
//             <li>
//                 <div>{this.props.tryInfo.try}</div>
//                 <div>{this.props.tryInfo.result}</div>
//             </li>
//         );
//     }
// }

export default Try;