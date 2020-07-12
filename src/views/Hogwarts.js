import React from 'react';
import logo from '../images/logo.png';
import Context from '../ContextApp';

export default function Hogwarts() {
    return (
        <div className="App">
            <div className="hogwarts">
                <img src={logo} alt="" />
                <div className="container">
                    <Context />
                </div>
            </div>
            <footer className="App-footer">
                © 2020 Created by Rekyan, a muggle. All Rights Reserved.
            </footer>
        </div>
    )
}

// Halaman Landing Page akan menampilkan Context API berupa ganti teks greeting