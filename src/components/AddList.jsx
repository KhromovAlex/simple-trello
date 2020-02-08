import React from 'react';
import Button from './Button';
import InputByPress from './InputByPress';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import './AddList.scss';

export default class AddList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingInput: false,
        };
    }

    static propTypes = {
        handleNewList: PropTypes.func.isRequired,
        boardId: PropTypes.string.isRequired,
    }

    handleToggle = () => {
        this.setState((oldState) => ({
            isShowingInput: !oldState.isShowingInput,
        }));
    }

    handleInput = (name) => {
        const { handleNewList, boardId } = this.props;
        const newList = {
            id: uniqueId(),
            name,
            boardId,
        };
        
        handleNewList(newList);
    }

    render() {
        const { isShowingInput } = this.state;
        const inputAddList = 
            <div className="add-list-component">
                <Button className="button_round" onClick={this.handleToggle}>{"\u2716"}</Button>
                <InputByPress placeholder="List name..." handleInput={this.handleInput} />
            </div>;
        const buttonAddList = <Button className="button_square" onClick={this.handleToggle}>Add a list</Button>;

        return (
            isShowingInput ? inputAddList : buttonAddList
        );
    }
}