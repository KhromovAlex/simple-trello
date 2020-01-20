import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => (
    <div className="not-found">
        <div>404</div>
        <div>Page not found</div>
        <Link className="not-found__link" to="/">Back to homepage!</Link>
    </div>
)

export default NotFound;