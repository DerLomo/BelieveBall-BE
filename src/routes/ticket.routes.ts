import express, { Request, Response } from 'express';

const router = express.Router();

// GET /api/tickets - Get all tickets
router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ status: 'OK', message: 'Tickets endpoint' });
});

// GET /api/tickets/:walletAddress - Get tickets by wallet address
router.get('/:walletAddress', (req: Request, res: Response) => {
  const { walletAddress } = req.params;
  return res.status(200).json({ status: 'OK', message: `Tickets for wallet: ${walletAddress}` });
});

export const ticketRoutes = router;
