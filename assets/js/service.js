app.service("appServices" , function($http){
    this.getprticular = ()=>{
        return $http.get("../assets/api/particular.json");
    }
    this.getSkill = ()=>{
        return $http.get("../assets/api/Skill.json");
    }
    this.getExperience = ()=>{
        return $http.get("../assets/api/experience.json");
    }
    this.getProject = ()=>{
        return $http.get("../assets/api/projects.json");
    }
    this.getcontact = ()=>{
        return $http.get("../assets/api/contact.json");
    }

    this.getPosts = ()=>{
        return $http.get('https://jsonplaceholder.typicode.com/posts');
    }
})