import styles from './styles.module.css'

type Props = {
  active: boolean,
  label: string,
  onClick: () => void,
}

const Chip = ({active, label, onClick}: Props) => {
  return (
    <button
      className={`${styles.button} ${active && styles.active}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Chip;