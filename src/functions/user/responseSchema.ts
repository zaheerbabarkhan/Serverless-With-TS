export default {
	'type': 'object',
	'properties': {
		'message': { type: 'string', minLength: 2, maxLength: 20 },
	},
	'required': ['message'],
} as const;
