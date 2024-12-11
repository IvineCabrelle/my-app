import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1>Politique de confidentialité</h1>
      <p>Dernière mise à jour : 19 novembre 2024</p>

      <section style={styles.section}>
        <h2>1. Collecte de données personnelles</h2>
        <p>Nous collectons les informations suivantes lorsque vous vous inscrivez sur notre site, vous vous connectez à votre compte, ou interagissez avec nos services :</p>
        <ul>
          <li><strong>Informations d'identification :</strong> Nom, prénom, adresse e-mail, numéro de téléphone.</li>
          <li><strong>Informations médicales :</strong> Ces informations sont collectées uniquement pour la gestion de vos soins de santé ou pour fournir des services médicaux et sont protégées par des normes de sécurité strictes.</li>
          <li><strong>Informations de connexion :</strong> Adresse IP, type de navigateur, pages visitées sur notre site.</li>
          <li><strong>Cookies :</strong> Nous utilisons des cookies pour améliorer votre expérience utilisateur et analyser l'utilisation de notre site.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>2. Utilisation des données personnelles</h2>
        <p>Nous utilisons les informations que nous collectons pour :</p>
        <ul>
          <li>Vous fournir nos services médicaux en ligne.</li>
          <li>Gérer votre compte utilisateur et vous fournir une expérience personnalisée.</li>
          <li>Améliorer la qualité de nos services et de notre site en fonction de vos préférences et comportements d'utilisation.</li>
          <li>Vous envoyer des communications relatives à votre compte, à vos soins médicaux, et à des mises à jour importantes concernant nos services.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>3. Partage des données personnelles</h2>
        <p>Nous nous engageons à ne pas vendre, louer ou échanger vos données personnelles. Toutefois, dans certains cas, nous pouvons partager vos informations avec des tiers de confiance qui nous aident à fournir nos services, sous réserve de respecter des normes de confidentialité strictes, notamment :</p>
        <ul>
          <li><strong>Prestataires de services :</strong> Pour le traitement des paiements, la gestion des données, etc.</li>
          <li><strong>Partenaires médicaux :</strong> Si vous demandez des consultations ou des soins médicaux, vos informations peuvent être partagées avec des professionnels de santé dans le cadre de votre traitement.</li>
          <li><strong>Obligations légales :</strong> Nous pouvons divulguer vos informations si la loi l'exige, notamment pour répondre à une requête judiciaire.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>4. Sécurité des données</h2>
        <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès non autorisé, toute modification, divulgation ou destruction. Cela comprend des contrôles d'accès physiques, techniques et organisationnels pour garantir la confidentialité et la sécurité des informations.</p>
      </section>

      <section style={styles.section}>
        <h2>5. Droits des utilisateurs</h2>
        <p>Conformément à la législation en vigueur, vous disposez des droits suivants concernant vos données personnelles :</p>
        <ul>
          <li><strong>Droit d'accès :</strong> Vous pouvez demander à accéder aux informations que nous détenons à votre sujet.</li>
          <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction ou la mise à jour de vos informations personnelles si elles sont inexactes ou incomplètes.</li>
          <li><strong>Droit de suppression :</strong> Vous pouvez demander la suppression de vos données personnelles, sous réserve de nos obligations légales de conservation.</li>
          <li><strong>Droit de limitation :</strong> Vous pouvez demander de limiter le traitement de vos données personnelles dans certains cas.</li>
          <li><strong>Droit d'opposition :</strong> Vous avez le droit de vous opposer au traitement de vos données dans certaines situations, notamment à des fins de marketing.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>6. Cookies</h2>
        <p>Notre site utilise des cookies pour améliorer votre expérience utilisateur. Les cookies sont de petits fichiers stockés sur votre appareil lorsque vous accédez à notre site. Ils nous permettent de vous reconnaître et de personnaliser votre expérience en fonction de vos préférences. Vous pouvez contrôler les cookies via les paramètres de votre navigateur.</p>
      </section>

      <section style={styles.section}>
        <h2>7. Conservation des données</h2>
        <p>Nous conserverons vos données personnelles aussi longtemps que nécessaire pour remplir les finalités pour lesquelles elles ont été collectées, y compris pour répondre à des obligations légales, résoudre des litiges et appliquer nos accords.</p>
      </section>

      <section style={styles.section}>
        <h2>8. Modifications de la politique de confidentialité</h2>
        <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute mise à jour sera publiée sur cette page et, si nécessaire, vous serez informé par e-mail. Nous vous encourageons à consulter régulièrement cette politique pour rester informé des éventuelles modifications.</p>
      </section>

      <section style={styles.section}>
        <h2>9. Contact</h2>
        <p>Si vous avez des questions concernant cette politique de confidentialité ou si vous souhaitez exercer vos droits, vous pouvez nous contacter à l'adresse suivante :</p>
        <ul>
          <li><strong>Email :</strong> <a href="mailto:privacy@medcare.com">privacy@medcare.com</a></li>
          <li><strong>Adresse :</strong> MedCare, 123 Rue de la Santé, 75000 Hochelaga, Montréal</li>
        </ul>
      </section>

    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#fff',
    maxWidth: '800px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '20px',
  },
};

export default PrivacyPolicy;
