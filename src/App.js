import React, {Component} from 'react';
import './App.css';

import Page1 from './components/Page1';
// without code splitting
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
import AsyncComponent from './components/AsyncComponent';
class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'page1',
      component: null
    }
  
  }

onRouteChange = (route) =>{
  // No code spliiting
  // this.setState({route:route});
  
  // with code splitting
//   if (route === 'page1'){
//     this.setState ({route: route})
//   }
//   else if(route === 'page2'){
//     import ('./components/Page2').then((Page2)=> {
//       console.log(Page2)
//       this.setState({route: route, component: Page2.default})
//     })
//   }
//   else{
//     import ('./components/Page3').then((Page3)=> {
//       this.setState({route: route, component: Page3.default})
//   })
// }

// Code splitting with AsyncComponent 
this.setState({route:route})
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

  // With code spliting
    // if (this.state.route === 'page1'){
    //   return <Page1 onRouteChange={this.onRouteChange}/>
    // }
    // else{
    //   return <this.state.component onRouteChange={this.onRouteChange}/>
    // }

// Code splitting with AsyncComponent 
        if (this.state.route === 'page1'){
      return <Page1 onRouteChange={this.onRouteChange}/>
    }
    else if (this.state.route === 'page2'){
      const AsyncPage2 = AsyncComponent(() => import('./components/Page2'))
      return <AsyncPage2 onRouteChange={this.onRouteChange}/>
    }
    else{
  
      const AsyncPage3 = AsyncComponent(() => import('./components/Page3'))
      return <AsyncPage3 onRouteChange={this.onRouteChange}/>
  }
}
}
export default App;
