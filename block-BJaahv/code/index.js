let projectMethods = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (newName) {
    this.name = newName;
  },
  incrementProject: function () {
    this.noOfProjects = noOfProjects + 1;
  },
  decrementProject: function () {
    this.noOfProjects = noOfProjects - 1;
  },
};

function createProject(name, id, noOfProjects) {
  let projects = Object.create(projectMethods);
  projects.name = name;
  projects.id = id;
  projects.noOfProjects = noOfProjects;
}

// PsuedoClassical Pattern

function CreateProject(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

CreateProject.prototype = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (newName) {
    return (this.name = newName);
  },
  incrementProject: function () {
    return (this.noOfProjects = this.noOfProjects + 1);
  },
  decrementProject: function () {
    return (this.noOfProjects = this.noOfProjects - 1);
  },
};

// Class

class Projects {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }

  getProjects() {
    return this.noOfProjects;
  }

  changeName(newName) {
    return (this.name = newName);
  }

  incrementProject() {
    return (this.noOfProjects = this.noOfProjects + 1);
  }

  decrementProject() {
    return (this.noOfProjects = this.noOfProjects - 1);
  }
}
