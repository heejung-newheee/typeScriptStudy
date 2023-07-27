import React from 'react';

import ArrayType from '../pages/ArrayType';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArrayObject from '../pages/ArrayObject';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ArrayObject />} />
                <Route path="/arrayType" element={<ArrayType />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
