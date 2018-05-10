const uuidv1 = require('uuid/v1');

module.exports.templateTags = [{
    name: 'uuid',
    displayName: 'Generate UUID',
    description: 'Generate UUID',
    async run (context) {

        return uuidv1();
    }
}];
