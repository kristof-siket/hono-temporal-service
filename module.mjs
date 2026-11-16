// @ts-check
import { module } from '@prisma/composer';
import appService from './service.mjs';

export default module('hono-temporal-service', ({ provision }) => {
  provision(appService);
});
