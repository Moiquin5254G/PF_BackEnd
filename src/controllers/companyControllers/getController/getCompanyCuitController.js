const Company = require("../../../models").Company;

const getCompanyCuitController = async (cuit) => {
  const results = await Company.findOne({
    where: {
      cuit: cuit,
    },
  });

  if (results) {
    return {
      message: "This cuit already exists",
    };
  } else {
    return null;
  }
};

module.exports = getCompanyCuitController;
