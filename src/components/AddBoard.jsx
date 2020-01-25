import React from 'react';
import Button from './Button';
import InputByPress from './InputByPress';
import PropTypes from 'prop-types';
import './AddBoard.scss';

export default class AddBoard extends React.Component {
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
                <Button className="button_round" onClick={this.handleToggle}>X</Button>
                <h4 className="add-board-component__title">Creating a board</h4>
                <InputByPress placeholder="Board name..." handleInput={handleNewBoard} />
            </div>;
        const buttonAddBoard = <Button className="button_square" onClick={this.handleToggle}>Create a new board</Button>;

        return (
            isShowingInput ? inputAddBoard : buttonAddBoard
        );
    }
}