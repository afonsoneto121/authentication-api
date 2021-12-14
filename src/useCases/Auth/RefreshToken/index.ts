import {TokenRedisImp} from '../../../repositories/implementation/TokenRedisImp';
import {ControllerRefreshToken} from './ControllerRefreshToken';
import {ServiceRefreshToken} from './ServiceRefreshToken';

const repository = new TokenRedisImp();
const service = new ServiceRefreshToken(repository);

const controllerToken = new ControllerRefreshToken(service);

export {controllerToken};
