import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { concat } from 'src/controller/hello/hello.controller';
import schema from './schema';

const user: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
	event
) => {

	return formatJSONResponse({
		message: concat(event.body.firstName, event.body.lastName),
	});
};

export const main = middyfy(user);
