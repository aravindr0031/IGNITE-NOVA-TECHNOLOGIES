import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5173/services', { waitUntil: 'networkidle0' });
  
  // Let's inspect the DOM
  const sectionInfo = await page.evaluate(() => {
    const section = document.querySelector('section.max-w-7xl.mx-auto.px-4.sm\\:px-6.lg\\:px-8.py-8');
    if (!section) return { error: 'Section not found' };
    
    const rect = section.getBoundingClientRect();
    const style = window.getComputedStyle(section);
    
    // Check the first motion.div card inside
    const cards = section.querySelectorAll('div > div > div > div'); // Rough selector for cards
    const cardsInfo = Array.from(cards).slice(0, 2).map(card => {
      const cardRect = card.getBoundingClientRect();
      const cardStyle = window.getComputedStyle(card);
      return {
        rect: { x: cardRect.x, y: cardRect.y, width: cardRect.width, height: cardRect.height },
        opacity: cardStyle.opacity,
        display: cardStyle.display,
        visibility: cardStyle.visibility,
      };
    });

    return {
      rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
      display: style.display,
      visibility: style.visibility,
      cards: cardsInfo
    };
  });
  
  console.log(JSON.stringify(sectionInfo, null, 2));
  
  await browser.close();
})();
