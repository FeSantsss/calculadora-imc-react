import '../assets/Button.css'

const Button = ({ id, content }) => {
  return <button className={id}>{content}</button>
}

export default Button