const express = require('express');
const path = require('path');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const User = require('../server/models/User');

const app = express();

// Configure body-parser middleware for parsing JSON data
app.use(bodyParser.json());

// Serve the static React files
app.use(express.static(path.join(__dirname, 'client/build')));

// Define the database connection
const sequelize = require('../server/config/connection');
const { Organization } = require('./models');
const Project = require('./models/Project');

// Test the database connection
sequelize.authenticate().then(() => {
  console.log('Database connection has been established successfully.');
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});



// Define a GET endpoint to fetch all users from the database
app.get('/users', (req, res) => {
  User.findAll().then(users => {
    res.json(users);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: 'Error fetching users from the database.' });
  });
});

// Define a POST endpoint to create a new user in the database
app.post('/users', (req, res) => {
  const { name, email, password } = req.body;
  User.create({ name, email, password }).then(user => {
    res.json(user);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: 'Error creating user in the database.' });
  });
});

app.post('/organization', (req, res) => {
  const { businessName, email, teamSize, industry, phone, address, website } = req.body;
  Organization.create({ businessName, email, teamSize, industry, phone, address, website }).then(organization => {
    res.json(organization);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: 'Error creating user in the database.' });
  });
});

app.get('/organization', (req, res) => {
  Organization.findAll().then(organization => {
    res.json(organization);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: 'Error fetching organization from the database.' });
  });
});

app.post('/project', (req, res) => {
  const { projectName, projectDescription, projectBudget, projectTimeline, projectStatus, projectType, projectLocation, projectImage } = req.body;
  Project.create({ projectName, projectDescription, projectBudget, projectTimeline, projectStatus, projectType, projectLocation, projectImage }).then(project => {
    res.json(project);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: 'Error creating project in the database.' });
  });
});

app.get('/project', (req, res) => {
  Project.findAll().then(project => {
    res.json(project);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: 'Error fetching project from the database.' });
  });
});

app.get('/project/:id', (req, res) => {
  Project.findAll({
    where: {
      id: req.params.id
    }
  }).then(project => {
    res.json(project);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: 'Error fetching project from the database.' });
  });
});

app.put('/project/:id', (req, res) => {
  Project.update(req.body, {
    where: {
      id: req.params.id,
      projectBudget: req.body.projectBudget,
      projectTimeline: req.body.projectTimeline,
      projectStatus: req.body.projectStatus,
      projectDescription: req.body.projectDescription
    }
  }).then(project => {
    res.json(project);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: 'Error updating project in the database.' });
  });
});

app.delete('/project/:id', (req, res) => {
  Project.destroy({
    where: {
      id: req.params.id
    }
  }).then(project => {
    res.json(project);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: 'Error deleting project in the database.' });
  });
});



// Catch-all endpoint to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Sync the model with the database
sequelize.sync({ force: false }).then(() => {
  console.log('Model synced');
}).catch((error) => {
  console.error('Error syncing model:', error);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const sequelize = require('./models/index');
// const app = express();

// // Configure middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// // Define routes for your API endpoints here
// // ...

// // Define a catch-all route for serving the React app
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

// // Sync the database and start the server
// sequelize.sync().then(() => {
//   app.listen(process.env.PORT || 3000, () => {
//     console.log('Server started on port 3000!');
//   });
// }).catch(error => {
//   console.log('Error syncing database: ', error);
// });

