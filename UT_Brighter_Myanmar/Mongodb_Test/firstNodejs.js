/*
const express = require("express");
const app = express();
const path = require("path");

app.get('/names',(req,res)=>{
    res.send("Name List Responsed");
    res.json({names: ["Kyaw Kyaw","Mg Mg","Zaw Zaw"]});
})

app.listen(3000 , () => {
    console.clear();
    console.log("Server started on port 3000");
});

=========================================

/*
app.get ('/',(req,res) =>{
    res.send("Hello Kyawwww");
});
app.get('/names',(req,res)=>{

    res.sendFile(path.join(__dirname,"/index.html"));
    res.send("Name List Responsed");
    res.json({names: ["Kyaw Kyaw","Mg Mg","Zaw Zaw"]});
});

========================
app.get('/',(req,res)=> res.send ("Welcome  From Srever"));

app.get('/users',(req, res) =>{
    res.json({con:true,msg:"All Staff",result:staff});
});

app.get('/user/:name',(req, res,next) =>{
    let queryName = req.params.name;
    let user = staff.find (s => s.name === queryName);
    if(user){
        res.json({con:true,msg:"User Found",result:user});
    } else {
        next (new Error ("No User with that name!"));
    }
});

app.get('/users/names',(req, res) => {
    let names = staff.map(s => s.name);
    let totalSalary = staff.reduce((total,s) => total + s.salary,0);

    res.json({con:true,msg:"All staff Names",result:{total:totalSalary}});
});

app.post ('/users',(req,res) =>{
    let newUser = req.body;
    staff.push (newUser);
    res.json({con:true,msg:"New Staff Added", result:staff});
});
/*
app.patch('/user/:name/:salary',(req,res,next) => {
    let name = req.params.name;
    let salary = Number(req.params.salary);

    let findUser = staff.find(s => s.name === name);
    if(findUser) {
        findUser.salary = salary;
        res.json({con:true,msg:"User Updated",result:findUser});
    } else {
        next (new Error ("No User with that name!,"));
    }
});

app.patch ('/user',(req,res,next) => {
    let name = req.body.name;
    let salary = Number(req.body.salary);

    let findUser = staff.find(s => s.name === name);
    if(findUser) {
        findUser.salary = salary;
        res.json({con:true,msg:"salary Updated",result:findUser});
    } else {
        next (new Error ("No User with that name!,"));
    }
});

app.delete ('/user/:name',(req,res) => {
    let name = req.params.name;
    let foundUser = staff.find(s => s.name === name);

    if(foundUser) {
        staff = staff.filter(s => s.name !== foundUser.name);
        res.json({con:true,msg:"User Deleted",result:staff});
    } else {
        next(new Error ("No User with that name!"));
    }
});

================================
app.route('/users')
        .get((req,res) => res.json({con:true,msg:"All Users",result:staff}))
        .post((req,res) => {
            staff.push(req.body);
            res.json({con:true,msg:"New User Added",result:staff});
        })
        .patch((req,res,next) => {
            let name = req.body.name;
            let salary = Number(req.body.salary);

            let foundUser = staff.find(s => s.name === name);
            if(foundUser) {
                foundUser.salary = salary;
                res.json({con:true,msg:"User Updated",result:foundUser});
            } else {
                next (new Error ("No User with that name!,"));
            }
        })

*/

