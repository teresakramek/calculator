import { useContext } from "react"
import { CalcEngine } from "../engine/CalcEngine"

const Screen = () => {

    const { calc } = useContext(CalcEngine);

    return (
        <div className="screen">032143</div>
    )
}

export default Screen