import React from 'react';
import Board from './Board';
import AddBoard from './AddBoard';
import { Switch, Route, Link } from 'react-router-dom';
import {uniqueId} from 'lodash';
import './Content.scss';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayBoards: [],
            arrayRoutes: [],
        };
    }

    handleNewBoard = (title) => {
        const board = <Board title={title} />;
        const route = <Route path={`/${title}`}>{board}</Route>;
        this.setState((oldState) => ({
            arrayBoards: [
                {
                    name: title,
                    component: board,
                },
                ...oldState.arrayBoards,
            ],
            arrayRoutes: [
                ...oldState.arrayRoutes,
                route,
            ],
        }))
    }

    render() {
        const { arrayBoards, arrayRoutes } = this.state;
        return (
            <main className="content">
                <Switch>
                    <Route exact path='/'>
                        {
                            arrayBoards.length ?
                            <ul>
                                {
                                    arrayBoards.map((board) => (
                                        <li key={uniqueId()}>
                                            <Link to={board.name}>{board.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                            : null
                        }
                        <AddBoard handleNewBoard={this.handleNewBoard} />
                    </Route>
                    {arrayRoutes.length ? arrayRoutes : null}
                </Switch>
            </main>
        );
    }
}
