import React from 'react';
import Page from '../components/Page';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {
  return (
    <Page>
      <div className="py-8">  
        <PortfolioItem 
          title="Switchboard"
          url=""
          description="Email automation workflow builder. Integrates with Gmail, Google Docs / Sheets, web search."
        />
        <PortfolioItem 
          title="Eldrow"
          url="https://eldrow.lordos.tech"
          description="Made this to reverse engineer my friend's Wordle guesses using DFS"
        />
        <PortfolioItem 
          title="CrimsonCal"
          url="https://crimsoncal.lordos.tech"
          description="Course selection website used by over 1000 Harvard students. Inspired by MIT Hydrant"
        />
        <PortfolioItem 
          title="Forgotten Realms"
          url="https://realms.lordos.tech"
          description="Online multiplayer adventure game with complex command parsing and GenAI procedural generation. Create a persona and type help to see commands. Forever a WIP as I keep adding more to the world."
        />
        <PortfolioItem 
          title="Cyprus2Campus"
          url="https://cyprus2campus.com"
          description="College admissions consulting company I run with my sister for Cypriot high school students looking to get into top schools"
        />
        <PortfolioItem 
          title="Decades"
          url="https://decades.lordos.tech"
          description="Inspired by NYT Connections. Group the headlines by the decades in which they were published."
        />
        <PortfolioItem 
          title="Passportle"
          url="https://passportle.lordos.tech"
          description="Inspired by Worldle. Guess the country by the passport."
        />
        <PortfolioItem 
          title="My Dad's Personal Website"
          url="https://georgelordos.com"
          description="<3"
        />
        <PortfolioItem 
          title="AskGeorge"
          url=""
          description="AI assistant that hooked up to your bank account and could generate financial insights on the fly. Great crash course into Retrieval Augmented Generaton and function calling w/ AI. Won first place at the Bank of Cyprus hackathon"
        />
        <PortfolioItem 
          title="The Harvard Advocate"
          url="https://theharvardadvocate.com"
          description="Front page for the oldest collegiate literary magazine in the country, receiving thousands of visits monthly. Was recognized as one of the [most beautiful lit-mag sites on the internet](https://x.com/chillsubs/status/1686722906376536069)"
        />
      </div>
    </Page>
  );
};

export default Portfolio;