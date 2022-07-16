const { v4: uuidv4 } = require('uuid');

module.exports.templateTags = [{
    name: 'uuid',
    displayName: 'Generate UUID',
    description: 'Generate UUID',
    async run (context) {
        return uuidv4();
    }
}];
