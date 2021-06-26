import * as uuid from 'uuid';
import dynamoDb from '../../lib/dynamo';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    /**
     * Create items with:
     * curl -X PUT http://localhost:3000/api/item -d '{"content": "testing this again"}' -H "Content-type: application/json"
     */
    const item = {
      id: uuid.v4(),
      content: req.body.content,
      createdAt: Date.now()
    }

    await dynamoDb.put({Item: item});

    res.status(201).json(item)
  }

  if (req.method === 'GET') {
    const {Item} = await dynamoDb.get({
      Key: {
        id: req.query.id
      }
    })

    res.status(200).json(Item)
  }

  if (req.method === 'POST') {
    const {Attributes} = await dynamoDb.update({
      Key: {
        id: req.body.id,
      },
      UpdateExpression: 'SET content = :content',
      ExpressionAttributeValues: {
        ':content': req.body.content || null
      },
      Return: 'ALL_NEW'
    })

    res.status(200).json(Attributes)
  }

  if (req.method === 'DELETE') {
    await dynamoDb.delete({
      Key: {
        id: req.body.id,
      },
    })

    res.status(204).json({})
  }

}