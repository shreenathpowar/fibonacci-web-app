import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            I'm some other page!
            <a className="space"></a>
            <Link className="Link" to="/">Go back home</Link>
        </div>
    );
};
