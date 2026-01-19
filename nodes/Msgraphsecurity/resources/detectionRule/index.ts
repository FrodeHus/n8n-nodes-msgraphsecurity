import { INodeProperties } from 'n8n-workflow';
import { getOneDetectionRuleDescription } from './getOne';
import { createDetectionRuleDescription } from './create';
import { deleteDetectionRuleDescription } from './delete';

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
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many detection rules',
				action: 'Get many detection rules',
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
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a detection rule by ID',
				action: 'Delete a detection rule',
				routing: {
					request: {
						method: 'DELETE',
						url: '/security/rules/detectionRules/{{ $parameter.detectionRuleId }}',
					},
				},
			},
		],
		default: 'getAll',
		...getOneDetectionRuleDescription,
		...createDetectionRuleDescription,
		...deleteDetectionRuleDescription,
	},
];
