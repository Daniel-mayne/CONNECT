import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    email: schema.string.optional({}, [rules.trim()]),
    name: schema.string.optional({}, [rules.trim()]),
    cpf: schema.string.optional({}, [rules.trim()]),
    phone: schema.string.optional({}, [rules.trim()]),
    password: schema.string.optional({}, [rules.trim()])
  })


  public messages: CustomMessages = {}
}
