import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './components/Nav/Nav';

import KsjLogin from './pages/kimsujeong/Login/Login';
import KsjMain from './pages/kimsujeong/Main/Main';

import KdhLogin from './pages/koodanhee/Login/Login';
import KdhMain from './pages/koodanhee/Main/Main';

import LhjLogin from './pages/leehyejin/Login/Login';
import LhjMain from './pages/leehyejin/Main/Main';

import JooLogin from './pages/leehyunjoo/Login/Login';
import JooMain from './pages/leehyunjoo/Main/Main';

import SsjLogin from './pages/shinsoojung/Login/Login';
import SsjMain from './pages/shinsoojung/Main/Main';


import SdkLogin from './pages/simdongkyu/Login/Login';
import SdkMain from './pages/simdongkyu/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav/> 
      <Routes>
        <Route path="/login-kimsujeong" element={<KsjLogin />} />
        <Route path="/main-kimsujeong" element={<KsjMain />} />

        <Route path="/login-koodanhee" element={<KdhLogin />} />
        <Route path="/main-koodanhee" element={<KdhMain />} />

        <Route path="/login-leehyejin" element={<LhjLogin />} />
        <Route path="/main-leehyejin" element={<LhjMain />} />

        <Route path="/login-leehyunjoo" element={<JooLogin />} />
        <Route path="/main-leehyunjoo" element={<JooMain />} />

        <Route path="/login-shinsoojung" element={<SsjLogin />} />
        <Route path="/main-shinsoojung" element={<SsjMain />} />

        <Route path="/login-simdongkyu" element={<SdkLogin />} />
        <Route path="/main-simdongkyu" element={<SdkMain />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
