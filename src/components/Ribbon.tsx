import React, {PropsWithChildren} from 'react';
import './Ribbon.scss';

class Ribbon extends React.Component<React.PropsWithChildren<any>> {
    constructor(props: any) {
        super(props);
    }
    
    render(): React.ReactNode {
        return (
            <div className="ribbon">
                {this.props.children}
            </div>
        )
    }
}

export default Ribbon
