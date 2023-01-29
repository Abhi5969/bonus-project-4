const prepareJwtPayload = (obj) => {
  return {
    userId: obj._id,
    email: obj.email,
    role: obj.role,
  };
};

module.exports = prepareJwtPayload;
