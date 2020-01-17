import React from 'react';
import ListTitle from './ListTitle';
import InputByPress from './InputByPress';
import ListTasks from './ListTasks';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './ListBlock.scss';

class ListBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        };
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        className: PropTypes.string,
    }

    handleInput = (text) => {
        this.setState((oldState) => ({
            tasks: [
                {text},
                ...oldState.tasks
            ],
        }))
    }

    render() {
        const { title, className } = this.props;
        const { tasks } = this.state;
        const classListBlock = ClassNames(
            'list-block',
            className
        );
        return (
            <div className={classListBlock}>
                <ListTitle title={title} />
                <InputByPress handleInput={this.handleInput} />
                <ListTasks tasks={tasks} />
            </div>
        );
    }
    
};

export default ListBlock;