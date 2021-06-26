const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const NextjsDynamodb = require('../lib/nextjs-dynamodb-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new NextjsDynamodb.NextjsDynamodbStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
