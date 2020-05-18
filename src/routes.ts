import { Router } from 'express';

import getAllUsers from './services/getAllUsers';
import getUserDetails from './services/getUserDetails';
import getUserRepos from './services/getUserRepos';

const routes = Router();

routes.get('/users', getAllUsers);
routes.get('/users/:username/details', getUserDetails);
routes.get('/users/:username/repos', getUserRepos);

export default routes;
