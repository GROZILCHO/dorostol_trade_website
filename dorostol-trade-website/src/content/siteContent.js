const socialPreviewImage = 'https://www.dorostol.trade/assets/brand/dorostol-og-preview.png'

const productAssets = [
  {
    image: '/assets/plant-project/dorostol-product-plant-protein.webp',
    imageAlt: 'Illustrative plant protein ingredient visual.',
  },
  {
    image: '/assets/plant-project/dorostol-product-protein-isolate.webp',
    imageAlt: 'Illustrative protein isolate ingredient visual.',
  },
  {
    image: '/assets/plant-project/dorostol-product-vegetable-oils.webp',
    imageAlt: 'Illustrative vegetable oil ingredient visual.',
  },
]

const addProductAssets = (products, imageAlts) =>
  products.map(([title, description], index) => ({
    title,
    description,
    ...productAssets[index],
    imageAlt: imageAlts?.[index] || productAssets[index].imageAlt,
  }))

const contactDetails = {
  office: 'office@dorostol.trade',
  person: 'Radostin Atanasov',
  personEmail: 'atanasov@dorostol.trade',
  roPhone: 'RO +40 741 130 614',
  bgPhone: 'BG +359 89 901 5671',
}

export const supportedLanguages = [
  { code: 'en', label: 'EN' },
  { code: 'ro', label: 'RO' },
  { code: 'bg', label: 'BG' },
]

export const siteContent = {
  en: {
    metadata: {
      title: 'Dorostol Trade SRL | Vegetable Protein and Oil Factory',
      description:
        'Dorostol Trade SRL presents the planned Vegetable Protein and Oil Factory in Ialomita Romania.',
      locale: 'en_US',
      url: 'https://www.dorostol.trade/',
      image: socialPreviewImage,
    },
    ui: {
      primaryNavigation: 'Primary navigation',
      languageSwitcher: 'Language selection',
      openNavigation: 'Open navigation',
      closeNavigation: 'Close navigation',
    },
    navigation: [
      { name: 'Overview', href: '#overview' },
      { name: 'Market', href: '#market' },
      { name: 'Location', href: '#location' },
      { name: 'Products', href: '#products' },
      { name: 'Capacity', href: '#capacity' },
      { name: 'Sustainability', href: '#sustainability' },
      { name: 'Contact', href: '#contact' },
    ],
    ctas: {
      contact: 'Contact Dorostol Trade',
      partnership: 'Discuss Partnership Opportunities',
    },
    hero: {
      eyebrow: 'Vegetable Protein and Oil Factory',
      title: 'Vegetable Proteins, Protein Isolate and Oils',
      description:
        'A planned extraction and processing factory in Ialomita Romania, focused on soybean, sunflower, and rapeseed.',
      focusLabel: 'Project focus',
      rawMaterials: 'Soybean, sunflower, rapeseed',
      note: 'Project presentation for partners and investors',
      facts: [
        ['43.9M EUR', 'Reported project budget'],
        ['35,500 MT', 'Year 5 target output'],
        ['Ialomita', 'Romania'],
      ],
    },
    overview: {
      eyebrow: 'Project overview',
      title: 'A planned industrial project rooted in regional agriculture',
      description:
        'Dorostol Trade SRL was established in Romania in 2013 and is part of a family-owned group with more than 30 years of activities across agricultural and food-processing sectors.',
      detail:
        'The planned plant is focused on extracting and processing vegetable proteins, protein isolate, and vegetable oils from locally relevant crops.',
      stats: [
        ['2013', 'Established in Romania'],
        ['April 2025', 'Investment agreement'],
        ['EUR 43.9M', 'Reported project budget'],
      ],
    },
    market: {
      eyebrow: 'Market opportunity',
      title: 'Plant-based ingredients for evolving industrial demand',
      description:
        'The project is positioned around agricultural raw materials and plant-based ingredients for food and industrial value chains.',
      cards: [
        ['Agricultural base', 'Soybean, sunflower, and rapeseed are central to the planned production model.'],
        ['Processing focus', 'The project aims to convert regional crops into higher-value plant-based ingredients.'],
        ['European context', 'The Romanian location provides access to EU markets and established logistics routes.'],
        ['Partnership pathway', 'The project presentation supports discussions with potential partners and investors.'],
      ],
    },
    location: {
      eyebrow: 'Plant location',
      title: 'Ialomita Romania',
      description:
        'The planned site is in Ialomita Romania, with proximity to agricultural zones and access to Constanta port.',
      imageAlt: 'Illustrative map showing Andrasesti, Bucharest and Constanta Port in Romania.',
      cards: [
        ['Agricultural zones', 'Positioned near relevant crop-growing regions.'],
        ['Constanta port', 'Access to an important Black Sea logistics gateway.'],
        ['EU market access', 'Located in Romania, within the European Union.'],
        ['Local availability', 'Designed around regional raw-material sourcing.'],
      ],
    },
    products: {
      eyebrow: 'Products',
      title: 'A focused plant-based product portfolio',
      description:
        'The planned output combines protein ingredients and vegetable oils derived from soybean, sunflower, and rapeseed.',
      cards: addProductAssets([
        ['Plant proteins', 'Planned protein ingredients for food and industrial applications.'],
        ['Protein isolate', 'A focused isolate product within the planned processing portfolio.'],
        ['Vegetable oils', 'Oils extracted from soybean, sunflower, and rapeseed raw materials.'],
      ]),
    },
    capacity: {
      eyebrow: 'Capacity and operations',
      title: 'Year 5 production targets',
      description:
        'The figures below are planned annual targets for Year 5. They do not represent current production.',
      targetLabel: 'Year 5 target',
      targets: [
        ['35,500 MT', 'Final product annually'],
        ['27,500 MT', 'Plant protein annually'],
        ['8,000 MT', 'Vegetable oils annually'],
      ],
      processEyebrow: 'Technology and processing focus',
      processTitle: 'From regional crops to plant-based ingredients',
      processDescription:
        'The project is planned around extraction and processing activities for soybean, sunflower, and rapeseed.',
      processPoints: [
        'Raw-material intake from relevant agricultural sources',
        'Extraction and processing focused on vegetable proteins and oils',
        'Planned production of protein isolate within the product portfolio',
      ],
    },
    sustainability: {
      eyebrow: 'Sustainability and impact',
      title: 'A project aligned with resource-conscious processing',
      description:
        'The planned plant aims to support plant-based ingredient production, regional agricultural value chains, and the use of agricultural by-products where applicable.',
      points: [
        'Plant-based protein production as an alternative ingredient pathway',
        'Potential use of agricultural by-products within processing value chains',
        'Support for European and local farming communities',
      ],
    },
    partnership: {
      eyebrow: 'Partnership opportunities',
      title: 'Discuss the Vegetable Protein and Oil Factory',
      description:
        'Dorostol Trade SRL welcomes conversations with commercial partners, investors, financing stakeholders, suppliers, buyers, and strategic partners interested in the factory project.',
    },
    contact: {
      eyebrow: 'Investor and partner contact',
      title: 'Discuss the Vegetable Protein and Oil Factory',
      description:
        'For project information, partnership discussions, or investor enquiries, contact Dorostol Trade SRL directly.',
      details: {
        generalEmail: 'General email',
        directContact: 'Direct contact',
        romania: 'Romania',
        bulgaria: 'Bulgaria',
      },
      ...contactDetails,
    },
    footer: {
      description:
        'The planned Vegetable Protein and Oil Factory in Ialomita Romania focuses on vegetable proteins, protein isolate, and vegetable oils from soybean, sunflower, and rapeseed.',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
  },
  ro: {
    metadata: {
      title: 'Dorostol Trade SRL | Vegetable Protein and Oil Factory',
      description:
        'Dorostol Trade SRL prezintă fabrica planificată Vegetable Protein and Oil Factory în Ialomita Romania.',
      locale: 'ro_RO',
      url: 'https://www.dorostol.trade/ro/',
      image: socialPreviewImage,
    },
    ui: {
      primaryNavigation: 'Navigare principală',
      languageSwitcher: 'Selectarea limbii',
      openNavigation: 'Deschide navigarea',
      closeNavigation: 'Închide navigarea',
    },
    navigation: [
      { name: 'Prezentare', href: '#overview' },
      { name: 'Piață', href: '#market' },
      { name: 'Locație', href: '#location' },
      { name: 'Produse', href: '#products' },
      { name: 'Capacitate', href: '#capacity' },
      { name: 'Sustenabilitate', href: '#sustainability' },
      { name: 'Contact', href: '#contact' },
    ],
    ctas: {
      contact: 'Contactați Dorostol Trade',
      partnership: 'Discutați oportunități de parteneriat',
    },
    hero: {
      eyebrow: 'Vegetable Protein and Oil Factory',
      title: 'Proteine vegetale, izolat proteic și uleiuri',
      description:
        'O fabrică planificată de extracție și procesare în Ialomita Romania, axată pe soia, floarea-soarelui și rapiță.',
      focusLabel: 'Direcția proiectului',
      rawMaterials: 'Soia, floarea-soarelui, rapiță',
      note: 'Prezentarea proiectului pentru parteneri și investitori',
      facts: [
        ['43.9M EUR', 'Buget raportat al proiectului'],
        ['35,500 MT', 'Obiectiv de producție pentru Anul 5'],
        ['Ialomita', 'Romania'],
      ],
    },
    overview: {
      eyebrow: 'Prezentarea proiectului',
      title: 'Un proiect industrial planificat, bazat pe agricultura regională',
      description:
        'Dorostol Trade SRL a fost înființată în România în 2013 și face parte dintr-un grup de familie cu peste 30 de ani de activitate în sectoarele agricol și de procesare alimentară.',
      detail:
        'Fabrica planificată este axată pe extracția și procesarea proteinelor vegetale, izolatului proteic și uleiurilor vegetale din culturi relevante la nivel local.',
      stats: [
        ['2013', 'Înființată în România'],
        ['Aprilie 2025', 'Acord de investiții'],
        ['EUR 43.9M', 'Buget raportat al proiectului'],
      ],
    },
    market: {
      eyebrow: 'Oportunitate de piață',
      title: 'Ingrediente vegetale pentru cererea industrială în evoluție',
      description:
        'Proiectul este poziționat în jurul materiilor prime agricole și al ingredientelor vegetale pentru lanțurile valorice alimentare și industriale.',
      cards: [
        ['Bază agricolă', 'Soia, floarea-soarelui și rapița sunt esențiale pentru modelul de producție planificat.'],
        ['Accent pe procesare', 'Proiectul urmărește transformarea culturilor regionale în ingrediente vegetale cu valoare adăugată.'],
        ['Context european', 'Locația din România oferă acces la piețele UE și la rute logistice consacrate.'],
        ['Direcție de parteneriat', 'Prezentarea proiectului sprijină discuțiile cu potențiali parteneri și investitori.'],
      ],
    },
    location: {
      eyebrow: 'Locația fabricii',
      title: 'Ialomita Romania',
      description:
        'Amplasamentul planificat se află în Ialomita Romania, în apropierea zonelor agricole și cu acces la portul Constanța.',
      imageAlt: 'Hartă ilustrativă cu Andrasesti, București și Portul Constanța în România.',
      cards: [
        ['Zone agricole', 'Poziționare în apropierea regiunilor relevante pentru cultivarea materiilor prime.'],
        ['Portul Constanța', 'Acces la un important punct logistic la Marea Neagră.'],
        ['Acces la piața UE', 'Locație în România, în cadrul Uniunii Europene.'],
        ['Disponibilitate locală', 'Proiectat în jurul aprovizionării regionale cu materii prime.'],
      ],
    },
    products: {
      eyebrow: 'Produse',
      title: 'Un portofoliu concentrat de produse vegetale',
      description:
        'Producția planificată combină ingrediente proteice și uleiuri vegetale obținute din soia, floarea-soarelui și rapiță.',
      cards: addProductAssets([
        ['Proteine vegetale', 'Ingrediente proteice planificate pentru aplicații alimentare și industriale.'],
        ['Izolat proteic', 'Un produs de izolat în cadrul portofoliului de procesare planificat.'],
        ['Uleiuri vegetale', 'Uleiuri extrase din materii prime precum soia, floarea-soarelui și rapiță.'],
      ], [
        'Vizual ilustrativ pentru ingrediente proteice vegetale.',
        'Vizual ilustrativ pentru izolat proteic.',
        'Vizual ilustrativ pentru ingrediente de ulei vegetal.',
      ]),
    },
    capacity: {
      eyebrow: 'Capacitate și operațiuni',
      title: 'Obiective de producție pentru Anul 5',
      description:
        'Valorile de mai jos sunt obiective anuale planificate pentru Anul 5. Acestea nu reprezintă producția curentă.',
      targetLabel: 'Obiectiv pentru Anul 5',
      targets: [
        ['35,500 MT', 'Produs final anual'],
        ['27,500 MT', 'Proteine vegetale anual'],
        ['8,000 MT', 'Uleiuri vegetale anual'],
      ],
      processEyebrow: 'Accent pe tehnologie și procesare',
      processTitle: 'De la culturi regionale la ingrediente vegetale',
      processDescription:
        'Proiectul este planificat în jurul activităților de extracție și procesare pentru soia, floarea-soarelui și rapiță.',
      processPoints: [
        'Recepția materiilor prime din surse agricole relevante',
        'Extracție și procesare axate pe proteine vegetale și uleiuri',
        'Producție planificată de izolat proteic în cadrul portofoliului',
      ],
    },
    sustainability: {
      eyebrow: 'Sustenabilitate și impact',
      title: 'Un proiect aliniat procesării responsabile a resurselor',
      description:
        'Fabrica planificată urmărește susținerea producției de ingrediente vegetale, a lanțurilor valorice agricole regionale și a utilizării subproduselor agricole, acolo unde este aplicabil.',
      points: [
        'Producția de proteine vegetale ca alternativă de ingrediente',
        'Utilizarea potențială a subproduselor agricole în lanțurile valorice de procesare',
        'Sprijinirea comunităților agricole europene și locale',
      ],
    },
    partnership: {
      eyebrow: 'Oportunități de parteneriat',
      title: 'Discutați proiectul Vegetable Protein and Oil Factory',
      description:
        'Dorostol Trade SRL este deschisă discuțiilor cu parteneri comerciali, investitori, părți interesate de finanțare, furnizori, cumpărători și parteneri strategici interesați de proiectul fabricii.',
    },
    contact: {
      eyebrow: 'Contact pentru investitori și parteneri',
      title: 'Discutați proiectul Vegetable Protein and Oil Factory',
      description:
        'Pentru informații despre proiect, discuții de parteneriat sau solicitări din partea investitorilor, contactați direct Dorostol Trade SRL.',
      details: {
        generalEmail: 'Email general',
        directContact: 'Contact direct',
        romania: 'România',
        bulgaria: 'Bulgaria',
      },
      ...contactDetails,
    },
    footer: {
      description:
        'Fabrica planificată Vegetable Protein and Oil Factory din Ialomita Romania este axată pe proteine vegetale, izolat proteic și uleiuri vegetale din soia, floarea-soarelui și rapiță.',
      contact: 'Contact',
      rights: 'Toate drepturile rezervate.',
    },
  },
  bg: {
    metadata: {
      title: 'Dorostol Trade SRL | Vegetable Protein and Oil Factory',
      description:
        'Dorostol Trade SRL представя планирания Vegetable Protein and Oil Factory в Ialomita Romania.',
      locale: 'bg_BG',
      url: 'https://www.dorostol.trade/bg/',
      image: socialPreviewImage,
    },
    ui: {
      primaryNavigation: 'Основна навигация',
      languageSwitcher: 'Избор на език',
      openNavigation: 'Отвори навигацията',
      closeNavigation: 'Затвори навигацията',
    },
    navigation: [
      { name: 'Преглед', href: '#overview' },
      { name: 'Пазар', href: '#market' },
      { name: 'Локация', href: '#location' },
      { name: 'Продукти', href: '#products' },
      { name: 'Капацитет', href: '#capacity' },
      { name: 'Устойчивост', href: '#sustainability' },
      { name: 'Контакт', href: '#contact' },
    ],
    ctas: {
      contact: 'Свържете се с Dorostol Trade',
      partnership: 'Обсъдете възможности за партньорство',
    },
    hero: {
      eyebrow: 'Vegetable Protein and Oil Factory',
      title: 'Растителни протеини, протеинов изолат и масла',
      description:
        'Планиран завод за екстракция и преработка в Яломица, Румъния, с фокус върху соя, слънчоглед и рапица.',
      focusLabel: 'Фокус на проекта',
      rawMaterials: 'Соя, слънчоглед, рапица',
      note: 'Представяне на проекта за партньори и инвеститори',
      facts: [
        ['43.9M EUR', 'Обявен бюджет на проекта'],
        ['35,500 MT', 'Целево производство за петата година'],
        ['Ialomita', 'Romania'],
      ],
    },
    overview: {
      eyebrow: 'Преглед на проекта',
      title: 'Планиран индустриален проект, свързан с регионалното земеделие',
      description:
        'Dorostol Trade SRL е създадена в Румъния през 2013 г. и е част от семейна група с над 30 години дейност в секторите на земеделието и хранително-вкусовата преработка.',
      detail:
        'Планираният завод е насочен към екстракцията и преработката на растителни протеини, протеинов изолат и растителни масла от значими за региона култури.',
      stats: [
        ['2013', 'Създадена в Румъния'],
        ['Април 2025', 'Инвестиционно споразумение'],
        ['EUR 43.9M', 'Обявен бюджет на проекта'],
      ],
    },
    market: {
      eyebrow: 'Пазарна възможност',
      title: 'Растителни съставки за развиващо се индустриално търсене',
      description:
        'Проектът е ориентиран към селскостопански суровини и растителни съставки за хранителни и индустриални вериги на стойността.',
      cards: [
        ['Земеделска основа', 'Соята, слънчогледът и рапицата са основни за планирания производствен модел.'],
        ['Фокус върху преработката', 'Проектът цели превръщането на регионални култури в растителни съставки с добавена стойност.'],
        ['Европейски контекст', 'Локацията в Румъния осигурява достъп до пазарите на ЕС и утвърдени логистични маршрути.'],
        ['Възможности за партньорство', 'Представянето на проекта подпомага разговорите с потенциални партньори и инвеститори.'],
      ],
    },
    location: {
      eyebrow: 'Локация на завода',
      title: 'Ialomita Romania',
      description:
        'Планираната площадка е в Яломица, Румъния, в близост до земеделски райони и с достъп до пристанище Констанца.',
      imageAlt: 'Илюстративна карта, показваща Андрашещ, Букурещ и пристанище Констанца в Румъния.',
      cards: [
        ['Земеделски райони', 'Разположение в близост до значими райони за отглеждане на суровини.'],
        ['Пристанище Констанца', 'Достъп до важен черноморски логистичен център.'],
        ['Достъп до пазара на ЕС', 'Локация в Румъния, в рамките на Европейския съюз.'],
        ['Местна наличност', 'Планиране около регионалното снабдяване със суровини.'],
      ],
    },
    products: {
      eyebrow: 'Продукти',
      title: 'Фокусирано портфолио от растителни продукти',
      description:
        'Планираното производство съчетава протеинови съставки и растителни масла, получени от соя, слънчоглед и рапица.',
      cards: addProductAssets([
        ['Растителни протеини', 'Планирани протеинови съставки за хранителни и индустриални приложения.'],
        ['Протеинов изолат', 'Фокусиран изолатен продукт в рамките на планираното портфолио за преработка.'],
        ['Растителни масла', 'Масла, извлечени от суровини като соя, слънчоглед и рапица.'],
      ], [
        'Илюстративно изображение на съставка от растителен протеин.',
        'Илюстративно изображение на протеинов изолат.',
        'Илюстративно изображение на съставка от растително масло.',
      ]),
    },
    capacity: {
      eyebrow: 'Капацитет и операции',
      title: 'Производствени цели за петата година',
      description:
        'Стойностите по-долу са планирани годишни цели за петата година. Те не представляват текущо производство.',
      targetLabel: 'Цел за петата година',
      targets: [
        ['35,500 MT', 'Краен продукт годишно'],
        ['27,500 MT', 'Растителни протеини годишно'],
        ['8,000 MT', 'Растителни масла годишно'],
      ],
      processEyebrow: 'Фокус върху технологията и преработката',
      processTitle: 'От регионални култури до растителни съставки',
      processDescription:
        'Проектът е планиран около дейности за екстракция и преработка на соя, слънчоглед и рапица.',
      processPoints: [
        'Приемане на суровини от значими земеделски източници',
        'Екстракция и преработка с фокус върху растителни протеини и масла',
        'Планирано производство на протеинов изолат в рамките на продуктовото портфолио',
      ],
    },
    sustainability: {
      eyebrow: 'Устойчивост и въздействие',
      title: 'Проект, ориентиран към отговорно използване на ресурсите',
      description:
        'Планираният завод цели да подкрепи производството на растителни съставки, регионалните земеделски вериги на стойността и използването на селскостопански странични продукти, където е приложимо.',
      points: [
        'Производство на растителни протеини като алтернативен път за съставки',
        'Потенциално използване на селскостопански странични продукти във веригите за преработка',
        'Подкрепа за европейски и местни земеделски общности',
      ],
    },
    partnership: {
      eyebrow: 'Възможности за партньорство',
      title: 'Обсъдете проекта Vegetable Protein and Oil Factory',
      description:
        'Dorostol Trade SRL е отворена за разговори с търговски партньори, инвеститори, заинтересовани страни от финансирането, доставчици, купувачи и стратегически партньори с интерес към проекта.',
    },
    contact: {
      eyebrow: 'Контакт за инвеститори и партньори',
      title: 'Обсъдете проекта Vegetable Protein and Oil Factory',
      description:
        'За информация относно проекта, обсъждане на партньорства или запитвания от инвеститори се свържете директно с Dorostol Trade SRL.',
      details: {
        generalEmail: 'Общ имейл',
        directContact: 'Директен контакт',
        romania: 'Румъния',
        bulgaria: 'България',
      },
      ...contactDetails,
    },
    footer: {
      description:
        'Планираният Vegetable Protein and Oil Factory в Яломица, Румъния, е с фокус върху растителни протеини, протеинов изолат и растителни масла от соя, слънчоглед и рапица.',
      contact: 'Контакт',
      rights: 'Всички права запазени.',
    },
  },
}
