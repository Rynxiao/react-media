/**
 * Created by ryn on 2016/9/5.
 */

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render () {
        return (
            <div>
                <h1>app1</h1>
                <div>content</div>
                <div>AAHHAAfsd</div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
