
const users = [
    {
      name: 'Manuel Turizo',
      age: 23,
      email: 'manuel@gmail.com',
      phone: '1234567890',
      role: 'admin',
      createdAt: Date.now()
    },
    {
      name: 'Lorena Herrera',
      age: 32,
      email: 'lorena@gmail.com',
      phone: '3355446677',
      role: 'general',
      createdAt: Date.now()
    },
    {
      name: 'Javier Hernandez',
      age: 40,
      email: 'javier@gmail.com',
      phone: '4422332233',
      role: 'general',
      createdAt: Date.now()
    },
    {
      name: 'Martha Higareda',
      age: 16,
      email: 'marta@gmail.com',
      phone: '5533445566',
      role: 'tech',
      createdAt: Date.now()
    }
  ];

function createNewUser(user, newData) {
    // inmutabilidad
    return {
        // se colocan los datos del usuario actualizados
        age: newData.age,
        phone: newData.phone,
        role: newData.role,
        // se colocan los datos del usuario que no se actualizaron
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
    }
}


function updateUser( usersList, emailToUpdate, newData ) {
    /*const user = usersList.find( usr => usr.email === emailToUpdate  )

    if( user === undefined  ) {
        return "El usuario no existe"
    }

    const updatedUser = {
        // se colocan los datos del usuario actualizados
        age: newData.age,
        phone: newData.phone,
        role: newData.role,
        // se colocan los datos del usuario que no se actualizaron
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
    }


    usersList.map( usr => usr ) */
    const user = usersList.some( usr => usr.email === emailToUpdate  )
    if(!user)   
        return {
            error: true,
            result: "El usuario no existe"
        }

    const newUsersList = usersList.map(
        function(usr) {
            if(usr.email === emailToUpdate) {
                return createNewUser( usr, newData)
            } 

            return usr
        }
    )

    return {
        error: false,
        result: newUsersList
    }

}

const updatedUsers = updateUser( users, "javier@gmail.com", {
    age: 32,
    phone: "65353563635",
    role: "developer"
})

if( updatedUsers.error === true ) {
    console.warn( updatedUsers.result )
} else {
    console.info( updatedUsers.result )
}

//console.log( "new users", newUsers )