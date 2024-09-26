import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

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

const Authors = ({ authors }) => {
  return (
    <>
      <div className="row justify-center">
        {authors.map((author, i) => (
          <div className="col-12 mb-8 sm:col-6 md:col-4" key={`key-${i}`}>
            <div className="text-center">
              {author.frontmatter.image && (
                <div className="mb-4">
                  <Image
                    src={author.frontmatter.image}
                    alt={author.frontmatter.title}
                    height={200}
                    width={200}
                    className="rounded-lg inline-block"
                  />
                </div>
              )}
              <h2 className="h4 mb-2">
                <Link
                  href={`/authors/${author.slug}`}
                  className="block hover:text-primary"
                >
                  {author.frontmatter.title}
                </Link>
              </h2>
              {author.frontmatter.description && (
                <p className="text-center">{author.frontmatter.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <NewsletterCTA />
    </>
  );
};

export default Authors;