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
    }

    toogleInput = () => {
        this.setState((oldState) => ({
            isInput: !oldState.isInput,
        }));
    }

    render() {
        const { isInput } = this.state;
        const { handleNewList } = this.props;

        return (
            isInput ?
            <div className="add-list-component">
                <Button className="button_round" onClick={this.toogleInput}>X</Button>
                <InputByPress handleInput={handleNewList} />
            </div>
            : <Button className="button_square" onClick={this.toogleInput}>Add a list</Button>
        );
    }
}