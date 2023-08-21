const Error = ({mensaje}) => {
  return (
    <div className="bg-red-700 rounded-md">
        <p className="text-center  p-2 mb-10 font-bold uppercase text-white text-xl">{mensaje}</p>
    </div> 
  )
}

export default Error
