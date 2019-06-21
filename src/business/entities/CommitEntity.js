const Joi = require('joi')
const { Entity, validatorAdapter } = require('speck-entity')
 
const adapter = validatorAdapter('joi', Joi)

class CommitEntity extends Entity {
  static SCHEMA = {
    sha: adapter(Joi.number().required()),
    author: adapter(Joi.object().required()),
    commit: adapter(Joi.object().required()),
    html_url: adapter(Joi.string().required()),
  }
}

export default CommitEntity