let users = [
  { name: "Kyaw Kyaw", age: 20, salary: 1000, gender: "male", isSingle: true },
  { name: "Mg Mg", age: 21, salary: 2000, gender: "male", isSingle: true },
  { name: "Zaw Zaw", age: 22, salary: 3000, gender: "male", isSingle: true },
  { name: "Hla Hla", age: 23, salary: 4000, gender: "Female", isSingle: false },
  { name: "Mya Mya", age: 24, salary: 5000, gender: "Female", isSingle: false },
];
const all = (req,res) => {
    res.json({con:true,msg:"All Users",result:users});
}
const add = (req,res) => {
        let newUser = req.body;
         users.push(newUser);
        res.json({ con: true, msg: "New User Added!", result: users });
}
const modify = (req,res,next) => {
     let name = req.params.name;
    let salary = req.body.salary;
    let foundUser = users.find(s => s.name === name);
    if(foundUser) {
        foundUser.salary = salary;
        res.json({con:true,msg:"User Updated",result:foundUser});
    } else {
        next (new Error ("No User with that name!,"));
    }
}
const drop = (req,res,next) => {
    let name = req.params.name;
    let foundUser = users.find(s => s.name === name);
    if(foundUser) {
        let index = users.indexOf(foundUser);
        users.splice(index,1);
        res.json({con:true,msg:"User Deleted",result:users});
    } else {
        next (new Error ("No User with that name!,"));
    }
}
module.exports = {
    all,
    add,
    modify,
    drop
}

