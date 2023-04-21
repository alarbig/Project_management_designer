const User = require('./User');
const Admin = require('./Admin');
// const Project = require('./Project');
const Organization = require('./Organization');

User.hasOne(Organization, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
    });

Organization.belongsTo(User, {
    foreignKey: 'user_id'
    });

// Project.hasMany(Organization, {
//     foreignKey: 'project_id',
//     onDelete: 'CASCADE'
//     });

// Organization.belongsTo(Project, {
//     foreignKey: 'project_id'
//     });

Admin.hasMany(Organization, {
    foreignKey: 'admin_id',
    onDelete: 'CASCADE'
    });

module.exports = { User, Admin, Organization };