import express, { Request, Response } from 'express';

const router = express.Router();

// GET /api/jackpot - Get current jackpot info
router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ status: 'OK', message: 'Current jackpot information', amount: 0 });
});

// GET /api/jackpot/history - Get jackpot history
router.get('/history', (req: Request, res: Response) => {
  return res.status(200).json({ status: 'OK', message: 'Jackpot history', history: [] });
});

export const jackpotRoutes = router;
