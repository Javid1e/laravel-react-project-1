import React, { useState } from "react";
// import sections
import Hero from "../../components/sections/Hero";
import LayoutDefault from "../../layouts/LayoutDefault";
import Questions from "../../components/Questions/Quesions";
const Home = () => {
    return (
        <>
            <LayoutDefault>
                <Hero className="illustration-section-01" />
                <Questions />
            </LayoutDefault>
        </>
    );
};

export default Home;
