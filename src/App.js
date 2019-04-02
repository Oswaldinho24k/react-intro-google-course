import React from 'react'
import icon1 from './images/icon1.png'


class App extends React.Component {
  render() {
    return (
      <div>
        <section className="main__section">
          <nav className="navbar">
            <span>LOGO</span>
            <span>Menu</span>
          </nav>
          <article className="article__texts">
            <h1>Say Hello to ReactJS</h1>
            <p>You will learn a Frontend framework from scratch, to become a Developer.</p>
            <button>Awesome!</button>
          </article>
        </section>
        <section className="cards__section">
          <div>
            <img src={icon1} />
            <h3>Declarative</h3>
            <p>  React makes it painless to create  interactive UI's </p>
          </div>
          <div>
            <img src={icon1} />
            <h3>Declarative</h3>
            <p>  React makes it painless to create  interactive UI's </p>
          </div>
          <div>
            <img src={icon1} />
            <h3>Declarative</h3>
            <p>  React makes it painless to create  interactive UI's </p>
          </div>
          <div>
            <img src={icon1} />
            <h3>Declarative</h3>
            <p>  React makes it painless to create  interactive UI's </p>
          </div>
        </section>
      </div>
    )
  }
}


export default App