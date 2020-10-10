import React from 'react';
import './Block.scss';

class Block extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        const { children } = this.props;
        return (
            <div className='block'>
                <h4>{children}</h4>
            </div>
        );

    }

}

export default Block;