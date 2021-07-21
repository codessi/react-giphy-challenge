const Error = (props) => {
  if(!props.isError) {
    return null
  }

  return(
    <p className='error'> {props.text}</p>
  )
  // return(<div>hello World</div>)
}

export default Error