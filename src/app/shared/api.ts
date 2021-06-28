import { environment } from '../../environments/environment';
import { Endpoint } from './endpoints';

export class Api {
  public static PRODUCTION: boolean = environment.production;
  public static Endpoints = Endpoint;
}
