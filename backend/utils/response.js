module.exports.responseReturn = (res, statusCode, data) => {
  res.status(statusCode).json({
    status: statusCode,
    data,
  });
};
