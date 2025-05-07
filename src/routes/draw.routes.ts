import express, { Request, Response } from 'express';

const router = express.Router();

// GET /api/draws - Get all draws
router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ status: 'OK', message: 'Draws endpoint' });
});

// GET /api/draws/:drawId - Get specific draw
router.get('/:drawId', (req: Request, res: Response) => {
  const { drawId } = req.params;
  return res.status(200).json({ status: 'OK', message: `Draw information for draw ID: ${drawId}` });
});

// GET /api/draws/latest - Get latest draw
router.get('/latest', (req: Request, res: Response) => {
  return res.status(200).json({ status: 'OK', message: 'Latest draw information' });
});

export const drawRoutes = router;
