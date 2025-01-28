const getStepsData = () => {
  return [
    {
      id: "1",
      title: "2024",
      heading: "Initial Development",
      subheadings: [
        "Research on Defi & NFTs",
        "Team forming",
        "Design MAGI tokenomics",
      ],
      completed: true,
      icon: research,
      style: { textDecoration: "line-through", color: "#9e9e9e" },
    },
    {
      id: "2",
      title: "Q1, 2025",
      heading: "Research",
      subheadings: [
        "Research on Defi & NFTs",
        "Team forming",
        "Design MAGI tokenomics",
      ],
      completed: true,
      icon: research,
    },
    {
      id: "3",
      title: "Q2, 2025",
      heading: "MVP & Sale",
      subheadings: [
        "Release MAGI token smart contract",
        "Private sale",
        "Whitepaper & website",
        "MVP",
        "NFT Airdrop campaign",
        "Public sale & listing on PancakeSwap",
        "Staking & Farming",
      ],
      completed: true,
      icon: tokenomics,
    },
    {
      id: "4",
      title: "Q3, 2025",
      heading: "Testnet & Launch Features",
      subheadings: [
        "Character system",
        "Battle system",
        "Pre-launch events",
        "Launch Magi Lottery",
        "Launch Magi Prediction",
      ],
      completed: true,
      icon: farming,
    },
    {
      id: "5",
      title: "Q1, 2026",
      heading: "Testnet Expansion",
      subheadings: [
        "Tier-1 exchange listing (Kucoin, Huobi, Okex, FTX)",
        "3D Equipment Testnet",
        "Magi Marketplace Testnet",
        "Magi Realm Testnet",
      ],
      completed: true,
      icon: launch,
    },
    {
      id: "6",
      title: "Q2-Q3, 2026",
      heading: "MoveToEarn, Metaverse & GameFi",
      subheadings: [
        "MoveToEarn: Hit, Run And Earn",
        "Launch Game Mainnet",
        "Tier-1 exchanges listing (Kucoin, Huobi, Okex)",
        "Magi Logistics: Deployed in Asia region",
        "Marketplace Mainnet",
        "Integrate VR and Metaverse",
      ],
      completed: false,
      icon: chain,
    },
    {
      id: "7",
      title: "Q4, 2026",
      heading: "Multichain GameFi and Metaverse",
      subheadings: [
        "Top exchanges listing (Binance)",
        "Deploying Metaverse for Gamers",
        "Deploying Magi Logistics to Europe and America region",
        "Multichain Marketplace",
        "Integrate PolkaDot into the Game Characters",
      ],
      completed: false,
      icon: chain,
    },
    {
      id: "8",
      title: "2027",
      heading: "Adventure Game",
      subheadings: [
        "Release the game in Adventure mode",
        "Focus on developing multi-chain games",
        "Integration with other GameFi projects",
      ],
      completed: false,
      icon: chain,
    },
  ];
};

const Roadmap = () => {
  const classes = useStyles();

  const steps = getStepsData();

  return (
    <div className={classes.background}>
      <div>
        <h6 className={classes.heading}>
          Magi Roadmap<strong className={classes.highlight}></strong>
        </h6>
      </div>

      <div className="row g-0 align-items-center">
        {steps.map((stepData, index) => (
          <div key={index} className="col-12 col-md-6 mb-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#1e1e1e",
                borderRadius: 8,
                padding: 20,
              }}
            >
              <Avatar src={stepData.icon} variant="rounded" />
              <hr style={{ width: "95%", marginTop: 10, marginBottom: 15 }} />
              <h3 style={{ ...stepData.style, fontWeight: 700 }}>
                {stepData.title}
              </h3>
              <h5
                style={{
                  fontSize: 14,
                  color: stepData.style?.color || "#e5e5e5",
                  fontWeight: 600,
                }}
              >
                {stepData.heading}
              </h5>
              <ul style={{ borderLeft: "1px solid grey" }}>
                {stepData.subheadings.map((subheading) => (
                  <li
                    style={{
                      marginRight: -5,
                      color: stepData.style?.color || "#e5e5e5",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        textDecoration: stepData.style?.textDecoration,
                      }}
                    >
                      {subheading}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
