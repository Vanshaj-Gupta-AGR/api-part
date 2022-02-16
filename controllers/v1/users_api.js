
const User = require('../../models/user');
const jwt = require('jsonwebtoken');



module.exports.createSession = async function(req, res){

    try{
        console.log(req.body)
        let user = await User.findOne({email: req.body.email});

        if (!user || user.password != req.body.password){
            return res.json(422, {
                message: "Invalid username or password"
            });
        }

        return res.json(200, {
            message: 'Sign in successful, here is your token, please keep it safe!',
            data:  {
                token: jwt.sign(user.toJSON(), "codeial", {expiresIn:  '100000'})
            },
            user:user
        })

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}
module.exports.create = function(req, res){
    // if (req.body.password != req.body.confirm_password){
    
    //     return res.redirect('back');
    // }
console.log(req.body);

    User.findOne({email: req.body.email}, function(err, user){
        console.log("okay")
        if(err){ console.log("okay") 
            return}

        if (!user){
            console.log("okay")
            User.create(req.body, function(err, user){
                if(err){ return}
                console.log("okay")
                return res.json(200,{
                    data:{
                        user:user
                    }
                }
                  
                )
            })
        }else{
            return res.redirect('back');
        }

    });
}
module.exports.profile = function(req, res){
    console.log("okaytgtg")
    User.findById(req.params.id, function(err, user){
        console.log("jjj")
        return res.json(200,{
            data: {
                user: user
            }
    });

})}