import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>What&apos;s In The Tank?</h1>
      <img src="/images/headerwave.svg" alt="" className={styles.header__wave} />
    </header>
  )
}