
import './style.css'


interface ButtonProps {
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    text?: string; // Propriedade opcional para o texto do botão
  }
  
  const Button: React.FC<ButtonProps> = ({ onClick, variant = 'primary', text }) => {
    return (
      <button className={`button ${variant}`} onClick={onClick}>
        {text}
      </button>
    );
  };

export default Button