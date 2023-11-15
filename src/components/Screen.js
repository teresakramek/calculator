import { useContext } from "react"
import { CalcEngine } from "../engine/CalcEngine"
import { Textfit } from "react-textfit";

const Screen = () => {

    const { calc } = useContext(CalcEngine);

    return (
        <Textfit className="screen" max={70} mode="single">{calc.num ? calc.num : calc.res}</Textfit>
    )
}

export default Screen