import React from 'react'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import react from './images/react-logo.svg'
import menu from './images/menu-top.svg'
import ironhack from './images/ironhack-logo.svg'



class App extends React.Component {
  render() {
    return (
      <div>
        <section className="main__section">
          <nav className="navbar">
            <span>
              <img src={ironhack} alt="ih" />
            </span>
            <span>
              <img src={menu} alt="menu" />
            </span>
          </nav>
          <article className="article__texts">
            <h1>Say Hello to ReactJS</h1>
            <p>You will learn a Frontend framework from scratch, to become a Developer.</p>
            <button>Awesome!</button>
          </article>
        </section>
        <section className="cards__section">
          <div>
            <img src={icon1} alt="logo" />
            <h3>Declarative</h3>
            <p>  React makes it painless to create  interactive UI's </p>
          </div>
          <div>
            <img src={icon2} alt="logo" />
            <h3>Declarative</h3>
            <p>  React makes it painless to create  interactive UI's </p>
          </div>
          <div>
            <img src={icon3} alt="logo" />
            <h3>Declarative</h3>
            <p>  React makes it painless to create  interactive UI's </p>
          </div>
          <div>
            <img src={icon4} alt="logo" />
            <h3>Declarative</h3>
            <p>  React makes it painless to create  interactive UI's </p>
          </div>
        </section>
        <footer>
          Made By IronGooglers
        </footer>
      </div>
    )
  }
}


export default App