// @ts-check
import { module } from '@prisma/composer';
import appService from './src/service.mts';

export default module('hono-temporal-service', ({ provision }) => {
  provision(appService);
});
