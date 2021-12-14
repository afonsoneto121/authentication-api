import {UserMongoImp} from '../../repositories/implementation/UserMongoImp';
import {ControllerUserCRUD} from './ControllerUserCRUD';
import {ServiceUserCRUD} from './ServiceUserCRUD';

const repository = new UserMongoImp();
const serviceUserCRUD = new ServiceUserCRUD(repository);

const controlerUserCRUD = new ControllerUserCRUD(serviceUserCRUD);

export {controlerUserCRUD};
