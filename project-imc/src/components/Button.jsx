import '../assets/Button.css'

const Button = ({ id, content, action }) => {
  const handleAction = (e) => {
    if(action){
      action(e);
    }
  }

  return <button className={id} onClick={handleAction}>{content}</button>
}

export default Button