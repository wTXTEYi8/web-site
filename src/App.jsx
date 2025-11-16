import buttonStyles from './Button.module.css';

function MyButton() {
  return (
    <button className={`${buttonStyles.shape} ${buttonStyles.color}`}>
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
