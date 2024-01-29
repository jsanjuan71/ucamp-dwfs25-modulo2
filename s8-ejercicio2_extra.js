

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

  function createUserObject(usr, dataToModify) {
    return {
        name: dataToModify.name,
        age: dataToModify.age,
        email: usr.email,
        phone: usr.phone,
        role: dataToModify.role,
        createdAt: usr.createdAt
    }
  }

  //Modelo error-result -> {error: Boolean, result: any}

  function updateUser( usersList, emailToUpdate, newUserData ) {
    // buscar el usuario 
    // actualizar la informacion deseada
    // colocas el usuario en el resultado

    /*const searchResult = usersList.find( usr => usr.email === emailToUpdate )

    if( searchResult != undefined ) {

        searchResult.name = newUserData.name
        searchResult.age = newUserData.age
        searchResult.role = newUserData.role
    }

    return usersList */

    

    if( usersList.some( usr => usr.email === emailToUpdate ) === false) {
        return {
            error: true,
            result: "El usuario no existe"
            //usersList.map( usr => usr )
        } 
    }

    const newUsersList = usersList.map(
        function(usr) {
            if( usr.email === emailToUpdate ) {
                const newUsr = createUserObject( usr, newUserData )
                return newUsr
            } else {
                return usr
            }

            /*
            if( usr.email === emailToUpdate ) return createUserObject( usr, newUserData )
            return usr

            return usr.email === emailToUpdate ? createUserObject( usr, newUserData ) : usr
            */

        }
    )

    return {
        error: false,
        result: newUsersList
    }


    // definir una funcion que actualice el usuario encontrado


  }



  const updateResult =  updateUser( users, "javier@gmail.com", {
    name: "Julio Sanjuan",
    age: 32,
    role: "programador"
  } )

  if( updateResult.error === true ) {
    console.warn( updateResult.result )
  } else{
    console.log("Lista final PF", updateResult.result)
  }
  