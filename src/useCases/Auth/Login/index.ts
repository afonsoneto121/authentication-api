import {AuthMongoImp} from '../../../repositories/implementation/AuthMongoImp';
import {TokenRedisImp} from '../../../repositories/implementation/TokenRedisImp';
import {ControllerAuth} from './ControllerAuth';
import {ServiceAuth} from './ServiceAuth';

const repository = new AuthMongoImp();
const tokenRepository = new TokenRedisImp();
const service = new ServiceAuth(repository, tokenRepository);
const controllerAuth = new ControllerAuth(service);

export {controllerAuth};
