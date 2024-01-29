// a list of users, each one must have a name, age and email

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

function actualizarUsuario(users, seachedEmail, newData){
  // se usa la funcion de arreglo some para validar si existe al menos un usuario con el email proporcionado
  if(!users.some(user => user.email === seachedEmail)){
    return {
      error: `No se encontró el usuario con email ${seachedEmail}`,
      data: null
    }
  }
  
  // se usa la funcion de arreglo map para actualizar el usuario con el email proporcionado
  // aqui estamos usando funcion de alto orden, ya que estamos pasando una funcion como argumento a otra funcion
  const updatedUsers = users.map( 
    // la funcion map recibe como argumento una funcion que se ejecutará por cada elemento del arreglo  
    function(user){
      // si el email del usuario es igual al email proporcionado, se actualiza el usuario con los datos proporcionados
      if(user.email === seachedEmail){
        return {
          // se colocan los datos del usuario actualizados
          name: newData.name,
          age: newData.age,
          phone: newData.phone,
          role: newData.role,
          // se colocan los datos del usuario que no se actualizaron
          email: user.email,
          createdAt: user.createdAt
        }
      }

      // si el email del usuario no es igual al email proporcionado, se regresa el usuario sin cambios
      return user
    }
  )

  // se regresa el arreglo de usuarios actualizado
  return {
    error: null,
    data: updatedUsers
  }
}

// se actualiza el usuario con email 'sahj@live' con los datos proporcionados
const newUsers = actualizarUsuario(users, 'marta@gmail.com', {
  name: 'Julio Sanjuan',
  age: 32,
  phone: '3333831741',
  role: 'general'
})

// se valida si hubo un error al actualizar el usuario
if(newUsers.error){
  // si hubo un error, se imprime el error
  console.warn(newUsers.error)
} else {
  // si no hubo un error, se imprime el arreglo de usuarios actualizado
  console.info(newUsers.data)
}

