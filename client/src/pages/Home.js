import React from 'react';
// import '../components/styling/style';
const Home = () => {
    return (
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#signup">Signup</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
      <h1>Design Project Management Software</h1>
      <p>Efficiently manage your design projects with our software.</p>
      <a href="#features" class="button">Learn More</a>
    </header>
    <main>
      <section id="features">
        <h2>Features</h2>
        <ul>
          <li>Task management</li>
          <li>Time tracking</li>
          <li>Collaboration tools</li>
          <li>File sharing</li>
        </ul>
      </section>
      <section id="pricing">
        <h2>Pricing</h2>
        <p>Choose a pricing plan that fits your needs:</p>
        <ul>
          <li>Basic: $9/month</li>
          <li>Pro: $19/month</li>
          <li>Enterprise: Contact us for pricing</li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <form 
                action="#" method="post">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required></input>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required></input>
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <input type="submit" value="Send"></input>
        </form>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 Design Project Management Software</p>
    </footer>
  </body>
 
 )
}

export default Home;