import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) { }


  public schema = schema.create({
    email: schema.string({}, [rules.trim(), rules.email(), rules.required(), rules.unique({ table: 'users', column: 'email' })]),
    name: schema.string({}, [rules.trim()]),
    cpf: schema.string({}, [rules.trim(), rules.required(), rules.unique({ table: 'users', column: 'cpf' })]),
    phone: schema.string({}, [rules.trim()]),
    password: schema.string({}, [rules.trim()])
  })


  public messages: CustomMessages = {}
}
