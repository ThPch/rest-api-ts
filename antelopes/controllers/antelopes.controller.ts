import express from 'express';
import antelopesService from '../services/antelopes.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:antelopes-controller');
class AntelopesController {
    async getAntelopes(req: express.Request, res: express.Response) {
        const antelopesList = await antelopesService.getAntelopes();
        res.status(200).send(antelopesList);
    }
}

export default new AntelopesController();