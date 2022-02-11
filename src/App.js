import React, {Component} from 'react';
import './App.css';

import Page1 from './components/Page1';
// without code splitting
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'page1',
      component: ''
    }
  
  }

onRouteChange = (route) =>{
  // No code spliiting
  // this.setState({route:route});
  // with code splitting
  if (route === 'page1'){
    this.setState ({route: route})
  }
  else if(route === 'page2'){
    import ('./components/Page2').then((Page2)=> {
      console.log(Page2)
      this.setState({route: route, component: Page2.default})
    })
  }
  else{
    import ('./components/Page3').then((Page3)=> {
      this.setState({route: route, component: Page3.default})
  })
}
}
  render () {
    // Without code splitting
  //   if (this.state.route === 'page1'){
  //     return <Page1 onRouteChange={this.onRouteChange}/>
  //   }
  //   else if (this.state.route === 'page2'){
  //     return <Page2 onRouteChange={this.onRouteChange}/>
  //   }
  //   else{
  
  //   return  <Page3 onRouteChange={this.onRouteChange}/>
  // }
    if (this.state.route === 'page1'){
      return <Page1 onRouteChange={this.onRouteChange}/>
    }
    else{
      return <this.state.component onRouteChange={this.onRouteChange}/>
    }
}
}
export default App;
