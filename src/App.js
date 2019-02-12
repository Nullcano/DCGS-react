import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from "./components/Menu";
import ContentMenu from "./components/ContentMenu";
import Something from "./Something";
import Child from "./Child";
import Shop from './components/Shop';

class App extends Component {
  state = { 
    version: 'React Alpha 0.0-05',
    money: 0,
    xp: 0,
    lvl: 1,
    lvlxp: 100,
    totalxp: 0,
    lvlcap: 42,
    items: [
      { cost: 2200, name: 'Bed | Purple', desc: 'Purrple and comfy.', img: 'img/bed-purple.gif', type: 'bed', id: 'bed-purple' },
      { cost: 4400, name: 'Drone | Bat', desc: 'A spooky bat-looking drone.', img: 'img/drone-bat.gif', type: 'drone', id: 'drone-bat' },
      { cost: 330, name: 'Face Mask | Samurai', desc: 'Surgical mask with a Japanese samurai print.', img: 'img/facemask-samurai.gif', type: 'facemask', id: 'facemask-samurai' },
      { cost: 440, name: 'Glasses | Purple Tint', desc: 'Sunglasses with a purple lens tint.', img: 'img/glasses-purpletint.gif', type: 'glasses', id: 'glasses-purpletint' },
      { cost: 1100, name: 'Hair | White', desc: 'Pearly white locks.', img: 'img/hair-white.gif', type: 'hair', id: 'hair-white' },
      { cost: 550, name: 'Hat | Red Cap', desc: 'Red snapback with a paw print.', img: 'img/hat-redcap.gif', type: 'hat', id: 'hat-redcap' },
      { cost: 2200, name: 'Mini Skirt | White', desc: 'A white miniskirt.', img: 'img/miniskirt-white.gif', type: 'miniskirt', id: 'miniskirt-white' },
      { cost: 3300, name: 'Shirt | Mars', desc: 'This is a reference to SpaceX merch.', img: 'img/shirt-mars.gif', type: 'shirt', id: 'shirt-mars' },
      { cost: 5500, name: 'Shirt | Tesla', desc: 'Tribute for when SpaceX sent a Tesla into orbit February 6, 2018.', img: 'img/shirt-tesla.gif', type: 'shirt', id: 'shirt-tesla' },
      { cost: 660, name: 'Shorts | Denim', desc: 'Basic blue denim shorts.', img: 'img/shorts-denim.gif', type: 'shorts', id: 'shorts-denim' },
      { cost: 110, name: 'Tanktop | Black', desc: 'Solid black tanktop.', img: 'img/tanktop-black.gif', type: 'tanktop', id: 'tanktop-black' },
      { cost: 220, name: 'Thigh Highs | Rainbow', desc: 'Is this considered a double rainbow?', img: 'img/thighhighs-rainbow.gif', type: 'thighhighs', id: 'thighhighs-rainbow' },
      { cost: 990, name: 'Top | Pink', desc: 'Pink top with a lightning bolt print.', img: 'img/top-pink.gif', type: 'top', id: 'top-pink' }
    ]
  }

  notify = () => toast("Wow so easy !");

  render() {
    return (
        <div className="App">
          <Menu />
          <main class="w-90 center">
            <Something class text={"Domesticated Catgirl Simulator | " + this.state.version} />
            <Child
              onclick={() => {
                this.setState({ 
                  money: this.state.money + 1,
                  xp: this.state.xp + 3,
                  notify: this.notify,
                });
              }}
            />
            <Something text={'Money: ' + this.state.money} />
            <Something text={'Exp: ' + this.state.xp} />
            <Something text={'Level: ' + this.state.lvl} />
            <ToastContainer />
            <div class="flex flex-row">
              <div class="w-50">
                <h3 class="f3 fw1">Shop</h3>
                <div class="flex flex-wrap">
                  <Shop items={this.state.items} />
                </div>
              </div>
              <div class="w-50">
                <h3 class="f3 fw1">Inventory</h3>
                <div class="flex flex-wrap">
                  
                </div>
              </div>
            </div>
          </main>
          <ContentMenu />
        </div>
    );
  }
}

export default App;
