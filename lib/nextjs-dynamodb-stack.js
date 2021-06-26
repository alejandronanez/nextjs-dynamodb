const cdk = require('@aws-cdk/core');
const dynamo = require('@aws-cdk/aws-dynamodb')

class NextjsDynamodbStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    /**
     * This will create a new DynamoDB table called `Items`
     * with Pay Per Request billing mode
     * and with a `partitionKey` named `id`
     */
    new dynamo.Table(this, 'Items', {
      billingMode: dynamo.BillingMode.PAY_PER_REQUEST,
      partitionKey: {name: 'id', type: dynamo.AttributeType.STRING}
    });
  }
}

module.exports = {NextjsDynamodbStack}
