class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: '',
      longitude: '',
      locations: false,
      loading: false,
      burritos: [],
      burritoCards: [],
      showWelcome: true,
      showApp: false
    };
  }

  showWelcome(){
    this.setState({
      showWelcome: false,
      showApp: true
    });
  }

  _getCoords(coords) {
    this.setState({
      loading: true
    });

    this.setState({
      latitude: coords.latitude,
      longitude: coords.longitude,
      locations: true
    });

    this.getBurritos();
  }

  getBurritos() {
    $.ajax({
      url: `/api/v1/burritos/`,
      type: 'GET',
      data: { lat: this.state.latitude, lon: this.state.longitude },
      success: (response) => {
        this.setBurritos(response);
      }
    });
  }

  setBurritos(response){
    const burritos = response.map(function(burrito){
      return burrito.table
    });

    this.setState({ burritos: burritos });
  }

  resetBurritos(){
    this.setState({ burritos: [],
                    latitude: '',
                    longitude: '',
                    locations: false
                  });
  }

  render() {

    const style = {
       display: this.state.locations ? 'block' : 'none',
       color: 'white'
    }

    const burritoStyle = {
      display: this.state.loading ? 'block' : 'none',
    }

    const welcomeStyle = {
      display: this.state.showWelcome ? 'block' : 'none',
    }

    const appStyle = {
      display: this.state.showApp ? 'block' : 'none',
    }

    if(this.state.burritos.length > 0){
      var burritoCards = this.state.burritos.map((burrito) => {
        return (
          <div key={burrito.id}>
            <Col m={6} s={12}>
              <Card className='orange' textClassName='white-text'>
                <h3>{burrito.name}</h3>
                <h3>Distance: {burrito.distance}</h3>
                <img src={burrito.rating_large} alt="boohoo" className="img-responsive"/>
              </Card>
            </Col>
          </div>
        )
      });
    }

    return (
      <div>
        <div style={welcomeStyle} className="burritoBackground">
          <Welcome showWelcome={this.showWelcome.bind(this)} />
        </div>

        <div style={appStyle}>
          <Navbar />
          <div style={burritoStyle}>
          <img src="./lib/mission-burrito-gif.gif" alt="boohoo" className="img-responsive"/>
          </div>
          {burritoCards}
        </div>
        {burritoCards}
     </div>
    )
  }
}
