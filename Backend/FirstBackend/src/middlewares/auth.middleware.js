export const sampleMiddleWare = async (req, res, next) => {
  console.log("I am Sample Middleware 1");
  next();
};

export const sampleMiddleWare2 = async (req, res, next) => {
  console.log("I am Sample Middleware 2");
  next();
};
