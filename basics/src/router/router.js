import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage } from '../pages';
import {
    Apples, Bananas1, Orange, Jsx1, Jsx2, Jsx3, Jsx4, InlineStyling, InternalStyling, ExternalStyling, ExternalModuleStyling, SassScss, DijitalSaatUygulamasi1, DijitalSaatUygulamasi2, DijitalSaatUygulamasi3, Greetings, Products, Image, ImageGallery, ProfileCard, BootstrapKlasikYontem, BootstrapModernYontem, ReactIcons, MaterialIcons, Events, ProductShop, State, Counter1, Birthday,
    UseEffect, FilterList,
    UseRef,
    ClassTurundeComponentler,
    FonksiyonTurundeComponentler,
    Fetch,
    Fetch2,
    Countries,
    ParentComponent,
    Form1,
    Form2,
    Form3,
    Form4,
    Form5,
    FormikYup1,
    FormikYup2
} from "../components";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/apples" element={<Apples />} />
                <Route path="/bananas1" element={<Bananas1 />} />
                <Route path="/orange" element={<Orange />} />
                <Route path="/jsx">
                    <Route index element={<Jsx1 />} />
                    <Route path="2" element={<Jsx2 />} />
                    <Route path="3" element={<Jsx3 />} />
                    <Route path="4" element={<Jsx4 />} />
                </Route>
                <Route path="styles">
                    <Route index element={<InlineStyling />} />
                    <Route path="inline" element={<InlineStyling />} />
                    <Route path="internal" element={<InternalStyling />} />
                    <Route path="external" element={<ExternalStyling />} />
                </Route>
                

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter