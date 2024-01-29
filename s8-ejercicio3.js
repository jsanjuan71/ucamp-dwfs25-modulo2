import {patients} from './databases/patients.list.js'

/**
 * Agrega un nuevo paciente a la lista de pacientes proporcionada
 * @param {Array} patientsList - lista de pacientes
 * @param {Object} newPatient - {name: string, email: string, age: number, weight: number, height: number, bloodType: string, diseases: Array}
 * @returns {Object} {error: string, data: Array}
 * error: null si no hay error, o un mensaje de error si lo hay
 * data: la lista de pacientes actualizada o null si no se pudo agregar el paciente
 */
function addPatient(patientsList, newPatient) {
  // Validar si se mandan todos los datos del paciente
  if (!newPatient.name || !newPatient.email || !newPatient.age || !newPatient.weight || !newPatient.height || !newPatient.bloodType || !newPatient.diseases) {
    return {
      error: 'Se requiere el nombre, email, edad, peso, altura, tipo de sangre y lista de enfermedades del paciente',
      data: null
    }
  }

  // Validar si el paciente ya existe en la lista
  if (patientsList.some(patient => patient.email === newPatient.email)) {
    return {
      error: `El paciente con el email ${newPatient.email} ya existe`,
      data: null
    }
  }

  // crear la nueva lista de pacientes usando map
  /*
  const newPatients = patientsList.map( patient => patient )
  newPatients.push(newPatient)
  */

  // crear la nueva lista de pacientes usando spread operator
  const newPatients = [...patientsList, newPatient];

  return {
    error: null,
    data: newPatients
  }
}


/**
 * Funcion que busca un paciente por su email en la lista de pacientes proporcionada
 * @param {Array} patientsList 
 * @param {String} searchedEmail 
 * @returns {Object} {error: String, data: Object} 
 * error: null si no hay error, o un mensaje de error si lo hay
 * data: el paciente encontrado o null si no se encontró
 */
function findPatient(patientsList, searchedEmail) {
  // buscar el paciente con el email proporcionado
  // si no existe find devuelve undefined
  const patient = patientsList.find(patient => patient.email === searchedEmail);

  return {
    error: patient? null : `No se encontró el paciente con el email ${searchedEmail}.`,
    data: patient || null
  }
}

let patient = findPatient(patients, 'sahj@live,com.mx')
console.log("findPatient:", patient)

patient = findPatient(patients, 'lore@mail.com')
console.log("findPatient:", patient)

console.log("Add patient")
const newPatients = addPatient(patients, 
  {
    "name": "Julio Sanjuan",
    "email": "sahj@live.com.mx",
    "age": 32,
    "weight": 98,
    "height": 1.71,
    "bloodType": "A+",
    "diseases": ["overweight"]
  }
)

console.log("New patients list:", newPatients)

patient  = findPatient(newPatients.data, 'sahj@live.com.mx')
console.log("patient after add: ", patient)


