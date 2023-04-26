

const users = [
    {id: 24, name: 'Taras'},
    {id: 16, name: 'Sasha'}
]

const getUsers = (req, res) =>{
    if (req.params.id){
        return res.send(users.find(user => user.id == req.params.id))
    }
    res.send(users)
}


const createUser = (req,res)=>{
    console.log(req.body);
    const user = req.body;
    users.push(user);
    res.send(users);
}

module.export ={
    getUsers,
    createUser
}
