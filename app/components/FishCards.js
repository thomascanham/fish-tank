import styles from './FishCards.module.css';
import { getFish } from '../lib/data';

export default async function FishCards() {
  const fish = await getFish();

  // Handle if there is no fish to display
  if (!fish || fish.length === 0) return (
    <section className={styles.fish}>
      <h3 className={styles.noFish}>There are no fish :(</h3>
    </section>
  )

  return (
    <section className={styles.fish}>
      {fish.map((fish) => <FishCard key={fish.id} fish={fish} />)}
    </section>
  )
}

function FishCard({ fish }) {
  console.log('PASSED IN FISH', fish);
  const imageUrl = `${process.env.DATABASE}/api/files/${fish.collectionName}/${fish.id}/${fish.image}`;
  const bg = fish.image ? { backgroundImage: `url("${imageUrl}")` } : null;

  return (
    <div className={styles.card} >
      <div className={styles.card__image} style={bg} />
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{fish.name}</h3>
        <p className={styles.card__subtitle}>{fish.scientificName}</p>
        <p className={styles.card__bio}>{fish.bio}</p>
      </div>
    </div >
  )
}