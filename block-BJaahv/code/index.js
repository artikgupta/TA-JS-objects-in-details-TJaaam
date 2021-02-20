function createProject(name, id, noOfProjects) {
  let projects = {};
  projects.name = name;
  projects.id = id;
  projects.noOfProjects = noOfProjects;
  user.getProjects = function () {
    return this.noOfProjects;
  };
  user.changeName = function (newName) {
    let prevName = user.name;
    user.name = prevName;
    return prevName;
  };
  user.incrementProject = function () {
    user.noOfProjects = noOfProjects + 1;
    return user.noOfProjects;
  };
  user.decrementProject = function () {
    user.noOfProjects = noOfProjects - 1;
    return user.noOfProjects;
  };
  return user;
}

//Prototypal Pattern

let userMethods = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName = function (newName) {
    let prevName = this.name;
    this.name = prevName;
    return prevName;
  },
  incrementProject = function () {
  this.noOfProjects = noOfProjects + 1;
    return this.noOfProjects;
  },
  decrementProject = function () {
  this.noOfProjects = noOfProjects - 1;
    return this.noOfProjects;
  },
};


function createProject(name, id, noOfProjects) {
  let user = Object.create(userMethods);
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  
}

let user1 = createProject("Arti", 45, 193);

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
    let prevName = this.name;
    this.name = prevName;
    return prevName;;
  },

  incrementProject: function () {
    return (this.noOfProjects = this.noOfProjects + 1);
  },
  decrementProject: function () {
    return (this.noOfProjects = this.noOfProjects - 1);
  },
};

let user1 =  new createProject("Arti", 45, 193); 

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

   changeName (newName) {
    let prevName = this.name;
    this.name = prevName;
    return prevName;;
  }

  incrementProject() {
    return (this.noOfProjects = this.noOfProjects + 1);
  }

  decrementProject() {
    return (this.noOfProjects = this.noOfProjects - 1);
  }
}
