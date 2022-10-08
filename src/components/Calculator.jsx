import React, { useState } from "react";
import "./Calculator.css"
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState(0);

    function inputNum(e) {
        let input = e.target.value
        if (num === 0) {
            setNum(input)
        } else {
            setNum(num + e.target.value)
        }
    }

    function clear() {
        setNum(0);
    }
    function percentage() {
        setNum(num / 100);
    }
    function changeSign() {
        if (num > 0) {
            setNum(-num);
        } else {
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e) {
        let operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);

    }

    function calculate() {
        if (operator === "/") {
            setNum(parseFloat(oldNum) / parseFloat(num));
        } else if (operator === "x") {
            setNum(parseFloat(oldNum) * parseFloat(num));
        } else if (operator === "-") {
            setNum(parseFloat(oldNum) - parseFloat(num));
        } else if (operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num));
        }

    }


    return (
        <div>
            <Box m={5} />
            <Container maxWidth="xs">
                <div className="wrapper">
                    <Box m={12} />
                    <h1 className="result">{num}</h1>
                    <button className="color" onClick={clear} >AC</button>
                    <button className="color" onClick={changeSign}>+/-</button>
                    <button className="color" onClick={percentage}>%</button>
                    <button className="different-color" onClick={operatorHandler} value={"/"}>/</button>
                    <button className="default-color" onClick={inputNum} value={7}>7</button>
                    <button className="default-color" onClick={inputNum} value={8}>8</button>
                    <button className="default-color" onClick={inputNum} value={9}>9</button>
                    <button className="different-color" onClick={operatorHandler} value={"x"}>X</button>
                    <button className="default-color" onClick={inputNum} value={4}>4</button>
                    <button className="default-color" onClick={inputNum} value={5}>5</button>
                    <button className="default-color" onClick={inputNum} value={6}>6</button>
                    <button className="different-color" onClick={operatorHandler} value={"-"}>-</button>
                    <button className="default-color" onClick={inputNum} value={1}>1</button>
                    <button className="default-color" onClick={inputNum} value={2}>2</button>
                    <button className="default-color" onClick={inputNum} value={3}>3</button>
                    <button className="different-color" onClick={operatorHandler} value={"+"}>+</button>
                    <button className="default-color" onClick={inputNum} value={0}>0</button>
                    <button className="default-color" onClick={inputNum} value={"."}>,</button>
                    <button className="different-color" style={{ visibility: "hidden" }}>,</button>
                    <button className="different-color" onClick={calculate}>=</button>
                </div>
            </Container >
        </div >
    )

}