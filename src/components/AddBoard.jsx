import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import InputByPress from './InputByPress';

import './AddBoard.scss';

export default class AddBoard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isShowingInput: false,
        };
    }

    static propTypes = {
        handleNewBoard: PropTypes.func.isRequired,
    }

    handleToggle = () => {
        this.setState((oldState) => ({
            isShowingInput: !oldState.isShowingInput,
        }));
    }

    render() {
        const { isShowingInput } = this.state;
        const { handleNewBoard } = this.props;
        const inputAddBoard = 
            <div className="add-board-component">
                <Button className="button_round" onClick={this.handleToggle}>{"\u2716"}</Button>
                <h4 className="add-board-component__title">Creating a board</h4>
                <InputByPress placeholder="Board name..." handleInput={handleNewBoard} />
            </div>;
        const buttonAddBoard = <Button className="button_square" onClick={this.handleToggle}>Create a new board</Button>;

        return (
            isShowingInput ? inputAddBoard : buttonAddBoard
        );
    }
}