app.controller("appController" , function($scope , $timeout , appServices){

    $scope.showAbout=false;
    $scope.shoeLogin=false;
    $scope.delay=false;
    $scope.openWHeader=false;
    $scope.editPortParticular=false;
    $scope.editPortExperience=false;
    $scope.tabMenu={};
    $scope.particularItem = [];
    $scope.newparticular = [];
    $scope.numberOfSkill = [];
    $scope.experienceItem = [];
    $scope.newExperience = [];
    $scope.projectsItem = [];
    $scope.contactItem = [];

    appServices.getPosts().then(res=>{
        console.log(res);
    });



    $scope.showAboutModal = (event)=>{
        event.stopPropagation();
        $scope.showAbout = !$scope.showAbout;
    }

    $scope.showLoginModal= ()=>{
        $timeout(()=>{
            $scope.delay = !$scope.delay
        } , 300)
        $scope.shoeLogin= !$scope.shoeLogin;
    }




    $scope.openWindowheader = (key)=>{

        if($scope.tabMenu[key] === true){
            $scope.tabMenu = {};
        }else{
            $scope.tabMenu = {};
            $scope.tabMenu[key] = true;
        }

        if($scope.tabMenu[key] === true){
            $scope.openWHeader = false;
            $timeout(()=>{
                $scope.openWHeader = true;
            } , 500)

        }else{
            $scope.openWHeader = false;
        }

        if(key == "detaile"){
            appServices.getprticular().then(function(res){
                $scope.particularItem = res.data;
            })
        }
        if(key == "skill"){
            appServices.getSkill().then(function(res){
                $scope.numberOfSkill = res.data ;
            })
        }
        if(key == "experience"){
            appServices.getExperience().then(function(res){
                $scope.experienceItem = res.data ;
            })
        }
        if(key == "projects"){
            appServices.getProject().then(function(res){
                $scope.projectsItem = res.data ;
            })
        }
        if(key == "contact"){
            appServices.getcontact().then(function(res){
                $scope.contactItem = res.data ;
            })
        }

        $timeout(()=>{
            if(document.querySelector('.checkBtn').value == 'on'){
                document.querySelector('.checkBtn').click(); 
            }
        } ,0)



    }
    

    $scope.closeTabMenu = ()=>{
        $scope.tabMenu = {} ; 
        $scope.openWHeader = false;
    }

    $scope.setSkillWidth = ()=>{
        for (const item of document.querySelectorAll('.progres_var')) {
            item.style.width=0 
        }
        $timeout(()=>{
            for (const key in $scope.numberOfSkill) {
                document.querySelectorAll('.progres_var')[key].style.width=`${$scope.numberOfSkill[key].value}%` 
            }
        } , 1000)
    }


    // ----------- edit window function start ----------
    $scope.openEdit = ()=>{
        
        appServices.getprticular().then(function(res){
            $scope.newparticular = res.data;
            if($scope.tabMenu.detaile === true){
                $scope.editPortParticular= !$scope.editPortParticular;
            }
        })
        appServices.getExperience().then(function(res){
            $scope.newExperience = res.data;
            if($scope.tabMenu.experience === true){
                $scope.editPortExperience= !$scope.editPortExperience;
            }
        })
    }


    

})