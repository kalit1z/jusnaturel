import config from "@config/config";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container max-w-[700px]">
        {markdownify(title, "h1", "h2 mb-8 text-center")}
        <form
          className="contact-form mb-10"
          method="POST"
          action={contact_form_action}
        >
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="name">
              Nom
            </label>
            <input
              className="form-input w-full"
              name="name"
              type="text"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="email">
              Email
            </label>
            <input
              className="form-input w-full"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="subject">
              Sujet
            </label>
            <input
              className="form-input w-full"
              name="subject"
              type="text"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="message">
              Message
            </label>
            <textarea className="form-textarea w-full" rows="7" />
          </div>
          <button className="btn btn-outline-primary">Envoyer</button>
        </form>

        <div className="mt-10 text-center">
  <h1 className="text-3xl font-bold mb-4">Contactez l'Équipe Jus Naturel</h1>
  <p className="text-xl mb-6">Nous adorons échanger avec notre communauté de passionnés de jus frais !</p>
  <p className="mb-4">Pour toute question, suggestion ou simplement pour partager votre expérience, n'hésitez pas à nous contacter :</p>
  <p className="text-2xl font-bold text-green-600">contact@jusnaturel.fr</p>
  <p className="mt-6">Nous vous répondrons avec plaisir dans les plus brefs délais.</p>
</div>

<div className="mt-16">
  <h2 className="text-2xl font-bold mb-6 text-center">Questions Fréquentes</h2>
  
  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-semibold mb-2">Q : Combien de temps puis-je conserver mon jus frais ?</h3>
      <p>R : Pour une fraîcheur optimale, nous recommandons de consommer vos jus dans les 24 à 48 heures suivant leur préparation. Conservez-les au réfrigérateur dans un contenant hermétique.</p>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold mb-2">Q : Puis-je soumettre ma propre recette de jus ?</h3>
      <p>R : Absolument ! Nous adorons découvrir de nouvelles recettes. Envoyez-nous votre création à contact@jusnaturel.fr, et elle pourrait être publiée sur notre site avec votre nom.</p>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold mb-2">Q : Quels fruits et légumes sont les meilleurs pour débuter ?</h3>
      <p>R : Les pommes, carottes, concombres et épinards sont excellents pour commencer. Ils sont faciles à mixer et riches en nutriments. N'hésitez pas à nous contacter pour des conseils personnalisés !</p>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold mb-2">Q : Proposez-vous des ateliers ou des événements autour des jus ?</h3>
      <p>R : Oui, nous organisons régulièrement des ateliers en ligne et en présentiel. Suivez-nous sur les réseaux sociaux ou inscrivez-vous à notre newsletter pour être informé des prochaines dates.</p>
    </div>
  </div>
  
  <p className="mt-10 text-center text-lg">Vous avez une autre question ? N'hésitez pas à nous contacter, nous serons ravis d'y répondre !</p>
</div>
      </div>
    </section>
  );
};

export default Contact;