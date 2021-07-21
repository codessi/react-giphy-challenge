const TextList = (props) => {
  const items = props.gifs.map((itemData) => {
    return <Item url = {itemData.url} />
  })
  return (
    <div className = 'text-container'>
      {items}
    </div>
  )
}

const Item = (props) => {
  return(
    <div key={props.id} className='gif-item'>
      <img alt= '' src={props.url} />
    </div>
  )
}

export default TextList