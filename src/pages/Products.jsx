import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductModal from "../components/ProductModal.jsx";

// --- helpers ---
const slugify = (s = "") =>
  s
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const keyOf = (prefix, obj, idx) => {
  const strong = obj?.id || obj?._id || obj?.sku || obj?.code;
  const name = obj?.title || obj?.name || obj?.label || obj?.slug || "";
  // ALWAYS include idx to guarantee uniqueness even when IDs repeat
  if (strong) return `${prefix}-${strong}-${idx}`;
  return `${prefix}-${slugify(name)}-${idx}`;
};

export default function Products() {
  const [data, setData] = useState(null);
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // read ?category=<id> from URL
  const selectedCategory = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("category");
  }, [location.search]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/products.json", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load products.json");
        const j = await res.json();
        const categories = Array.isArray(j?.categories) ? j.categories : [];
        setData({ categories });
      } catch (err) {
        console.error(err);
        setData({ categories: [] });
      }
    })();
  }, []);

  // filter categories if ?category= provided (keeps duplicates if they share the same id)
  const categories = useMemo(() => {
    if (!data?.categories) return [];
    return selectedCategory
      ? data.categories.filter((c) => String(c.id) === String(selectedCategory))
      : data.categories;
  }, [data, selectedCategory]);

  return (
    <main style={{ paddingTop: "calc(var(--header-h, 80px) + 16px)" }}>
      <div className="container">
        {categories.map((cat, catIndex) => {
          // Unique React key
          const catKey = keyOf("cat", cat, catIndex);

          // Unique DOM id (so anchors don’t collide even if category id repeats)
          const baseAnchor = cat?.id || cat?.name || `category-${catIndex}`;
          const sectionAnchor = `${slugify(baseAnchor)}-${catIndex}`;

          const products = Array.isArray(cat?.products) ? cat.products : [];

          return (
            <section className="product-category" id={sectionAnchor} key={catKey}>
              <h2>{cat?.name || "Category"}</h2>

              <div className="category-grid">
                {products.map((p, prodIndex) => {
                  const prodKey = keyOf(`prod-${sectionAnchor}`, p, prodIndex);
                  const first =
                    (Array.isArray(p?.images) && p.images[0]) ||
                    "images/placeholder.jpg";

                  return (
                    <article
                      key={prodKey}
                      className="product-card"
                      onClick={() => {
                        setActive(p);
                        setOpen(true);
                      }}
                    >
                      <div className="main-image-wrap">
                        <img
                          src={first}
                          alt={p?.name || "Product image"}
                          className="main-image"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = "images/placeholder.jpg";
                          }}
                        />
                      </div>

                      <div className="details">
                        <h3>{p?.name || "Unnamed Product"}</h3>
                        <p>
                          <strong>Price:</strong>{" "}
                          {p?.price ?? p?.priceRange ?? "-"}
                        </p>
                        <p>
                          <strong>MOQ:</strong> {p?.moq ?? "-"}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}

        {!categories.length && <p>No products found.</p>}
      </div>

      <ProductModal open={open} product={active} onClose={() => setOpen(false)} />
    </main>
  );
}
