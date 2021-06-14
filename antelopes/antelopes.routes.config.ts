import {CommonRoutesConfig} from '../common/common.routes.config';
import AntelopesController from './controllers/antelopes.controller';
import express from 'express';

export class AntelopesRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AntelopesRoutes');
    }

    configureRoutes(): express.Application { 

        this.app.route(`/antelopes`)
            .get(AntelopesController.getAntelopes);

        this.app.route(`/antelopes/:antelopeId`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                // This middleware function runs before any request to /antelopes/:antelopeId
                // It doesn't accomplish anything just yet---it simply passes control to the next applicable function below using next()
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.antelopeId}`);
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`Put requested for id ${req.params.antelopeId}`);
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`Patch requested for id ${req.params.antelopeId}`);
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`Delete requested for id ${req.params.antelopeId}`);
            });

        return this.app;
    }
}