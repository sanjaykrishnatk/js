class landing{
    database={
        Milan:{username:'Milan',password:'milan123'},
        Manu:{username:'Manu',password:'manu123'},
        Mini:{username:'Mini',password:'mini123'}
    }

    saveData(){
        if(this.database){
            localStorage.setItem("database",JSON.stringify(this.database))
        }
    }
    getData(){
        this.database=JSON.parse(localStorage.getItem("database"));
        // console.log(this.database);
    }

    register(){
        this.getData()
        let user= regUser.value;
        let pwd= regPwd.value
        // console.log(user,pwd);
        if(!user || !pwd){
            alert("Please input all required fields");
        }else{
            if(user in this.database){
                alert("Account alrady exist")
            }else{
                this.database[user]={username:user,password:pwd}
                alert("Registration Successful");
                this.saveData()
                window.location='./index.html'
            }
        }
    }
    login(){                

        this.getData()
        let user= logUser.value;
        let pwd= logPwd.value
        // console.log(user,pwd);
        if(!user || !pwd){
            alert("Please input all required fields");
        }else{
            if(user in this.database){
                if(this.database[user].password==pwd){
                    alert("Login Successful");   
                    localStorage.setItem("user",user);                 
                    window.location='./home.html'
                }else{
                    alert("Invalid username or password")
                }
            }else{
                alert("Account doesn't exist")
                window.location='./index.html'
            }
        }

    }
}
function showUserName(){
    let user=localStorage.getItem("user")
    if(!user){
        window.location="./index.html"
    }else{
        userName.innerHTML=user
    }
   }

    function logout(){
        localStorage.removeItem("user")
        window.location="./index.html"
    }

const obj = new landing();
// obj.saveData()
obj.getData()
