import AuthMongoImp from '../../repositories/implementation/AuthMongoImp';
import ControllerAuth from './ControllerAuth';
import ServiceAuth from './ServiceAuth';

const repository = new AuthMongoImp();
const service = new ServiceAuth(repository);
const controllerAuth = new ControllerAuth(service);

export default controllerAuth;
