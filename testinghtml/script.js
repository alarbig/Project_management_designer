const projectList = document.getElementById("project-list");
const projectForm = document.getElementById("project-form");
const clearBtn = document.getElementById("clear-btn");
const userList = document.getElementById("user-list");
const userForm = document.getElementById("user-form");

let users = [];
let projects = [];

function createUser(name, email, role) {
    return {
      name: name,
      email: email,
      role: role
    };
  }

// Load projects from localStorage
if (localStorage.getItem("projects")) {
  projects = JSON.parse(localStorage.getItem("projects"));
}

// Render project list
function renderProjectList() {
  projectList.innerHTML = "";
  
  projects.forEach(function(project) {
    const li = document.createElement("li");
    li.textContent = project.name;
    
    li.addEventListener("click", function() {
      renderProjectDetails(project);
    });
    
    projectList.appendChild(li);
  });
}

// Render project details
function renderProjectDetails(project) {
  projectForm.reset();
  
  document.getElementById("project-name").value = project.name;
  document.getElementById("client-name").value = project.client;
  document.getElementById("project-requirements").value = project.requirements;
  document.getElementById("start-date").value = project.startDate;
  document.getElementById("end-date").value = project.endDate;
  
  const assignedUsersSelect = document.getElementById("assigned-users");
  assignedUsersSelect.innerHTML = "";
  
  project.assignedUsers.forEach(function(user) {
    const option = document.createElement("option");
    option.textContent = user;
    option.value = user;
    
    assignedUsersSelect.appendChild(option);
  });
  
  document.getElementById("project-status").value = project.status;
  document.getElementById("comments").value = project.comments;
  document.getElementById("image-links").value = project.imageLinks;
}

// Save project
function saveProject() {
  const projectName = document.getElementById("project-name").value;
  const clientName = document.getElementById("client-name").value;
  const projectRequirements = document.getElementById("project-requirements").value;
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;
  const assignedUsersSelect = document.getElementById("assigned-users");
  const assignedUsers = Array.from(assignedUsersSelect.selectedOptions).map(option => option.value);
  const projectStatus = document.getElementById("project-status").value;
  const comments = document.getElementById("comments").value;
  const imageLinks = document.getElementById("image-links").value;
  
  // Validate form data
  if (!projectName || !clientName || !projectRequirements || !startDate || !endDate || !projectStatus) {
    alert("Please fill in all required fields!");
    return;
  }
  
  // Save project
  const project = {
    name: projectName,
    client: clientName,
    requirements: projectRequirements,
    startDate: startDate,
    endDate: endDate,
    assignedUsers: assignedUsers,
    status: projectStatus,
    comments: comments,
    imageLinks: imageLinks
  };
  
  projects.push(project);
  localStorage.setItem("projects", JSON.stringify(projects));
  
  // Render project list
  renderProjectList();
  
  // Reset form
  projectForm.reset();
}

// Clear form
function clearForm() {
  projectForm.reset();
}

// Event listeners
projectForm.addEventListener("submit", function(event) {
  event.preventDefault();
  saveProject();
});

clearBtn.addEventListener("click", clearForm);

// Initial render
renderProjectList();


// Load users from localStorage
if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
  }
  
  // Render user list
  function renderUserList() {
    userList.innerHTML = "";
    
    users.forEach(function(user) {
      const li = document.createElement("li");
      li.textContent = user.name;
      
      li.addEventListener("click", function() {
        assignUserToProject(user);
      });
      
      userList.appendChild(li);
    });
  }
  
  // Save user
  function saveUser() {
    const userName = document.getElementById("user-name").value;
    const userEmail = document.getElementById("user-email").value;
    const userRole = document.getElementById("user-role").value;
    
    // Validate form data
    if (!userName || !userEmail || !userRole) {
      alert("Please fill in all required fields!");
      return;
    }
    
    // Save user
    const user = createUser(userName, userEmail, userRole);
    
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    
    // Render user list
    renderUserList();
    
    // Reset form
    userForm.reset();
  }
  
  // Assign user to project
  function assignUserToProject(user) {
    const assignedUsersSelect = document.getElementById("assigned-users");
    
    // Check if user is already assigned to project
    if (Array.from(assignedUsersSelect.options).some(option => option.value === user.name)) {
      alert("User is already assigned to project!");
      return;
    }
    
    const option = document.createElement("option");
    option.textContent = user.name;
    option.value = user.name;
    
    assignedUsersSelect.appendChild(option);
  }
  
  // Clear form
  function clearForm() {
    userForm.reset();
  }
  
  // Event listeners
  userForm.addEventListener("submit", function(event) {
    event.preventDefault();
    saveUser();
  });
  
  clearBtn.addEventListener("click", clearForm);
  
  // Initial render
  renderUserList();