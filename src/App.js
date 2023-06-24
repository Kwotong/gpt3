import React from 'react';

import { Blog, Features, Footer, Header, Possibility, Whatgpt } from './containers';
import { Cta, Brand, Navbar } from './components';
import './app.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Whatgpt />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App;