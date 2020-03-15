import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BoardTitle from './BoardTitle';
import AddList from './AddList';
import ListBlock from './ListBlock';

import './Board.scss';

import { addList } from './../actions';

const mapStateToProp = (state, ownProps) => ({
    lists: Object.values(state.lists).filter((list) => list.boardId === ownProps.id),
});

class Board extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    };

    handleNewList = (newList) => {
        const { addList } = this.props;
        addList(newList);
    }

    render() {
        const { name, id, lists } = this.props;
        
        return (
            <>
                <BoardTitle title={name} />
                <ul className="board-component">
                    <li className="list-block list-block_button">
                        <AddList boardId={id} handleNewList={this.handleNewList} />
                    </li>
                    { lists.length > 0 &&
                            lists.map((list) => (
                                    <ListBlock
                                        boardId={list.boardId}
                                        listId={list.id}
                                        className="list-block"
                                        key={list.id}
                                    />
                            )) }
                </ul>
            </>
        );
    }
};

export default connect(mapStateToProp, { addList })(Board);