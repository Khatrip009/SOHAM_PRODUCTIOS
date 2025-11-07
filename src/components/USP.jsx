export default function USP() {
  const items = [
    { icon: 'fa-award', title: 'Quality Assured Products', text: 'Every garment undergoes rigorous testing to maintain international standards of quality and durability.' },
    { icon: 'fa-briefcase', title: 'Vast Domain Expertise', text: 'Over a decade of experience in garment manufacturing with a deep understanding of fabrics and trends.' },
    { icon: 'fa-users-cog', title: 'Deft Team of Professionals', text: 'Skilled designers, tailors, and logistics experts working together to ensure excellence.' },
    { icon: 'fa-user-check', title: 'Customer-Centric Approach', text: 'Building long-term relationships by tailoring services to client requirements.' },
    { icon: 'fa-pencil-ruler', title: 'Customized Solutions', text: 'Bespoke garment solutions, from fabric selection to fit and finishing.' },
    { icon: 'fa-tags', title: 'Reasonable Pricing', text: 'Premium quality apparel at competitive prices.' },
    { icon: 'fa-handshake', title: 'Transparent Dealings', text: 'Fair practices and complete transparency in operations.' },
  ]
  return (
    <section className="usp-section" id="whyus">
      <div className="container text-center">
        <h2>Why Us?</h2>
        <p className="usp-intro">
          With the constant support of our deft professionals, we are able to provide a qualitative grade of products to our clients.
          Some other key factors that help us ensure maximum client satisfaction are enlisted below:
        </p>
        <div className="usp-grid">
          {items.map((it, i) => (
            <div className="usp-card fade-in" key={it.title} style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="usp-icon"><i className={`fas ${it.icon}`}></i></div>
              <h3 className="usp-title">{it.title}</h3>
              <p className="usp-text">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
