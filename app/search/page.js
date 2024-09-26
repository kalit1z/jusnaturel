import SearchResults from "@layouts/partials/SearchResults";
import { getSinglePage } from "@lib/contentParser";
import { Suspense } from "react";
import SeoMeta from "@layouts/partials/SeoMeta";

const SearchPage = async () => {
  const authors = await getSinglePage("content/authors");

  // Définition statique des métadonnées SEO
  const pageTitle = "Recherche de Recettes | Jus Naturel";
  const metaTitle = "Recettes de Jus Naturels Maison - Fruits et Légumes Frais | JusNaturel.fr";
  const metaDescription = "Découvrez nos recettes de jus naturels faciles à préparer. Explorez des combinaisons de fruits et légumes frais pour des jus délicieux et pleins de vitalité. Créez vos jus maison avec JusNaturel.fr.";

  return (
    <>
      <SeoMeta 
        title={pageTitle}
        meta_title={metaTitle}
        description={metaDescription}
        noindex={true}
      />
      <div className="section">
        <div className="container">
          <Suspense
            fallback={
              <h1 className="h2 mb-8 text-center">
                Recherche <span className="text-primary">...</span>
              </h1>
            }
          >
            <SearchResults authors={authors} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SearchPage;