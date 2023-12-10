import React, { Fragment } from "react";

function Paralax() {
    return (
        <Fragment>
            <div>
            <div className="paralax full-height" id="slide3">
                    <div className="kratka">
                        <h1>GIT</h1>
                        <p>System kontroli wersji jak został wykorzystany w projekcie to GIT.
                            Wykorzystanie tego oprogramowania pozwala man łatwy sposób kontrolować pracę nad projektem.
                            Dodatkowo GIT cechują elastyczność, bezpieczeństwo, wydajność i funkcjonalność
                            Platforma na której przetrzymywane jest repozytorum to github. </p>
                        <a href="https://github.com/teresakramek/calculator/tree/master" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-github"></i>Link</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Paralax;