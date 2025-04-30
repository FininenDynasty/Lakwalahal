const translations = {
  en: {
    welcome: "Welcome to The Lakwalahal Foundation",
    subtitle: "No one forgotten. Everyone protected.",
    newsletterTitle: "Join Our Sacred Circle",
    newsletterDesc: "Sign up to receive updates, blessings, and community calls to action.",
    submit: "Subscribe"
  },
  es: {
    welcome: "Bienvenido a La Fundación Lakwalahal",
    subtitle: "Nadie olvidado. Todos protegidos.",
    newsletterTitle: "Únete a Nuestro Círculo Sagrado",
    newsletterDesc: "Recibe actualizaciones, bendiciones y llamados a la acción comunitaria.",
    submit: "Suscribirse"
  },
  fr: {
    welcome: "Bienvenue à la Fondation Lakwalahal",
    subtitle: "Personne oublié. Tout le monde protégé.",
    newsletterTitle: "Rejoignez notre Cercle Sacré",
    newsletterDesc: "Inscrivez-vous pour recevoir des mises à jour, des bénédictions et des appels à l'action.",
    submit: "S'abonner"
  },
  de: {
    welcome: "Willkommen bei der Lakwalahal-Stiftung",
    subtitle: "Niemand vergessen. Alle geschützt.",
    newsletterTitle: "Treten Sie unserem Heiligen Kreis bei",
    newsletterDesc: "Melden Sie sich an, um Updates, Segnungen und Aufrufe zum Handeln zu erhalten.",
    submit: "Abonnieren"
  },
  pt: {
    welcome: "Bem-vindo à Fundação Lakwalahal",
    subtitle: "Ninguém esquecido. Todos protegidos.",
    newsletterTitle: "Junte-se ao Nosso Círculo Sagrado",
    newsletterDesc: "Cadastre-se para receber atualizações, bênçãos e chamados à ação.",
    submit: "Inscrever-se"
  },
  ht: {
    welcome: "Byenveni nan Fondasyon Lakwalahal",
    subtitle: "Pèsonn pa bliye. Tout moun pwoteje.",
    newsletterTitle: "Antre nan Sèk Sakre Nou an",
    newsletterDesc: "Enskri pou resevwa mizajou, benediksyon ak apèl pou aksyon kominotè.",
    submit: "Abònman"
  },
  it: {
    welcome: "Benvenuto alla Fondazione Lakwalahal",
    subtitle: "Nessuno dimenticato. Tutti protetti.",
    newsletterTitle: "Unisciti al Nostro Cerchio Sacro",
    newsletterDesc: "Iscriviti per ricevere aggiornamenti, benedizioni e inviti all'azione.",
    submit: "Iscriviti"
  },
  zh: {
    welcome: "欢迎来到拉克瓦拉哈尔基金会",
    subtitle: "没有人被遗忘。每个人都受到保护。",
    newsletterTitle: "加入我们的神圣圈子",
    newsletterDesc: "注册以接收更新、祝福和社区行动呼吁。",
    submit: "订阅"
  },
  len: {
    welcome: "Wënchi kishuxkü Lakwalahal Fundatión",
    subtitle: "Kèkuwën nà nàxkwi. Wënchi kishuxkü wëluchëm.",
    newsletterTitle: "Wëluni në Kichëwën Witàkën",
    newsletterDesc: "Lèni uxwëlëni ènta epëli, wënchi kishuxkü ntëluxën witàkën.",
    submit: "Pelektàmë"
  }
};

function updateLanguage(lang) {
  const t = translations[lang] || translations.en;
  document.getElementById("main-title").innerHTML = t.welcome;
  document.getElementById("main-desc").innerHTML = t.subtitle;
  const title = document.getElementById("newsletter-title");
  const desc = document.getElementById("newsletter-desc");
  const submit = document.querySelector("form button");
  if (title && desc && submit) {
    title.innerHTML = t.newsletterTitle;
    desc.innerHTML = t.newsletterDesc;
    submit.innerText = t.submit;
  }
}