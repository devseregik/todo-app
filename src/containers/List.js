import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Message, Divider } from 'semantic-ui-react';

import Item from '../components/List/Item';

import { TODO_DONE, TODO_REMOVE } from '../store/actions/todo';

/**
 * Logic by todos list output.
 * 
 * @class ListContainer
 * @extends {Component}
 */
class ListContainer extends Component {
    handleDone(id) {
        this.props.doneTodo(id);
    }

    handleRemove(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <Fragment>
                { this.props.list.length > 0 && <Divider section horizontal>{ this.props.doneOfListCount } / { this.props.list.length }</Divider> }
                {
                    !this.props.list.length ?
                        <Message size='small' color="blue">List is empty.</Message>
                        :
                        this.props.list.map((item, index) => {
                            return <Item 
                                        { ...item }
                                        key={ index }  
                                        handleDone={ this.handleDone.bind(this) }
                                        handleRemove={ this.handleRemove.bind(this) }
                                     />
                        })
                } 
            </Fragment>
        );
    }
}

const mapStateToProps = store => {
    return {
        list: store,
        doneOfListCount: store.filter(item => item.done).length
    };
}

const mapDispatchToProps = dispatch => {
    return {
        doneTodo(id) {
            dispatch({
                type: TODO_DONE,
                payload: { id }
            })
        },
        removeTodo(id) {
            dispatch({
                type: TODO_REMOVE,
                payload: { id }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);