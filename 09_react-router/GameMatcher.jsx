import React, { Component } from "react";
import NumberBaseball from "./NumberBaseball";
import RSP from "./RSP";
import Lotto from "./Lotto";
import { useLocation, useNavigate, Routes, Route } from "react-router";

class GameMatcher extends Component {
    render() {
        const location = useLocation();
        const navigate = useNavigate();
        let urlSearchParams = new URLSearchParams(
            this.props.location.search.slice(1)
        );
        console.log(urlSearchParams.get("hello"));
        console.log(urlSearchParams.get("page"));
        return (
            <Routes>
                <Route path="number-baseball" element={<NumberBaseball />} />
                <Route path="rock-scissors-paper" element={<RSP />} />
                <Route path="lotto-generator" element={<Lotto />} />
                <Route
                    path="*"
                    element={<div>일치하는 게임이 없습니다.</div>}
                />
            </Routes>
        );
    }
}

export default GameMatcher;
