const File = require('../../models').File;

const validatePostUsersByCuilAndCbu = async (req, res, next) => {
    const { cuil, cbu, CompanyId } = req.body;

    const findByCbu = await File.findOne({
        where: { 
            cbu: cbu,
            CompanyId: CompanyId
        }
    }) 
    const findByCuil = await File.findOne({
        where: { 
            cuil:cuil,
            CompanyId: CompanyId
        }
    }) 
    
    if (findByCbu) return res.status(400).json({error: `Cbu: ${cbu} already exists in system. Please try another one.`});
    if (findByCuil ) return res.status(400).json({error: `Cuil: ${cuil} already exists in system. Please try another one.`});
        
    next();
}

module.exports = validatePostUsersByCuilAndCbu;