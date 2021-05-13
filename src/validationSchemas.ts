import Joi from "joi";
//const Joi = require("joi");

const bookValidationSchema = Joi.object().keys({
  id: Joi.string().optional(),
  title: Joi.string().min(3).max(40).required(),
  description: Joi.string().min(10).max(150).required(),
  content: Joi.string().min(10).max(20000).required(),
  author: Joi.string().min(3).max(40).required(),
  image: Joi.string().min(4).max(200).required(),
  price: Joi.number().min(1).required(),
  quantity: Joi.number().required(),
  lang: Joi.string().valid("fr", "en").required(),
  rating: Joi.number().min(0).max(5).required(),
  promo: Joi.number().optional(),
  top: Joi.boolean().optional(),
});

export { bookValidationSchema };
