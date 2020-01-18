import React from 'react';
import Button from './Button';
import InputByPress from './InputByPress';
import PropTypes from 'prop-types';
import './AddBoard.scss';

export default class AddBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInput: false,
        };
    }

    static propTypes = {
        handleNewBoard: PropTypes.func.isRequired,
    }

    toogleInput = () => {
        this.setState((oldState) => ({
            isInput: !oldState.isInput,
        }));
    }

    render() {
        const { isInput } = this.state;
        const { handleNewBoard } = this.props;

        return (
            isInput ?
            <div className="add-board-component">
                <Button className="button_round" onClick={this.toogleInput}>X</Button>
                <h4 className="add-board-component__title">Creating a board</h4>
                <InputByPress label="Enter a board name" placeholder="Board name..." handleInput={handleNewBoard} />
            </div>
            : <Button className="button_square" onClick={this.toogleInput}>Create a new board</Button>
        );
    }
}