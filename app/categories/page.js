import config from "@config/config.json";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getTaxonomy } from "@lib/taxonomyParser";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
const { blog_folder } = config.settings;

// Fonction pour formater le nom de la catégorie
const formatCategoryName = (str) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const NewsletterCTA = () => (
  <div style={{textAlign: "center", backgroundColor: "#FFEAD1", padding: "20px", marginTop: "30px 0", borderRadius: "8px"}}>
    <p style={{fontSize: "24px", color: "#333333", marginBottom: "15px"}}>
      <strong>Découvrez les secrets des jus naturels !</strong>
    </p>
    <p style={{fontSize: "16px", color: "#555555", marginBottom: "20px"}}>
      Recevez nos meilleures recettes et conseils pour une santé rayonnante directement dans votre boîte mail.
    </p>
    <a href="https://www.fastercook.fr/jus" target="_blank" rel="noopener noreferrer" style={{display: "inline-block", backgroundColor: "#4BAE53", color: "white", padding: "10px 20px", textDecoration: "none", borderRadius: "5px", fontWeight: "bold"}}>
      Je veux mes recettes gratuites
    </a>
  </div>
);

const Categories = async () => {
  const categories = await getTaxonomy(`content/${blog_folder}`, "categories");
  return (
    <>
      <SeoMeta 
        title="titre"
        description="description"
        noindex={true}
        nofollow={true}
      />
      <section className="section">
        <div className="container text-center">
          {markdownify("Explorez nos recettes", "h1", "h2 mb-16")}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {categories.map((category, i) => (
              <li key={`category-${i}`} className="mb-4">
                <Link
                  href={`/categories/${category}`}
                  className="block rounded-lg bg-theme-light px-4 py-2 text-dark transition hover:bg-primary hover:text-white"
                >
                  {formatCategoryName(category)}
                </Link>
              </li>
            ))}
          </ul>
          <NewsletterCTA />
        </div>
      </section>
    </>
  );
};

export default Categories;