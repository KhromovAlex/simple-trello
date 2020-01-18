import React from 'react';
import BoardTitle from './BoardTitle';
import AddList from './AddList';
import ListBlock from './ListBlock';
import PropTypes from 'prop-types';
import {uniqueId} from 'lodash';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayListComponents: [],
        };
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    handleNewList = (title) => {
        const listBlock = <ListBlock title={title} />;
        this.setState((oldState) => ({
            arrayListComponents: [
                listBlock,
                ...oldState.arrayListComponents,
            ]
        }))
    }

    render() {
        const { title } = this.props;
        const { arrayListComponents } = this.state;
        return (
            <>
                <BoardTitle title={title} />
                {
                    arrayListComponents.length ?
                    <ul>
                        {
                            arrayListComponents.map((list) => (
                                <li key={uniqueId()}>{list}</li>
                            ))
                        }
                    </ul>
                    : null
                }
                <AddList handleNewList={this.handleNewList} />
            </>
        );
    }
}