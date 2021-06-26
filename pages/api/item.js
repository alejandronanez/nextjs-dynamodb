import * as uuid from 'uuid';
import dynamoDb from '../../lib/dynamo';

export default async function handler(req, res) {
  const item = {
    id: uuid.v4(),
    content: 'test',
    createdAt: Date.now()
  }

  await dynamoDb.put({Item: item});

  res.status(201).json(item)
}