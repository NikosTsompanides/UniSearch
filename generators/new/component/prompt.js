const fs = require('fs');
module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Name:',
		validate(value) {
			if (!value.length) {
				return 'Components must have a name.';
			}
			const fileName = value.charAt(0).toUpperCase() + value.slice(1);
			const path = `src/components/${fileName}`;
			if (fs.existsSync(path)) {
				return `Component with name ${fileName} already exists. Select another name ...`;
			}
			fs.mkdirSync(path);
			return true;
		},
	},
	{
		type: 'confirm',
		name: 'extendsBaseEntity',
		message: 'Should entity extend BaseEntity?',
	},
];
