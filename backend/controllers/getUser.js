const User = require('../model/index.js');

const getUser = async (req, res) => {
    console.log('ok');
    
    try {

        const user = await User.find({});
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to retrieve trips" });
    }
};
module.exports=getUser