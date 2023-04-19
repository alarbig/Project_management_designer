// Import the required modules
const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

// Create a Sequelize instance
const sequelize = new Sequelize('project_management', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define the User model
const User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Hash the password before saving to the database
User.beforeCreate((user, options) => {
  return bcrypt.hash(user.password, 10)
    .then(hash => {
      user.password = hash;
    })
    .catch(error => {
      throw new Error(error);
    });
});

// Create the express app
const app = express();

// Set up middleware
app.use(cors());
app.use(bodyParser.json());

// Define the login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find the user with the specified email
  User.findOne({ where: { email } })
    .then(user => {
      if (!user) {
        res.status(401).json({ error: 'Invalid email or password' });
      } else {
        // Compare the password to the hashed password stored in the database
        bcrypt.compare(password, user.password, (error, result) => {
          if (result) {
            res.json({ message: 'Login successful' });
          } else {
            res.status(401).json({ error: 'Invalid email or password' });
          }
        });
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


const Login  = () => {
    return (
        <div>
            <h1>Signup</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        </p>
        </div>
    )
}

export default Login