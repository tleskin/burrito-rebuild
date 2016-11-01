class Welcome extends React.Component{

  showWelcome(){
    this.props.showWelcome();
  }

  render(){
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <p>Welcome to Burrito Finder! I originally built this app while at the Turing School of Software and Design. This is a rebuild using React. I'm working on integrating maps again and am planning on a Native iOS/Android app built with React Native.</p>
              <button onClick={this.showWelcome.bind(this)}>Go to BurritoFinder Web</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
