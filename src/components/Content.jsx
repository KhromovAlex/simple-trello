import React from 'react';
import Board from './Board';
import AddBoard from './AddBoard';
import { Switch, Route, Link } from 'react-router-dom';
import { uniqueId } from 'lodash';
import './Content.scss';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: [],
            lists: [],
            tasks: [],
        };
    }

    handleNewBoard = (name) => {
        this.setState((oldState) => ({
            boards: [
                {
                    id: uniqueId(),
                    name,
                },
                ...oldState.boards,
            ],
        }))
    }

    handleNewList = (newList) => {
        this.setState((oldState) => ({
            lists: [
                newList,
                ...oldState.lists,
            ],
        }));
    }

    handleNewTask = (newTask) => {
        this.setState((oldState) => ({
            tasks: [
                newTask,
                ...oldState.tasks,
            ],
        }));
    }

    render() {
        const { boards, tasks, lists } = this.state;

        return (
            <main className="content">
                <Switch>
                    <Route exact path='/'>
                        <ul className="board__list">
                        <li className="board__item"><AddBoard handleNewBoard={this.handleNewBoard} /></li>
                            {
                                boards.length ?                            
                                    boards.map((board) => (
                                        <li className="board__item" key={uniqueId()}>
                                            <Link className="board__link" to={`/${board.name}-${board.id}`}>{board.name}</Link>
                                        </li>
                                    ))
                                : null
                            }
                        </ul>
                    </Route>
                    {boards.length ?
                    boards.map((board) => (
                        <Route key={uniqueId()} path={`/${board.name}-${board.id}`}>
                            <Board
                                lists={lists.filter((list) => list.boardId === board.id)}
                                handleNewTask={this.handleNewTask}
                                handleNewList={this.handleNewList}
                                tasks={tasks.filter((task) => task.boardId === board.id)}
                                title={board.name}
                                id={board.id}
                            />
                        </Route>
                    ))
                    : null}
                </Switch>
            </main>
        );
    }
}
