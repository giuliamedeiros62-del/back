const userlist = require ("../data/users")

const findAll = () => {
return userlist
}

const create = (user) => {
    userlist.push(user)

    return user
}

const findById = (id) => {
    return userlist.find( user => user.id === id)
}

const update =  (id, data) => {
    const user = userlist.find ( user => user.id === id )
    
    if ( !user ) return null

    if (data.name){
        user.name = data.name
    }

    return user
}
    const remove = (id) => {
        const index = userlist.findIndex( user => user.id === id )

        if ( index === -1 ) return null

        const deleted = userlist [index]

        userlist.splice(index, 1)

        return deleted
    }


module.exports = {
    findAll,
    create,
    findById,
    update,
    remove
    
}

