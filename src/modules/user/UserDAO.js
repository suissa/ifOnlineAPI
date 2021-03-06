import AbstractDAO from '../AbstractDAO';

class UserDAO extends AbstractDAO {

    constructor(User) {
        super(User);
        this.user = User;
    };

    findByUsername(username,success,error) {
        this.user.find({username:username})
            .exec()
            .then(success)
            .catch(error);
    };
}

export default UserDAO;