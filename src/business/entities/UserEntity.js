const Joi = require('joi')
const { Entity, validatorAdapter } = require('speck-entity')
 
const adapter = validatorAdapter('joi', Joi)

class UserEntity extends Entity {
  static SCHEMA = {
    id: adapter(Joi.number().required()),
    avatar_url: adapter(Joi.string().required()),
    bio: adapter(Joi.string().required()),
    name: adapter(Joi.string().required()),
    location: adapter(Joi.string().required()),
    blog: adapter(Joi.string().required()),
    public_repos: adapter(Joi.number().required()),
  }
}

export default UserEntity