import React, { Fragment } from "react";
import Container from '../components/Container';
import Screen from '../components/Screen';
import BtnBox from '../components/BtnBox';
import Button from '../components/Button';
import CalcProvider from '../engine/CalcEngine';

function Calculator() {

    const btnValues = [
        ["AC", "+/-", "%", "÷"],
        [7, 8, 9, "x"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
      ]
    return (
        <Fragment>
            <div>
                <div className="desc full-height" id="slide2">
                    <CalcProvider>
                        <Container>
                            <Screen />
                            <BtnBox>
                                {btnValues.flat().map((btn, i) => (
                                    <Button
                                        value={btn}
                                        key={i}
                                    />
                                ))}
                            </BtnBox>
                        </Container>
                    </CalcProvider>
                </div>
            </div>
        </Fragment>
    )
}

export default Calculator;