const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?');
   
    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md p-10 rounded-xl md:mx-auto">
        <p className="font-bold mb-5 text-gray-700 uppercase block leading-7">
        Nombre:
        <br/>
        <span className="font-normal normal-case text-black">{nombre}</span>
        </p>
        <p className="font-bold mb-5 text-gray-700 uppercase leading-7">
        Propietario:
        <br/>
        <span className="font-normal normal-case text-black">{propietario}</span>
        </p>
        <p className="font-bold mb-5 text-gray-700 uppercase leading-7">
        Email:
        <br/>
        <span className="font-normal normal-case text-black">{email}</span>
        </p>
        <p className="font-bold mb-5 text-gray-700 uppercase leading-7">
        Fecha Alta:
        <br/>
        <span className="font-normal normal-case text-black">{fecha}</span>
        </p>
        <p className="font-bold mb-5 text-gray-700 uppercase leading-7">
        Sintomas:
        <br/>
        <span className="font-normal normal-case text-black">{sintomas}</span>
        </p>
        <div className="flex justify-between">
          <button
            type="button"
            className="py-2 px-10 font-bold uppercase bg-amber-800 text-white rounded-md hover:bg-amber-700"
            onClick={() => setPaciente(id)}
          >
            Editar
          </button>
          <button
            type="button"
            className="py-2 px-10 font-bold uppercase bg-red-800 text-white rounded-md hover:bg-red-700"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
    </div>
    )
}

export default Paciente
