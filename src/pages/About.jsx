import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx"; // <- adjust path if yours differs
import "../style.css";

export default function About() {
  // Ensure page starts at top and mobile address bar doesn't hide content
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      {/* Global header with mobile nav toggle */}
      <Header />

      {/* Main content (keeps clear of fixed header via CSS var --header-h) */}
      <main className="about-section">
        <div className="container">
          <h2 className="text-center">
            Our Manufacturing Journey: From Concept to Closet
          </h2>
          <p className="text-center intro-text">
            At SOHAM PRODUCTIONS, every garment embodies our commitment to
            craftsmanship, sustainability, and style.
          </p>

          <div className="journey-grid">
            {/* Step 1 */}
            <div className="journey-card">
              <h3>1. Raw Material Sourcing & Selection</h3>
              <p>
                The foundation of any exceptional garment lies in its materials.
                We prioritize sustainable practices and ethical suppliers.
              </p>
              <ul>
                <li>Fabric Research: Identify trends and functional requirements</li>
                <li>Supplier Vetting: Evaluate ethical practices and quality standards</li>
                <li>Material Selection: Choose fabrics, threads, embellishments</li>
                <li>Quality Check: Inspect samples for flaws and consistency</li>
              </ul>
              <div className="step-image">
                <img src="/images/factory01.jpg" alt="Raw Material Sourcing" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="journey-card">
              <h3>2. Design & Pattern Making</h3>
              <p>
                Our talented design team conceptualizes collections and creates
                precise patterns for each garment.
              </p>
              <ul>
                <li>Concept & Sketching → Initial ideas</li>
                <li>Technical Drawing → Detailed specs & measurements</li>
                <li>Pattern Creation → Master patterns for each size</li>
                <li>Sample Cutting → First cuts of fabric</li>
              </ul>
              <div className="step-image">
                <img src="/images/factory02.jpg" alt="Pattern Making" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="journey-card">
              <h3>3. Prototyping & Sample Development</h3>
              <p>
                We create initial prototypes, refine fit and design, and finalize
                production-ready samples.
              </p>
              <ul>
                <li>Sample Stitching → First physical garment</li>
                <li>Fit & Quality Review → On-model inspection</li>
                <li>Pattern Adjustment → Based on feedback</li>
                <li>Final Sample Approval → Ready for production</li>
              </ul>
              <div className="step-image">
                <img src="/images/factory03.jpg" alt="Sample Development" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="journey-card">
              <h3>4. Fabric Cutting</h3>
              <p>
                Precision cutting ensures minimal waste and consistent sizing across
                garments.
              </p>
              <ul>
                <li>Fabric Spreading → Layers stacked evenly</li>
                <li>Pattern Laying → Optimized for minimal waste</li>
                <li>Cutting → Automated/manual</li>
                <li>Bundling → Pieces grouped</li>
              </ul>
              <div className="step-image">
                <img src="/images/factory04.jpg" alt="Fabric Cutting" />
              </div>
            </div>

            {/* Step 5 */}
            <div className="journey-card">
              <h3>5. Stitching & Assembly</h3>
              <p>
                Our skilled machinists bring each garment to life with precision
                stitching and assembly.
              </p>
              <ul>
                <li>Component Stitching → Pockets, collars, cuffs</li>
                <li>Garment Assembly → Joining pieces</li>
                <li>Specialized Ops → Buttonholes, embroidery</li>
                <li>In-line QC → Inspections at each stage</li>
              </ul>
              <div className="step-image">
                <img src="/images/factory05.jpg" alt="Stitching" />
              </div>
            </div>

            {/* Step 6 */}
            <div className="journey-card">
              <h3>6. Finishing & Quality Control</h3>
              <p>
                Every garment is trimmed, pressed, labeled, and inspected thoroughly
                before approval.
              </p>
              <ul>
                <li>Thread Trimming → Loose threads removed</li>
                <li>Pressing & Steaming → Shaping garments</li>
                <li>Labeling & Tagging → Brand & care labels</li>
                <li>Final Quality Inspection → Defect-free garments</li>
              </ul>
              <div className="step-image">
                <img src="/images/factory06.jpg" alt="Quality Control" />
              </div>
            </div>

            {/* Step 7 */}
            <div className="journey-card">
              <h3>7. Packaging & Dispatch</h3>
              <p>
                Finished garments are packaged sustainably and dispatched to customers
                worldwide.
              </p>
              <ul>
                <li>Folding → Uniform packaging</li>
                <li>Individual Packing → Each item bagged</li>
                <li>Carton Packing → Grouped into cartons</li>
                <li>Dispatch → Sent to customers & partners</li>
              </ul>
              <div className="step-image">
                <img src="/images/factory01.jpg" alt="Packaging" />
              </div>
            </div>
          </div>

          {/* Helpful internal links (use Router Links; great on mobile) */}
          <div className="text-center" style={{ marginTop: "32px" }}>
            <Link to="/product" className="btn btn--primary" style={{ marginRight: 12 }}>
              Explore Products
            </Link>
            <Link to="/#contact" className="btn btn--secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <p>© 2025 Soham Production. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
