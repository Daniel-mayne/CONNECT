import Route from '@ioc:Adonis/Core/Route'


Route.resource('/users', 'UsersController').apiOnly().middleware({
    index: ['auth'],
    show: ['auth'],
    update: ['auth'],
    destroy: ['auth'],
})