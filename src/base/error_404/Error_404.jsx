import React from 'react';
import Translate from 'react-translate-component';

import { Header, Footer } from '../index';

export const Error_404 = () => {
    return (
        <div>
            <Header />
            <div className={`error-404 ${document.documentElement.clientWidth >= 991 ? "animate__animated" : ''} animate__pulse animate__slower animate__infinite`}>
                <h1 className="error-404-title">404</h1>
                <Translate component="h1" content="pageNotFound" className="error-404-title-text" />
            </div>
            <Footer />
        </div>
    )
}
