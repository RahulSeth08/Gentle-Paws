import { Category } from "./landingComp/Category";
import { Contact } from "./landingComp/Contact";
import { Deal } from "./landingComp/Deal";
import { Featured } from "./landingComp/Featured";
import { Header } from "./landingComp/Header";
import { Home } from "./landingComp/Home";
import { Offer } from "./landingComp/Offer";
import { Products } from "./landingComp/Products";

import React from 'react'

export function Landing() {
    return (
        <main>
            <Header />
            <Home />
            <Category />
            <Featured />
            <Deal />
            <Products />
            <Offer />
            <Contact />
        </main>
    )
}
