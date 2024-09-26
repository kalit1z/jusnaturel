import config from "@config/config.json";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import { slugify } from "@lib/utils/textConverter";
import Posts from "@partials/Posts";
const { blog_folder } = config.settings;

// Mapping pour les accents et les corrections orthographiques
const tagMapping = {
  "accent": "laccent",
  // Ajoutez d'autres mots selon vos besoins
};

// Fonction pour formater le nom du tag
const formatTagName = (tag) => {
  return tag
    .split('-')
    .map(word => tagMapping[word] || word)
    .map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
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

// tag page
const Tag = ({ params }) => {
  const tag = formatTagName(params.tag);
  const posts = getSinglePage(`content/${blog_folder}`);
  const filterPosts = posts.filter((post) =>
    post.frontmatter.tags.find((t) => slugify(t).includes(params.tag))
  );
  const authors = getSinglePage("content/authors");

  return (
    <>
      <SeoMeta 
        title={`Tag: ${tag}`}
        noindex={true}
        nofollow={true}
      />
      <div className="section">
        <div className="container">
          <h1 className="h2 mb-8 text-center">
            Publications filtrées sous le tag<br />
            <span className="text-primary">'{tag}'</span>
          </h1>
          <Posts posts={filterPosts} authors={authors} />
          <NewsletterCTA />
        </div>
      </div>
    </>
  );
};

export default Tag;

// tag page routes
export const generateStaticParams = () => {
  const allTags = getTaxonomy(`content/${blog_folder}`, "tags");

  const paths = allTags.map((tag) => ({
    tag: tag,
  }));

  return paths;
};