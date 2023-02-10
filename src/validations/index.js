import Joi from "joi";

export const postTweetValidator = (data) => {
  const schema = Joi.object({
    user: Joi.string().required().label("User"),
    text: Joi.string().required().label("Text"),
    image: Joi.string().optional().empty(""),
  });
  return schema.validate(data);
};
