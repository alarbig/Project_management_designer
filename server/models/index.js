const User = require('./User');
const Organization = require('./Organization');
const Project = require('./Project');

// Project belongs to many users
Project.belongsToMany(User, {
    through: 'UserProject',
    foreignKey: 'project_id'
  });
  
  // User belongs to many projects
  User.belongsToMany(Project, {
    through: 'UserProject',
    foreignKey: 'user_id'
  });
  
  // Organization belongs to many users
  Organization.belongsToMany(User, {
    through: 'OrganizationUser',
    foreignKey: 'organization_id'
  });
  
  // User belongs to one organization
  User.belongsTo(Organization, {
    through: 'OrganizationUser',
    foreignKey: 'user_id'
  });
  
  // Organization has many projects
  Organization.hasMany(Project, {
    foreignKey: 'organization_id',
    onDelete: 'CASCADE'
  });
  
  // Project belongs to one organization
  Project.belongsTo(Organization, {
    foreignKey: 'organization_id'
  });

  module.exports = { User, Organization, Project };

