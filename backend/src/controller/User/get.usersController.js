const {Users} = require("../../models");

const service = async (req, res, next) => {
    try{
        const where = {};
        if (req.params.id) {
            where.id = req.params.id;
        };
        const requestDB = await Users.findAll({where});
        if (requestDB) {
            return res.json({data: requestDB});
        } else{
            return res.status(404).json({msg: "Data Not Found"});
        }
    }catch(error){
        return res.status(500).json({msg: error.toString()});
    }
};

module.exports = {service}