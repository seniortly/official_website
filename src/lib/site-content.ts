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
  aboutDesc: string;
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
      desc: string;
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
    company: "厦门台颖金刚石制品有限公司",
    slogan: "CUSTOM-BUILT · EXPERTLY MADE · 始于 1998",
    quoteLabel: "获取报价",
    aboutTitle: "公司简介",
    aboutDesc:
      "厦门台颖金刚石制品有限公司成立于1998年，专业从事金刚石工具的研发、制造与销售。公司持续引入先进自动化设备，拥有经验丰富的工程师团队，并通过 ISO9001 质量管理体系认证，产品广泛应用于天然石材与人造石材加工。",
    nav: [
      { key: "首页", href: "#home" },
      { key: "关于我们", href: "#about" },
      { key: "产品中心", href: "#products" },
      { key: "技术能力", href: "#technology" },
      { key: "全球网络", href: "#network" },
      { key: "联系我们", href: "#contact" },
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
          name: "石材切割工具",
          desc: "中径锯片、小锯片、大锯片、绳锯等，覆盖花岗岩、大理石、石英石、岩板等材料。",
          image: "/image/第5页-37.PNG",
        },
        {
          name: "CNC 仿形铣磨工具",
          desc: "包含定厚轮、线条轮、电镀线条轮、锣边轮与 CNC 相关配套工具。",
          image: "/image/第16页-153.PNG",
        },
        {
          name: "钻削与混凝土工具",
          desc: "钻管、环锯机、混凝土锯片及墙锯类产品，适配不同施工与加工场景。",
          image: "/image/第22页-205.PNG",
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
      contactAddress: "地址：厦门市同安区西柯镇西福路129号（361100）",
      contactPhone: "电话：+86-592-7112398 / 7113907",
      contactFax: "传真：+86-592-7111702",
      contactEmail: "邮箱：sales@xmtaiying.com",
      contactWebsite: "官网：www.xmtaiying.com",
      formName: "姓名",
      formEmail: "邮箱",
      formMessage: "需求内容",
      formSubmit: "提交询盘",
    },
  },
  en: {
    company: "Xiamen TY Diamond Tools Co., Ltd.",
    slogan: "Custom-Built, Expertly Made. Since 1998.",
    quoteLabel: "Request a Quote",
    aboutTitle: "Company Profile",
    aboutDesc:
      "Established in 1998, Xiamen Taiying Diamond Products Co., Ltd. specializes in the R&D, manufacturing and sales of diamond tools. Backed by advanced automated equipment, senior engineers and ISO9001-certified quality control, we supply solutions for both natural and engineered stone processing.",
    nav: [
      { key: "HOME", href: "#home" },
      { key: "ABOUT US", href: "#about" },
      { key: "PRODUCTS", href: "#products" },
      { key: "TECHNOLOGY", href: "#technology" },
      { key: "GLOBAL NETWORK", href: "#network" },
      { key: "CONTACT", href: "#contact" },
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
        "Taiying ships worldwide with long-term partners across Europe, the Americas, the Middle East and Southeast Asia—backed by export documentation and technical support.",
      productsTitle: "Products",
      products: [
        {
          name: "Stone Cutting Tools",
          desc: "Medium blades, small blades, big blades and wire saws for granite, marble, quartz and sintered stone.",
          image: "/image/第5页-37.PNG",
        },
        {
          name: "CNC Profiling & Milling",
          desc: "Calibrating wheels, profile wheels, electroplated profiles, router bits and CNC tool accessories.",
          image: "/image/第16页-153.PNG",
        },
        {
          name: "Drilling & Concrete Tools",
          desc: "Core drills, ring saw machines, wall blades and concrete cutting tools for construction applications.",
          image: "/image/第22页-205.PNG",
        },
      ],
      technologyTitle: "Technology & Capability",
      technologyDesc:
        "With 30+ automated and semi-automated machines, Taiying keeps upgrading processing technology to improve cutting efficiency, durability and product consistency.",
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
        "Address: No.129, Xifu Road, Xike Town, Tongan District, Xiamen, Fujian, China (361100)",
      contactPhone: "Tel: +86-592-7112398 / 7113907",
      contactFax: "Fax: +86-592-7111702",
      contactEmail: "Email: sales@xmtaiying.com",
      contactWebsite: "Website: www.xmtaiying.com",
      formName: "Your Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send Inquiry",
    },
  },
};
