const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// extract body content
const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
if (!bodyMatch) {
    console.error("No body found");
    process.exit(1);
}

let bodyContent = bodyMatch[1];

// remove <script src="main.js"></script>
bodyContent = bodyContent.replace(/<script.*?src="main\.js.*?".*?><\/script>/g, '');

// Convert class to className
bodyContent = bodyContent.replace(/class=/g, 'className=');

// Convert onclick to onClick
bodyContent = bodyContent.replace(/onclick=/g, 'onClick=');

// Fix self closing tags for JSX
bodyContent = bodyContent.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
bodyContent = bodyContent.replace(/<br>/g, '<br />');
bodyContent = bodyContent.replace(/<!--[\s\S]*?-->/g, '');

// Convert SVG attributes to camelCase
bodyContent = bodyContent.replace(/stroke-width=/g, 'strokeWidth=');
bodyContent = bodyContent.replace(/viewBox=/g, 'viewBox=');

const pageJsx = `
import Script from "next/script";

export default function Home() {
  return (
    <>
      ${bodyContent}
      
      {/* Schema Data */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NexusX",
            "url": "https://www.nexusxglobal.com/",
            "logo": "https://www.nexusxglobal.com/assets/images/logo.png",
            "description": "Structured international market presence and global representation for manufacturers.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Z 2086, Akshar Business Park, Sector 25",
              "addressLocality": "Navi Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400703",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-97597-53181",
              "contactType": "customer service",
              "email": "info@nexusxglobal.com"
            }
          })
        }}
      />
      <Script src="/main.js" strategy="lazyOnload" />
    </>
  );
}
`;

fs.writeFileSync('app/page.js', pageJsx);
console.log('Successfully generated app/page.js');
