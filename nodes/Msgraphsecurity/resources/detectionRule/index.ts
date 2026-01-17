import { INodeProperties } from 'n8n-workflow';
import { getOneDetectionRuleDescription } from './getOne';
import { createDetectionRuleDescription } from './create';

const showIfDetectionRuleOperation = {
	operation: ['detectionRule'],
};

export const detectionRuleDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showIfDetectionRuleOperation,
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a detection rule by ID',
				action: 'Get a detection rule',
				routing: {
					request: {
						method: 'GET',
						url: '/security/rules/detectionRules/{{ $parameter.detectionRuleId }}',
					},
				},
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all detection rules',
				action: 'Get all detection rules',
				routing: {
					request: {
						method: 'GET',
						url: '/security/rules/detectionRules',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new detection rule',
				action: 'Create a detection rule',
				routing: {
					request: {
						method: 'POST',
						url: '/security/rules/detectionRules',
					},
				},
			},
		],
		default: 'getAll',
		...getOneDetectionRuleDescription,
		...createDetectionRuleDescription,
	},
];
