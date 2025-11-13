import styles from './Button.module.css';

function MyButton() {
  return (
    <button className={`${styles.buttonShape} ${styles.buttonColor}`}>
      ボタン
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>ようこそ</h1>
      <MyButton />
    </div>
  );
}

