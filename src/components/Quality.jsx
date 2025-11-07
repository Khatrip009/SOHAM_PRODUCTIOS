export default function Quality() {
  return (
    <section id="quality" className="quality-section">
      <div className="container quality-content">
        <div className="quality-text">
          <h2>Our Commitment to Quality</h2>
          <p>Soham Productions stands as a trusted name in the textile industry, renowned as a leading manufacturer and supplier of premium garments.</p>
          <p>We combine exquisite craftsmanship with innovative design, creating garments that are both stylish and durable.</p>
          <div className="quality-stats fade-up">
            <div className="stat-card">
              <div className="stat-value" data-target="50000000">5 Cr+</div>
              <div className="stat-label">Annual Turnover</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" data-target="10">10+</div>
              <div className="stat-label">Dedicated Team</div>
            </div>
          </div>
          <table className="hsn-table" aria-label="HSN Codes">
            <thead><tr><th>HSN Code</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>69204619</td><td>Women's or girls suits, ensembles, jackets, dresses, skirts...</td></tr>
              <tr><td>62081910</td><td>Women's or girls singlets and other vests, slips, petticoats...</td></tr>
              <tr><td>62082200</td><td>Women's or girls singlets and other vests of man-made fibres</td></tr>
            </tbody>
          </table>
        </div>
        <div className="quality-image">
          <img src="images/soham_cloth.jpg" alt="Soham Quality Fabrics" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
    