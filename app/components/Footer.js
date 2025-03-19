import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h5>Fun Fact!</h5>
        <p>This app is running locally on a <a href="https://www.raspberrypi.com/">Raspberry Pi</a></p>
      </div>
    </footer>
  )
}