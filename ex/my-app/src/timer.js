import React from 'react';
class Welcome extends React.Component{
    render(){
        return <h1>hello,{ this.props.name}</h1>
    }
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
};
function Comment(props) {
    return (
      <div className="Comment">
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
        </div>
      </div>
    );
}


function Tiemr(){
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    };
    return (
        <span>
            <a href="#" onClick={handleClick}>
                Click me
                {new Date().toLocaleTimeString()}
                
            </a>
            <Welcome name="Sara" />
            <Comment text={comment.text} />
        </span>
    );
}


setInterval(Tiemr, 1000);
export default  Tiemr