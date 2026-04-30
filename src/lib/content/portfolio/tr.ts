import type { PortfolioContent } from "@/types/portfolio";

export const portfolioContentTr: PortfolioContent = {
  locale: "tr",
  metadata: {
    title: "Beyza Aslan | Frontend Developer",
    description:
      "Modern web uygulamaları tasarlayıp geliştiren; HTML, CSS, JavaScript, TypeScript ve React ile duyarlı arayüzler; Node.js, Express ve REST API deneyimine sahip bir geliştirici.",
  },
  nav: {
    homeLabel: "BA",
    items: [
      { label: "Projeler", href: "#projects" },
      { label: "Deneyim", href: "#experience" },
      { label: "Hakkımda", href: "#about" },
      { label: "İletişim", href: "#contact" },
    ],
    languageLabel: "Dil",
    letsTalkLabel: "Konuşalım",
    closeMenuLabel: "Navigasyonu kapat",
    openMenuLabel: "Navigasyonu aç",
  },
  hero: {
    eyebrow: "FRONTEND DEVELOPER",
    availability: "UYGUN · REMOTE & HİBRİT",
    headline:
      "Duyarlı, kullanıcı odaklı arayüzler ve modern web uygulamaları geliştiriyorum.",
    supportingText:
      "TypeScript, React ve REST API entegrasyonu ile ürün tarafta; gerektiğinde Node.js, Express ve NestJS ile uçtan uca süreçlere katılıyorum.",
    primaryCta: "Seçili İşlere Göz At",
    secondaryCta: "İletişime Geç",
    techTags: [
      "TypeScript",
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Node.js",
      "Express",
      "NestJS",
      "MongoDB",
      "Docker",
      "Git",
      "REST API",
    ],
  },
  about: {
    sectionNumber: "02",
    sectionTitle: "HAKKIMDA",
    lead: "Kullanılabilir, temiz koda değer veren ve sürekli gelişen bir frontend geliştiricisiyim.",
    paragraphs: [
      "Tasarım ve geliştirme odaklı modern web uygulamalarında çalışıyorum. HTML, CSS, JavaScript, TypeScript ve React ile duyarlı ve anlaşılır kullanıcı arayüzleri üretiyor; Node.js, Express ve REST API ile backend tarafıyla entegre, uçtan uca düşünülen özelliklerde yer alıyorum.",
      "8 aylık yoğun Frontend Web Development eğitimine kabul alıp 2024’te mezun oldum; React, TypeScript, Express ve JavaScript ile yüksek performanslı, duyarlı projeler geliştirdim. Kırklareli Üniversitesi Yazılım Mühendisliği lisans eğitimini 2025’te tamamladım. GDG Kırklareli bünyesinde Tasarım Ekibi üyesi olarak topluluk etkinlikleri için görseller ve marka materyalleri ürettim.",
      "Güçlü problem çözme ve iş birliğine açık bir çalışma tarzına sahibim. Türkçe ana dil, İngilizce etkin iletişim seviyesindeyim.",
    ],
    statusPill: "Bağcılar, İstanbul · Remote fırsatlara açık",
  },
  experience: {
    sectionNumber: "03",
    sectionTitle: "DENEYİM",
    intro:
      "Üretim ve müşteri projelerinde; API’ler, yönetim panelleri ve yapay zekâ destekli ürün yüzeylerinde yer aldım.",
    items: [
      {
        number: "01",
        company: "Egeli Bilgi Güvenliği",
        role: "Yazılım Geliştirici",
        period: "Eylül 2025 – Nisan 2026",
        location: "İstanbul, Türkiye",
        description:
          "Almanya merkezli bir müşteri için PHP tabanlı yönetim paneli geliştirme ve sürdürme; sade mimari, veri giriş akışları, sürdürülebilirlik ve backend entegrasyonları. RAG tabanlı, yapay zekâ destekli asistanlık / astroloji odağında uçtan uca ürün geliştirme sürecine hem arayüz hem sunucu tarafında aktif katılım.",
        tags: [
          "PHP",
          "REST API",
          "React",
          "TypeScript",
          "RAG / AI",
          "Full stack",
        ],
      },
      {
        number: "02",
        company: "Medya Takip Merkezi (MTM)",
        role: "Backend Odaklı Geliştirici",
        period: "Temmuz 2024 – Eylül 2024",
        location: "İstanbul, Türkiye",
        description:
          "Express.js ve Docker ile ölçeklenebilir backend servisleri; karmaşık mimari sınırlarda optimize API performansı, sağlam veritabanı yönetimi ve servis entegrasyonları.",
        tags: [
          "Express.js",
          "Node.js",
          "Docker",
          "REST",
          "MongoDB",
        ],
      },
    ],
  },
  projects: {
    sectionNumber: "04",
    sectionTitle: "SEÇİLMİŞ İŞLER",
    intro:
      "Bootcamp, üniversite ve profesyonel projelerde ürettiğim ürüne dönük çalışmalardan özetler.",
    expandLabel: "Teknik özeti incele",
    collapseLabel: "Teknik özeti kapat",
    inspectionEyebrow: "Teknik dosya",
    inspectionHint: "Görevler, yığın ve teslimat bağlamı.",
    inspectionActiveLabel: "İnceleme açık",
    previewLabels: {
      context: "Bağlam",
      focus: "Odak",
      stack: "Stack",
    },
    summaryTitle: "Neden değerliydi",
    responsibilitiesTitle: "Benim rolüm",
    footprintTitle: "Teknik kapsam",
    items: [
      {
        number: "01",
        name: "Kurumsal yönetim paneli (PHP)",
        company: "Egeli Bilgi Güvenliği",
        contextLabel: "Almanya müşterisi · veri ve süreç yönetimi",
        description:
          "Kurumsal müşteri ihtiyaçlarına göre tasarlanmış, sürdürülebilir PHP tabanlı yönetim arayüzü; veri girişi, onay ve raporlama odaklı akışlarda temiz mimari ve backend uyumu.",
        themes: [
          "Yönetim paneli mimarisi",
          "Veri girişi ve operasyonel akışlar",
          "Entegrasyon",
        ],
        tags: ["PHP", "REST", "Admin", "Bakım ve teslimat"],
        details: {
          summary:
            "Almanya pazarına yönelik projede, müşterinin idari ihtiyaçlarını destekleyen, okunaklı ve sürdürülebilir bir yönetim paneli üzerinde çalıştım. Odak, temiz sınırlar, veri tutarlılığı ve ekipten gelen geri bildirimlere hızlı uyum sağlayabilecek yapıdaydı.",
          responsibilities: [
            "PHP tabanlı ekranları ve iş kurallarını; okunaklı, genişletilebilir bir yapıda geliştirme ve sürdürme.",
            "Formlar, listeler ve veri giriş senaryolarında tutarlı kullanıcı deneyimi sağlama.",
            "Backend hizmetleriyle uyumlu entegrasyon ve hata sınırlarını netleştirme.",
            "Kod sahipliği, peer review ve değişen gereksinimlere adaptasyon.",
          ],
          footprint: [
            "PHP sunucu uçları ve yönetim arayüzü katmanı",
            "REST ile dış/ iç servis sözleşmeleri",
            "Kurumsal veri ve iş akışı odaklı ekranlar",
          ],
        },
      },
      {
        number: "02",
        name: "RAG tabanlı AI asistan / astroloji platformu",
        company: "Egeli Bilgi Güvenliği",
        contextLabel: "Uçtan uca ürün · AI + arayüz",
        description:
          "Büyük dil modelleri ve RAG (retrieval-augmented generation) desenleriyle zenginleştirilen, uçtan uca ürün deneyiminde hem ön uç hem arka uç süreçlerine katılım; gerçek iterasyon, test ve canlıya yaklaşım tecrübesi.",
        themes: [
          "RAG ve AI entegrasyonu",
          "Ön uç + arka uç iş birliği",
          "Ürün disiplini",
        ],
        tags: [
          "TypeScript",
          "React",
          "Node.js",
          "RAG / LLM",
          "Full stack",
        ],
        details: {
          summary:
            "Yapay zekâ destekli asistanlar ve alan bilgisinin bir araya getirilmesi gereken bir ürün bağlamında, hem kullanıcı yüzeyinde hem de servis sınırlarında aktif oldum. Amaç, fikirden itibaren yinelemeli, ölçülebilir bir teslimat hattı kurmaktı.",
          responsibilities: [
            "Arayüz ve API sınırlarında özellik geliştirme ve hata ayıklama.",
            "RAG / AI akışlarının ürün gereksinimleriyle hizalanmasına destek.",
            "Takım içi senkron, kod kalitesi ve son kullanıcı deneyimini birlikte düşünme.",
          ],
          footprint: [
            "Modern JS/TS ve React tabanlı kullanıcı yüzeyi",
            "Backend entegrasyonu ve RAG/AI servis sözleşmeleri",
            "Uçtan uca ürün geliştirme pratiği (planlama, test, iterasyon)",
          ],
        },
      },
      {
        number: "03",
        name: "Ölçeklenebilir API ve backend hizmetleri",
        company: "Medya Takip Merkezi (MTM)",
        contextLabel: "Express · Docker · operasyonel API",
        description:
          "Express.js ve Docker ile dağıtıma uygun backend servisleri; yoğun veri ve operasyonel yüklerde performans, izlenebilirlik ve veri tutarlılığı odaklı geliştirme.",
        themes: [
          "API performansı",
          "Konteynerleştirme",
          "Veri ve servis sınırları",
        ],
        tags: [
          "Express.js",
          "Docker",
          "Node.js",
          "MongoDB",
          "REST",
        ],
        details: {
          summary:
            "Kurumsal medya/izleme ekosisteminde, servis sınırlarının net, ölçeklenebilir ve tekrar edilebilir dağıtımla ilerlediği bir ortamda Express tabanlı backend ve Docker kullanımına odaklandım.",
          responsibilities: [
            "Express.js ile servis uçları ve entegrasyon desenlerinin uygulanması.",
            "Docker ile çalışma ortamı tutarlılığı ve dağıtım hazırlığı.",
            "Veri erişim katmanı ve sorgu performansına duyarlı tasarım kararları.",
          ],
          footprint: [
            "Node.js + Express servis topolojisi",
            "Docker imaj ve çalışma zamanı sınırları",
            "MongoDB ve REST ile veri/ API yüzeyi",
          ],
        },
      },
    ],
  },
  capabilities: {
    sectionNumber: "05",
    sectionTitle: "YETENEKLER",
    groups: [
      {
        category: "Diller & çekirdek",
        items: [
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
        ],
      },
      {
        category: "Ön uç & çerçeveler",
        items: [
          "React",
          "Duyarlı (responsive) tasarım",
          "REST API tüketimi",
          "Form ve durum yönetimi",
        ],
      },
      {
        category: "Backend & altyapı",
        items: [
          "Node.js",
          "Express",
          "NestJS",
          "MongoDB",
          "PHP",
          "Docker",
          "Git",
        ],
      },
      {
        category: "İletişim",
        items: [
          "Türkçe (ana dil)",
          "İngilizce (akıcı)",
        ],
      },
    ],
    callout:
      "Güçlü yönüm: okunaklı arayüzler, net kod ve ürün hedefiyle hizalanmış full stack katkı; karmaşık gereksinimleri parçalayıp uygulanabilir teslimata çevirmek.",
    statLabel: "ONLYJS · KIRKLARELI UNI · 2+ ROL",
  },
  contact: {
    sectionNumber: "06",
    sectionTitle: "İLETİŞİM",
    headline: "Birlikte anlamlı ürünler üretelim.",
    intro:
      "Freelance, tam zamanlı veya proje bazlı roller için görüşmeye açığım.",
    body: "aslanbeyza3413@gmail.com üzerinden veya aşağıdaki formdan ulaşabilirsiniz. Modern web, React/TypeScript, API entegrasyonu ve ekip çalışması gerektiren projelerde konuşalım.",
    form: {
      nameLabel: "İsim",
      emailLabel: "E-posta",
      subjectLabel: "Konu",
      messageLabel: "Mesaj",
      submitLabel: "Mesaj Gönder",
      submittingLabel: "Gönderiliyor...",
      placeholders: {
        name: "Adınız soyadınız",
        email: "ornek@eposta.com",
        subject: "Hangi proje veya rol?",
        message: "Kısaca proje, zaman çizelgesi veya beklentileriniz.",
      },
      validation: {
        nameRequired: "Lütfen isminizi girin.",
        emailInvalid: "Geçerli bir e-posta adresi girin.",
        subjectRequired: "Lütfen konu girin.",
        messageRequired: "Lütfen mesaj girin.",
        messageMinLength: "Mesaj en az 10 karakter olmalı.",
      },
      success: "Mesaj alındı. En kısa sürede dönüş yapacağım.",
      securityLoading: "Form güvenliği hazırlanıyor...",
      secured: "Form güvenli",
      blocked: "Geçici olarak engellendi",
    },
  },
  footer: {
    strapline: "Beyza Aslan · Frontend Developer · İstanbul",
    copyright: "Tüm hakları saklıdır.",
  },
  notFound: {
    eyebrow: "HATA 404",
    title: "Sayfa bulunamadı.",
    description:
      "Aradığınız sayfa yok veya taşınmış olabilir. Ana sayfaya dönebilirsiniz.",
    primaryCta: "Portföye dön",
    secondaryCta: "Geri dön",
  },
};
