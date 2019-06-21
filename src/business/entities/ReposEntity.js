const Joi = require('joi')
const { Entity, validatorAdapter } = require('speck-entity')
 
const adapter = validatorAdapter('joi', Joi)

class ReposEntity extends Entity {
  static SCHEMA = {
    id: adapter(Joi.number().required()),
    name: adapter(Joi.string().required()),
    description: adapter(Joi.string().required()),
    language: adapter(Joi.string().required()),
    stargazers_count: adapter(Joi.number().required()),
    forks_count: adapter(Joi.number().required())
  }
}

export default ReposEntity