import React from 'react';
import Button from './Button';
import InputByPress from './InputByPress';
import PropTypes from 'prop-types';
import './AddList.scss';

export default class AddList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInput: false,
        };
    }

    static propTypes = {
        handleNewList: PropTypes.func.isRequired,
        boardName: PropTypes.string.isRequired,
    }

    toogleInput = () => {
        this.setState((oldState) => ({
            isInput: !oldState.isInput,
        }));
    }

    handleInput = (listName) => {
        const { handleNewList, boardName } = this.props;
        const newList = {
            listName,
            boardName,
        };
        handleNewList(newList);
    }

    render() {
        const { isInput } = this.state;

        return (
            isInput ?
            <div className="add-list-component">
                <Button className="button_round" onClick={this.toogleInput}>X</Button>
                <InputByPress placeholder="List name..." handleInput={this.handleInput} />
            </div>
            : <Button className="button_square" onClick={this.toogleInput}>Add a list</Button>
        );
    }
}