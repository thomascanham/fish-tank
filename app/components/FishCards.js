import styles from './FishCards.module.css';

const fish = [
  {
    id: 1,
    name: 'Red Cherry Shrimp',
    scientificName: 'Neocaridina davidi',
    image: '/images/fish/cherry.jpg',
    description: 'Red Cherry Shrimp are hardy, algae-eating freshwater shrimp with bright red ...'
  },
  {
    id: 2,
    name: 'Otocinclus',
    scientificName: 'Otocinclus',
    image: '/images/fish/oto.jpg',
    description: 'Otocinclus are small, peaceful freshwater fish known for their algae-eating habits ...',
  },
  {
    id: 3,
    name: 'Betta Fish',
    scientificName: 'Betta splendens',
    image: 'https://www.thesprucepets.com/thmb/0ZD3Z4UvE7V1qXfCqoH2Ft5C6Ko=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp/betta-fish-5663d1e05f9b583dc3c481f8.jpg',
    description: 'The betta fish is a popular freshwater fish that is known for its vibrant colors and long flowing fins. They are also known for their aggressive behavior',
  },
  {
    id: 4,
    name: 'Betta Fish',
    scientificName: 'Betta splendens',
    image: 'https://www.thesprucepets.com/thmb/0ZD3Z4UvE7V1qXfCqoH2Ft5C6Ko=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp/betta-fish-5663d1e05f9b583dc3c481f8.jpg',
    description: 'The betta fish is a popular freshwater fish that is known for its vibrant colors and long flowing fins. They are also known for their aggressive behavior',
  },
  {
    id: 5,
    name: 'Betta Fish',
    scientificName: 'Betta splendens',
    image: 'https://www.thesprucepets.com/thmb/0ZD3Z4UvE7V1qXfCqoH2Ft5C6Ko=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp/betta-fish-5663d1e05f9b583dc3c481f8.jpg',
    description: 'The betta fish is a popular freshwater fish that is known for its vibrant colors and long flowing fins. They are also known for their aggressive behavior',
  },
  {
    id: 6,
    name: 'Betta Fish',
    scientificName: 'Betta splendens',
    image: 'https://www.thesprucepets.com/thmb/0ZD3Z4UvE7V1qXfCqoH2Ft5C6Ko=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp/betta-fish-5663d1e05f9b583dc3c481f8.jpg',
    description: 'The betta fish is a popular freshwater fish that is known for its vibrant colors and long flowing fins. They are also known for their aggressive behavior',
  },
]

export default function FishCards() {

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
  const bg = fish.image ? {
    backgroundImage: `url("${fish.image}")`
  } : null;

  return (
    <div className={styles.card} >
      <div className={styles.card__image} style={bg} />
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{fish.name}</h3>
        <p className={styles.card__subtitle}>{fish.scientificName}</p>
        <p className={styles.card__bio}>{fish.description}</p>
      </div>
    </div >
  )
}