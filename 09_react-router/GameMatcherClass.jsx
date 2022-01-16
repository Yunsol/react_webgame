import React from "react";
import { Component } from "react";
import NumberBaseball from "./NumberBaseball";
import RSP from "./RSP";
import Lotto from "./Lotto";
import { Route, Routes, useLocation, useParams } from "react-router";

class GameMatcher extends Component {
    render() {
        let urlSearchParams = new URLSearchParams(
            this.props.location.search.slice(1)
        );
        console.log("urlSearchParams", urlSearchParams);
        return (
            <Routes>
                <Route path="number-baseball" element={<NumberBaseball />} />
                <Route path="rock-scissors-paper" element={<RSP />} />
                <Route path="lotto-generator" element={<Lotto />} />
                {/* <Route
                    path="*"
                    element={<div>일치하는 게임이 없습니다.</div>}
                /> */}
            </Routes>
        );
    }
}

const WrappedComponent = (props) => {
    const location = useLocation();
    const param = useParams();
    console.log("param", param);
    console.log("location", location);
    return <GameMatcher location={location} {...props} />;
};

export default WrappedComponent;
