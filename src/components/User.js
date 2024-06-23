import React from 'react';
class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  componentDidMount()
  {
    console.log("Component Did Mount");
  }
  componentDidUpdate()
  {
    console.log("Component Did Update")
  }
  render() {
    
    return (
      <div>
        <h2>{this.props.peru}</h2>
      </div>
    );
  }
}

export default User;
