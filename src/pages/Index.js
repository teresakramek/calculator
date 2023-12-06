import React, { Fragment } from "react";
import Header from '../section/Header';
import Banner from '../section/Banner';
import Calculator from '../section/Calculator';
import Paralax from '../section/Paralax';
import ToolsAndTechnologies from '../section/ToolsAndTechnologies';
import Footer from '../section/Footer';

function Index() {
    return (
        <Fragment>
            <div>
                <Header />
                <Banner />
                <Calculator />
                <Paralax />
                <ToolsAndTechnologies />
                <Footer />
            </div>
        </Fragment>
    )
}

export default Index;