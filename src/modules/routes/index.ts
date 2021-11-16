import { Router } from 'express';

import { GetSLPPriceService } from '@modules/services/GetSLPPriceUSDService';

const getSLPPriceService = new GetSLPPriceService();

const serve = Router();

serve.get('/', (req, res) => {
  return res.json({ ServerStatus: true });
});

serve.get('/slp', (req, res) => {
  (async function returnPrice() {
    const result = await getSLPPriceService.execute();
    return res.json({ slp: result });
  })();
});

export default serve;
