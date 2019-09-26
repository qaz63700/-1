
import React from 'react';
import './style.css';
function WarningBanner(props){
    if(!props.warn){
        console.log(props)
        return null
    }

    return(
        <div className="warning">
            warning
        </div>
    )
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = { showWarning:true };
        this.handleToggleClick =this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }
    render() {
        return (
            <div>
            <WarningBanner warn={this.state.showWarning} />
            <button onClick={this.handleToggleClick}>
                {this.state.showWarning ? 'Hide' : 'Show'}
            </button>
            </div>
        );
    }
}

export default Page
