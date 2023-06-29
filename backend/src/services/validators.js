const Joi = require("joi");

// Schema for register user
const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "any.required": "Nom est requis",
    "string.min": "Nom doit contenir 3 caractères minimum",
    "string.max": "Nom doit contenir 30 caractères maximum",
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "fr"] },
    })
    .max(255)
    .required()
    .messages({
      "any.required": "Email est requis",
      "string.max": "Email doit contenir 255 caractères maximum",
      "string.email": "Email doit être dans un format valide",
    }),
  password: Joi.string().min(7).max(30).required().messages({
    "any.required": "Mot de passe est requis",
    "string.min": "Mot de passe doit contenir 7 caractères minimum",
    "string.max": "Mot de passe doit contenir 30 caractères maximum",
  }),
  roles: Joi.string(),
});

// Validator for register user
const validateUser = (req, res, next) => {
  const { name, email, password, roles } = req.body;

  const { error } = userSchema.validate(
    {
      name,
      email,
      password,
      roles,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  validateUser,
};
