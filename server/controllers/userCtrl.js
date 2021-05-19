const Users = require('../models/userModel')
const bcrypt = require('bcrypt')

const userCtrl = {
    register: async(req,res) => {
        try {
            const { name, email, password } = req.body
            const user = await Users.findOne({ email })

            if (user) return res.status(400).json({msg: 'The email already exists'})
            if (password.length < 6)
                return res.status(400).json({msg: 'Password is at least 6 characters long'})
            
            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({
                name, email, password: passwordHash
            })
            
            // Save Mongodb
            await newUser.save()
            res.json({msg: 'Register success'})

        } catch (err){
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = userCtrl