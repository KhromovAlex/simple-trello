import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import './ListTitle.scss';

const ListTitle = props => {
    const { title, className } = props;
    const classTitle = ClassNames(
        'list-title',
        className
    );

    return (
        <h4 className={classTitle}>{title}</h4>
    );
};

ListTitle.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default React.memo(ListTitle);