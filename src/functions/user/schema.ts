export default {
	'type': 'object',
	'properties': {
		'firstName': { type: 'string', minLength: 2, maxLength: 20 },
		'lastName': { type: 'string', minLength: 2, maxLength: 20 },
	},
	'required': ['firstName', 'lastName'],
} as const;
