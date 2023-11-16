
import { createContext, useState } from "react";

export const CalcEngine = createContext()
const CalcProvider = ({ children }) => {
    const [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0
    });
    const providerValue = {
        calc, setCalc
    }
    return (
        <CalcEngine.Provider value={providerValue}>
            {children}
        </CalcEngine.Provider>
    )
}

export default CalcProvider;