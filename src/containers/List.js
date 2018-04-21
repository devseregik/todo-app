import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Message, Divider } from 'semantic-ui-react';

import Item from '../components/List/Item';

import { todoDone, todoRemove } from '../store/actions/todo';

/**
 * Logic by todos list output.
 * 
 * @class ListContainer
 * @extends {Component}
 */
class ListContainer extends Component {
    constructor() {
        super();

        this.handleDone = this.handleDone.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    /**
     * Handle mark todo item as done.
     * 
     * @param {String} id Identifier by todo item.
     */
    handleDone(id) {
        this.props.onTodoDone(id);
    }

    /**
     * Handle to remove todo item.
     *  
     * @param {String} id Identifier by todo item.
     */
    handleRemove(id) {
        this.props.onTodoRemove(id);
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
                                        handleDone={ this.handleDone }
                                        handleRemove={ this.handleRemove }
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
        onTodoDone(id) {
            dispatch(todoDone(id));
        },
        onTodoRemove(id) {
            dispatch(todoRemove(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);