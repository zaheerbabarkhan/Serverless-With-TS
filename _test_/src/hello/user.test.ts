import { concat } from '../../../src/controller/hello/hello.controller';

test('Names should be concatinated', () => {
	expect(concat('abdul', 'wahab')).toBe('abdul wahab');
});
