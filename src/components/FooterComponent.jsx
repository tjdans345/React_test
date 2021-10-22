import React, {Component} from 'react';

class FooterComponent extends Component {

    constructor(props) {
        super(props);

        this.setState();
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">Started 2021 </span>
                </footer>
            </div>
    );
    }
}

export default FooterComponent;