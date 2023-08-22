import {useState} from "react"
import Error from './Error'

const Formulario = ({pacientes , setPacientes}) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha , setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error,setError] = useState(false)

  const generarId = () => {
    const random = Math.random().toString(36).slice(2);
    const fecha = Date.now().toString(36)
    
    return random + fecha
  }

  const  handleSubmit = (e)=>{
    e.preventDefault();

    //Validacion formulario 
    if([nombre,propietario,email,fecha,sintomas].includes('')){
      console.log('Hay al menos un campo vacio');
      setError(true)
      return;
    }
    setError(false)
    const objetoPaciente={
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId(),
    }

    setPacientes([...pacientes,objetoPaciente])
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }


  return (

    <div className="mt-5 md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Añade paciente y {''}
            <span className="font-bold text-amber-800 text-lg">Adminístralos</span>
        </p>
        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          { error && <Error mensaje='Todos los campos son obligatorios'/>}
          <div className="mb-5">
            <label htmlFor="mascota"  className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
              <input 
                // required
                id="mascota"
                type="text"
                placeholder="Nombre de la mascota"
                className="border-4 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={nombre}
                onChange={ (e)=> setNombre(e.target.value) }
              />
          </div>
          <div className="mb-5">
            <label htmlFor="propietario"  className="block text-gra
            y-700 uppercase font-bold">Nombre propietario</label>
              <input 
                // required
                id="propietario"
                type="text"
                placeholder="Nombre del propietario"
                className="border-4 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={propietario}
                onChange={ (e)=> setPropietario(e.target.value) }
              />
          </div>
          <div className="mb-5">
            <label htmlFor="email"  className="block text-gray-700 uppercase font-bold">Email</label>
              <input 
                // required
                id="email"
                type="email"
                placeholder="Email de contacto"
                className="border-4 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={email}
                onChange={ (e)=> setEmail(e.target.value) }
                />
          </div>
          <div className="mb-5">
            <label htmlFor="alta"  className="block text-gray-700 uppercase font-bold">Alta</label>
              <input 
                id="alta"
                type="date"
                className="border-4 w-full p-2 mt-2 rounded-md"
                value={fecha}
                onChange={ (e)=> setFecha(e.target.value) }
                />
          </div>
          <div className="mb-10">
            <label htmlFor="sintomas"  className="block text-gray-700 uppercase font-bold">Síntomas</label>
              <textarea
                id="sintomas"
                placeholder="Describe los síntomas"
                className="border-4 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={sintomas}
                onChange={ (e)=> setSintomas(e.target.value) }
              />
          </div>
          <input 
            type="submit"
            value="Agregar paciente"
            className="bg-amber-800 w-full p-3 text-white uppercase font-bold rounded-md cursor-pointer transition-all hover:bg-amber-900 "
          />
        </form>
    </div>
  )
}

export default Formulario
