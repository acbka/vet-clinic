import React from 'react'
import './App.css'
import {Header} from './components/header'
import {SideMenu} from './components/sidemenu'
import {Dream} from './components/dream'
import dream from './img/dream.png'
import { Gallery } from './components/gallery'
import { Booking } from './components/booking'
import { Welcome } from './components/welcome'
import { Footer } from './components/footer'

class App extends React.Component {
	constructor(props) {
		super(props);
      this.state = {
         sections: [
            {name: "dream",
            img: dream,
         },
      ],
         tasks: []
      };
   }

	render() {
		return (
         <div>   
            <Header />
            <SideMenu />
            <Dream />
            <Gallery />
            <Booking />
            <Welcome />
            <Footer />
         </div>
      );
	}
}

export default App;