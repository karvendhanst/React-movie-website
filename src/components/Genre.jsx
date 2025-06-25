import genreData from './Genredata'
import Genregetdata from './Genregetdata'

const Genre = () => {

  return (
    <div className='px-5 md:px-16'>
        {genreData.map((item,index)=>(
            <div key={index} className='mt-8'>
                <h3 className='ps-3 text-white text-xl font-bold my-3 border-s-2 border-red-700'>{item.name}</h3>
                <Genregetdata id={item.id}/>
            </div>
        ))}
    </div>
  )
}

export default Genre