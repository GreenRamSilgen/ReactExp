import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Carousel from 'react-elastic-carousel';
 
class App extends React.Component {
  state = {
    items: [
      {id: 1, title: 'https://i.pinimg.com/236x/f7/47/83/f74783ce63362f6fe5334b11384db577.jpg'},
      {id: 2, title: 'https://i.pinimg.com/236x/11/2e/3b/112e3b9716252fe63dd89893ba57d4ed.jpg'},
      {id: 3, title: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/BTS%2C_Wings.jpg/220px-BTS%2C_Wings.jpg'},
      {id: 4, title: 'https://64.media.tumblr.com/06f03431eaf42f7a065fd91d4656c81c/tumblr_p9ard1w4Sa1vxmh1zo4_250.jpg'},
      {id: 5, title: 'https://i.pinimg.com/236x/eb/cc/d5/ebccd590f63848a7a5aef38ceb64517d.jpg'}
    ]
  }
 
  render () {
    const { items } = this.state;
    return (
        <div className='carouselContainer'>
      <Carousel>
        {items.map(item => <div key={item.id}><img src={item.title} alt="yo"/></div>)}
      </Carousel>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));