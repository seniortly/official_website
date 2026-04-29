export type Locale = "zh" | "en";

type NavItem = {
  key: string;
  href: string;
};

type SiteContent = {
  company: string;
  slogan: string;
  quoteLabel: string;
  aboutTitle: string;
  aboutProfileSubtitle: string;
  aboutDesc: string;
  aboutAdvantagesTitle: string;
  aboutAdvantagesSubtitle: string;
  aboutAdvantages: { zh: string; en: string }[];
  aboutEquipmentTitle: string;
  aboutEquipmentSubtitle: string;
  nav: NavItem[];
  heroCategories: {
    title: string;
    image: string;
  }[];
  sections: {
    networkTitle: string;
    networkDesc: string;
    productsTitle: string;
    products: {
      name: string;
      nameSub?: string;
      image: string;
    }[];
    technologyTitle: string;
    technologyDesc: string;
    capabilities: string[];
    highlightsTitle: string;
    highlights: string[];
    contactTitle: string;
    contactAddress: string;
    contactPhone: string;
    contactFax: string;
    contactEmail: string;
    contactWebsite: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
  };
};

export const supportedLocales: Locale[] = ["zh", "en"];

export const siteContent: Record<Locale, SiteContent> = {
  zh: {
    company: "零点几何（厦门）金刚石科技有限公司",
    slogan: "CUSTOM-BUILT · EXPERTLY MADE",
    quoteLabel: "获取报价",
    aboutTitle: "公司简介",
    aboutProfileSubtitle: "COMPANY PROFILE",
    aboutDesc:
      "零点几何（厦门）金刚石科技有限公司专注于金刚石工具的研发、制造与销售。公司持续引入先进自动化设备，拥有经验丰富的工程师团队，并通过 ISO9001 质量管理体系认证，产品广泛应用于天然石材与人造石材加工。",
    aboutAdvantagesTitle: "公司优势",
    aboutAdvantagesSubtitle: "OUR ADVANTAGES",
    aboutAdvantages: [
      { zh: "先进制造工艺及装备，保障产品稳定与一致性。", en: "Advanced manufacturing processes and equipment for stability and consistency." },
      { zh: "6名15年以上经验的机械工程师及金刚石工具专家。", en: "Six senior engineers with 15+ years in mechanical engineering and diamond tools." },
      { zh: "通过 ISO9001 质量管理体系认证。", en: "ISO9001-certified quality management system." },
      { zh: "设备齐全，支持特殊规格定制。", en: "Fully equipped facilities supporting customized specifications." },
    ],
    aboutEquipmentTitle: "先进的自动化专业制造设备",
    aboutEquipmentSubtitle: "ADVANCED AUTOMATED PROFESSIONAL MANUFACTURING EQUIPMENT",
    nav: [
      { key: "首页", href: "/zh" },
      { key: "关于我们", href: "/zh/about" },
      { key: "产品中心", href: "/zh/products" },
      { key: "技术能力", href: "/zh/products#technology" },
      { key: "全球网络", href: "/zh/products#network" },
      { key: "联系我们", href: "/zh/products#contact" },
    ],
    heroCategories: [
      { title: "石材切割", image: "/image/第5页-37.PNG" },
      { title: "仿形铣磨", image: "/image/第16页-153.PNG" },
      { title: "研磨抛光", image: "/image/第5页-37.PNG" },
      { title: "钻削工具", image: "/image/第22页-205.PNG" },
      { title: "气动与混凝土工具", image: "/image/第22页-205.PNG" },
    ],
    sections: {
      networkTitle: "全球网络",
      networkDesc:
        "产品远销海内外，长期服务欧洲、美洲、中东及东南亚等市场，可提供稳定的出口配套与技术支持。",
      productsTitle: "产品中心",
      products: [
        {
          name: "电镀线条轮",
          nameSub: "Electroplated Profile Wheel",
          image: "/image/dianduxiantiaolun.png",
        },
        {
          name: "电镀轮",
          nameSub: "Electroplated Wheel",
          image: "/image/dinhoulun.png",
        },
        {
          name: "花岗岩锯片",
          nameSub: "Economical Granite Blade",
          image: "/image/huagangyan.png",
        },
        {
          name: "环锯片",
          nameSub: "Ring Saw Blade",
          image: "/image/huanjvpian.png",
        },
        {
          name: "混凝土锯片",
          nameSub: "Concrete Saw Blade",
          image: "/image/hunningtujvpian.png",
        },
        {
          name: "有序排列锯片",
          nameSub: "Ultra Arix Saw Blade",
          image: "/image/paixvjvpian.png",
        },
        {
          name: "软磨片",
          nameSub: "Polishing Pad",
          image: "/image/ruanmopian.png",
        },
        {
          name: "线条轮",
          nameSub: "Profile Wheel",
          image: "/image/xiantiaolun.png",
        },
        {
          name: "岩板锯片",
          nameSub: "Sintered Stone Slab Blade",
          image: "/image/yanban.png",
        },
      ],
      technologyTitle: "技术与产能",
      technologyDesc:
        "公司现有30+台自动化及半自动化设备，围绕锯切、铣磨、抛光、钻削等工艺持续优化制造流程，实现效率与稳定性并重。",
      capabilities: [
        "先进制造工艺及装备",
        "6名15年以上经验的机械工程师及金刚石工具专家",
        "通过 ISO9001 质量管理体系认证",
        "设备齐全，支持特殊规格定制",
      ],
      highlightsTitle: "应用与服务",
      highlights: [
        "适用于花岗岩、大理石、砂岩等天然石材",
        "适用于石英石、瓷砖、Dekton 等人造/超硬材料",
        "70%以上产品出口，长期服务海外市场",
      ],
      contactTitle: "联系我们",
      contactAddress: "地址：厦门市同安区西柯街道银城智谷A12栋1501室",
      contactPhone: "WhatsApp：+86 15880255522",
      contactFax: "传真：暂无",
      contactEmail: "邮箱：暂无",
      contactWebsite: "官网：暂无",
      // formName: "姓名",
      // formEmail: "邮箱",
      // formMessage: "需求内容",
      // formSubmit: "提交询盘",
    },
  },
  en: {
    company: "Zero Geometry (Xiamen) Diamond Technology Co., Ltd.",
    slogan: "Custom-Built, Expertly Made.",
    quoteLabel: "Request a Quote",
    aboutTitle: "Company Profile",
    aboutProfileSubtitle: "公司简介",
    aboutDesc:
      "Zero Geometry (Xiamen) Diamond Technology Co., Ltd. specializes in the R&D, manufacturing and sales of diamond tools. Backed by advanced automated equipment, senior engineers and ISO9001-certified quality control, we supply solutions for both natural and engineered stone processing.",
    aboutAdvantagesTitle: "Our Advantages",
    aboutAdvantagesSubtitle: "公司优势",
    aboutAdvantages: [
      { zh: "先进制造工艺及装备，保障产品稳定与一致性。", en: "Advanced manufacturing processes and equipment for stability and consistency." },
      { zh: "6名15年以上经验的机械工程师及金刚石工具专家。", en: "Six senior engineers with 15+ years in mechanical engineering and diamond tools." },
      { zh: "通过 ISO9001 质量管理体系认证。", en: "ISO9001-certified quality management system." },
      { zh: "设备齐全，支持特殊规格定制。", en: "Fully equipped facilities supporting customized specifications." },
    ],
    aboutEquipmentTitle: "Advanced Automated Professional Manufacturing Equipment",
    aboutEquipmentSubtitle: "先进的自动化专业制造设备",
    nav: [
      { key: "HOME", href: "/en" },
      { key: "ABOUT US", href: "/en/about" },
      { key: "PRODUCTS", href: "/en/products" },
      { key: "TECHNOLOGY", href: "/en/products#technology" },
      { key: "GLOBAL NETWORK", href: "/en/products#network" },
      { key: "CONTACT", href: "/en/products#contact" },
    ],
    heroCategories: [
      { title: "Stone Cutting", image: "/image/第5页-37.PNG" },
      { title: "Profiling & Milling", image: "/image/第16页-153.PNG" },
      { title: "Grinding & Polishing", image: "/image/第5页-37.PNG" },
      { title: "Drilling Tools", image: "/image/第22页-205.PNG" },
      { title: "Air & Concrete Tools", image: "/image/第22页-205.PNG" },
    ],
    sections: {
      networkTitle: "Global Network",
      networkDesc:
        "Our products ship worldwide with long-term partners across Europe, the Americas, the Middle East and Southeast Asia, backed by export documentation and technical support.",
      productsTitle: "Products",
      products: [
        {
          name: "Electroplated Profile Wheel",
          nameSub: "电镀线条轮",
          image: "/image/dianduxiantiaolun.png",
        },
        {
          name: "Electroplated Wheel",
          nameSub: "电镀轮",
          image: "/image/dinhoulun.png",
        },
        {
          name: "Economical Granite Blade",
          nameSub: "花岗岩锯片",
          image: "/image/huagangyan.png",
        },
        {
          name: "Ring Saw Blade",
          nameSub: "环锯片",
          image: "/image/huanjvpian.png",
        },
        {
          name: "Concrete Saw Blade",
          nameSub: "混凝土锯片",
          image: "/image/hunningtujvpian.png",
        },
        {
          name: "Ultra Arix Saw Blade",
          nameSub: "有序排列锯片",
          image: "/image/paixvjvpian.png",
        },
        {
          name: "Polishing Pad",
          nameSub: "软磨片",
          image: "/image/ruanmopian.png",
        },
        {
          name: "Profile Wheel",
          nameSub: "线条轮",
          image: "/image/xiantiaolun.png",
        },
        {
          name: "Sintered Stone Slab Blade",
          nameSub: "岩板锯片",
          image: "/image/yanban.png",
        },
      ],
      technologyTitle: "Technology & Capability",
      technologyDesc:
        "With 30+ automated and semi-automated machines, we keep upgrading processing technology to improve cutting efficiency, durability and product consistency.",
      capabilities: [
        "Advanced manufacturing processes and equipment",
        "Six senior engineers with 15+ years of experience",
        "ISO9001-certified quality management system",
        "Fully equipped for customized specifications",
      ],
      highlightsTitle: "Applications & Service",
      highlights: [
        "For granite, marble, sandstone and other natural stones",
        "For quartz, ceramic tile, dekton and engineered materials",
        "Over 70% products exported with global service experience",
      ],
      contactTitle: "Contact",
      contactAddress:
        "Address: Room 1501, Building A12, Yincheng Zhigu, Xike Sub-district, Tong'an District, Xiamen City",
      contactPhone: "WhatsApp: +86 15880255522",
      contactFax: "Fax: N/A",
      contactEmail: "Email: N/A",
      contactWebsite: "Website: N/A",
      formName: "Your Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send Inquiry",
    },
  },
};
