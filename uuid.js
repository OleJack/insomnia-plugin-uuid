const uuidv1 = require('uuid/v1');

module.exports.templateTags = [{
    name: 'uuid',
    displayName: 'uuid',
    description: 'Generate uuid',
    async run (context) {

        return uuidv1();
    }
}];
