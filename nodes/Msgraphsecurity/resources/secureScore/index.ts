import { INodeProperties } from 'n8n-workflow';
import { getManySecureScoreDescription } from './getMany';

const showOnlyIfOperationIsSecureScore = {
	resource: ['secureScore'],
};

export const secureScoreDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyIfOperationIsSecureScore,
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get the secure score',
				action: 'Get the secure score',
				routing: {
					request: {
						method: 'GET',
						url: '/secureScores?$top=1',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getMany',
				description: 'Get many secure scores',
				action: 'Get many secure scores',
				routing: {
					request: {
						method: 'GET',
						url: '/secureScores',
					},
				},
			},
		],
		default: 'get',
	},
	...getManySecureScoreDescription,
];
