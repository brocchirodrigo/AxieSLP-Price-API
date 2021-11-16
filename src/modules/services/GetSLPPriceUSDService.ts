import axios from 'axios';
import cheerio from 'cheerio';

class GetSLPPriceService {
  async execute(): Promise<string | undefined> {
    try {
      const response = await axios.get(
        'https://www.coingecko.com/pt/moedas/smooth-love-potion',
      );

      const html = response.data;
      const $ = cheerio.load(html);

      const spanTest = $('[data-coin-symbol="slp"]');
      const price = spanTest.html();

      return price || undefined;
    } catch (error) {
      console.error(error);
      return 'Price unavailable';
    }
  }
}

export { GetSLPPriceService };
