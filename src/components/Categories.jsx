import { Link } from 'react-router-dom'

const cats = [
  { id:'lycra-harem', img:'images/heram01.jpeg', name:'Lycra Harem Pants' },
  { id:'harem', img:'images/heram03.jpeg', name:'Harem Pants' },
  { id:'trackpant', img:'images/track01.jpeg', name:'Track Pants' },
  { id:'lycra-plazo', img:'images/plazo01.jpeg', name:'Lycra Plazo' },
  { id:'dhoti', img:'images/dhoti01.jpeg', name:'Dhoti Pants' },
  { id:'mens-tshirt', img:'images/men01.jpeg', name:'Men’s T-Shirt' },
  { id:'poly-tshirt', img:'images/poly01.jpeg', name:'Polyester T-Shirt' },
  { id:'kids-tshirt', img:'images/kids01.jpeg', name:'Kids T-Shirt' },
  { id:'mens-trouser', img:'images/men02.jpeg', name:'Men’s Trouser Track' },
  { id:'lycra-tshirt', img:'images/polyW01.jpeg', name:'Lycra T-Shirt' },
  { id:'lycra-lower', img:'images/trackpants01.jpeg', name:'Lycra Lower' },
]

export default function Categories() {
  return (
    <section className="categories" id="products">
      <div className="container">
        <h2 className="text-center">Our Product Categories</h2>
        <p className="text-center">Explore our wide range of garments crafted with comfort and style.</p>
        <div className="category-grid">
          {cats.map(c => (
            <Link key={c.id} to={`/product?category=${c.id}`} className="category-card">
              <img src={c.img} alt={c.name} loading="lazy" />
              <h3>{c.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
