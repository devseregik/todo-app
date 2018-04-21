import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import _ from 'underscore';

import { TODO_ADD } from '../store/actions/todo';


/**
 * Prefix for unique ID by todo item.
 */
const ID_PREFIX = 'todo_';

/**
 * Logic by add new todo.
 * 
 * @class AddContainer
 * @extends {Component}
 */
class AddContainer extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            hasError: false
        };

        this.handleEnter = this.handleEnter.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.input = React.createRef();
    }

    handleEnter(e) {
        if (e.key === 'Enter') {
            var hasValue = this.state.value !== '';
            if (hasValue) {
                this.props.addTodo(this.state.value);
            }

            this.setState({ 
                value: '', 
                hasError: !hasValue
            })
        }
    }

    handleChange(e) {
        var value = e.target.value.trim();
        this.setState({ value });
    }
    
    render() {
        const { value, hasError } = this.state;

        return (
            <Fragment>
                <Input 
                    ref={ this.input } 
                    fluid 
                    error={ hasError }
                    size="large" 
                    placeholder="Write a todo and press Enter to add..." 
                    onKeyPress={ this.handleEnter }
                    onChange={ this.handleChange }
                    value={ value }
                />
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: value => {
            dispatch({
                type: TODO_ADD,
                payload: {
                    id: _.uniqueId(ID_PREFIX),
                    value,
                    done: false
                }
            });
        }
    }
}

export default connect(null, mapDispatchToProps)(AddContainer);