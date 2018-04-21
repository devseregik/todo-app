import React from 'react';
import { Segment, Popup, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { Row, Col } from 'react-simple-flex-grid';
import 'react-simple-flex-grid/lib/main.css';

/**
 * Status colors.
 */
const COLORS = {
    SUCCESS: 'green',
    DEFAULT: 'grey'
};

/**
 * Todo item presentation.
 */
const Item = ({ id, value, done, handleDone, handleRemove }) => {
    const color = done ? COLORS.SUCCESS : COLORS.DEFAULT;
    
    return <Segment color={ color } clearing>
                <Row align="middle" justify="space-around">
                    <Col>{ value }</Col>
                    <Col style={{ marginLeft: 'auto' }}>
                        { !done && <Button circular size="mini" icon="minus" color="red" onClick={ () => handleRemove(id) } /> }
                        <Popup
                            trigger={ 
                                <Button 
                                    circular
                                    size="mini"
                                    icon="checkmark" 
                                    disabled={ done } 
                                    color={ color } 
                                    onClick={ () => handleDone(id) } 
                                />
                            }
                            content="Mark as done!"
                        />
                    </Col>
                </Row>
            </Segment> 
};

Item.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    handleDone: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired
};

export default Item;