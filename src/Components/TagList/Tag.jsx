import './index.scss'

export default ({item})=>{
    return(
        <div className='tag-container'>
        <div className='tag'>
       <img className='tag-img' src={item.IconUrl} />
       <p className='tag-name'>{item.Name} </p>
        </div>
    </div>
    )
}