import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

export const hello = async (event) => {
	return formatJSONResponse({
		name: event.body.name,
	});
};

export const main = middyfy(hello);
