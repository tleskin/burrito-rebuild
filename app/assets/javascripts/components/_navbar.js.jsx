class Navbar extends React.Component {

  constructor() {
    super();
    this.state = {
      latitude: '',
      longitude: '',
      locations: false
    };
  }

  resetLocations(){

  }

  _getCoords(coords) {

    this.setState({
      latitude: coords.latitude,
      longitude: coords.longitude,
      locations: true
    });

    this.getBurritos();
  }

  render(){
    return (
      <nav>
       <div class="nav-wrapper">
         <a href="#" class="brand-logo">BF</a>
         <ul id="nav-mobile" class="right hide-on-med-and-down">
           <li>lat: {this.state.latitude}, lon: {this.state.longitude}</li>
           <li><ReactGeoLocation getCoords={this._getCoords.bind(this)} /></li>
           <li><button onClick={this.resetLocations.bind(this)}>Reset</button></li>
         </ul>
       </div>
     </nav>
    )
  }
}
