import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import StoreValidator from 'App/Validators/User/StoreValidator'
import UpdateValidator from 'App/Validators/User/UpdateValidator'

export default class UsersController {
  public async index({ auth }: HttpContextContract) {
    const user = await User.query().where('id', auth.user!.id)
    return user
  }

  public async store({ request }: HttpContextContract) {
    const data = await request!.validate(StoreValidator)
    const user = await User.create(data)
    return user
  }

  public async show({ params, auth }: HttpContextContract) {
    const user = await User.query().where('id', auth.user!.id).where('id', params.id).firstOrFail()
    return user
  }

  public async update({ request, params, auth }: HttpContextContract) {
    const user = await User.query().where('id', auth.user!.id).where('id', params.id).firstOrFail()
    const data = await request!.validate(UpdateValidator)
    user.merge(data)
    return user
  }

  public async destroy({ params, auth}: HttpContextContract) { 
    const user = await User.query().where('id', auth.user!.id).where('id', params.id).firstOrFail()
    await user.delete()
    return "Deletado com sucesso"
  }
}
