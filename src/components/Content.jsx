import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { uniqueId } from 'lodash';

import Board from './Board';
import AddBoard from './AddBoard';
import NotFound from './NotFound';
import Button from './Button';

import './Content.scss';

import { addBoard, removeBoard } from './../actions';

const mapStateToProp = (state) => ({
    boards: Object.values(state.boards),
});

class Content extends React.Component {
    handleNewBoard = (name) => {
        const { addBoard } = this.props;
        const board = {
            name,
            id: uniqueId(),
        };

        addBoard(board);
    }

    handleRemoveBoard = (id) => () => {
        const { removeBoard } = this.props;
        removeBoard({ id });
    }

    render() {
        const { boards } = this.props;

        return (
            <main className="content">
                <Switch>
                    <Route exact path='/'>
                        <ul className="board__list">
                            <li className="board__item"><AddBoard handleNewBoard={ this.handleNewBoard } /></li>
                            { boards.length > 0 &&
                                    boards.map((board) => (
                                        <li className="board__item" key={ board.id }>
                                            <Button onClick={ this.handleRemoveBoard(board.id) } className="button_round button_absolute_top">{"\u2716"}</Button>
                                            <Link className="board__link" to={ `/${board.name}-${board.id}` }>{ board.name }</Link>
                                        </li>
                                    )) }
                        </ul>
                    </Route>
                    { boards.length > 0 &&
                    boards.map((board) => (
                        <Route key={ board.id } path={ `/${board.name}-${board.id}` }>
                            <Board
                                name={ board.name }
                                id={ board.id }
                            />
                        </Route>
                    )) }
                    <Route path='*' component={ NotFound }></Route>
                </Switch>
            </main>
        );
    }
}

export default connect(mapStateToProp, { addBoard, removeBoard })(Content);