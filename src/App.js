import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize the component state
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Our engineers are always ready to face challenging assignments.',
        imgSrc: 'engineer.jpeg',
        profession: 'Engineer'
      },
      show: false,
      intervalId: null,
      timeSinceMount: 0
    };
  }

  componentDidMount() {
    // Set up an interval that updates the timeSinceMount state property every second
    const intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    // Clean up the interval when the component is unmounted
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    // Toggle the show state property
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person, show, timeSinceMount } = this.state;

    return (
      <div className="App">
        {/* Button to toggle the show state */}
        <button onClick={this.toggleShow}>Toggle Show</button>

        {/* Conditionally render the person's profile if show is true */}
        {show && (
          <div>
            {/* Display the person's full name */}
            <h2>{person.fullName}</h2>
            {/* Display the person's bio */}
            <p>{person.bio}</p>
            {/* Display the person's image */}
            <img src={person.imgSrc} alt={person.fullName} />
            {/* Display the person's profession */}
            <p>Profession: {person.profession}</p>
          </div>
        )}

        {/* Display the time since the component was mounted */}
        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
