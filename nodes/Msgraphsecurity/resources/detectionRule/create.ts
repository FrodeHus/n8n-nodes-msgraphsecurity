import { INodeProperties } from "n8n-workflow";

const showOnlyIfResourceCreateDetectionRule = {
    operation: ['create'],
    resource: ['detectionRule'],
}

export const createDetectionRuleDescription: INodeProperties[] = [
	{
		displayName: 'Detection Rule Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyIfResourceCreateDetectionRule,
		},
		default: '',
		description: 'The name of the detection rule to create.',
		routing: {
			send: {
				type: 'body',
				property: 'displayName',
			},
		},
	},
	{
		displayName: 'Enabled',
		name: 'enabled',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: showOnlyIfResourceCreateDetectionRule,
		},
		default: true,
		description: 'Whether the detection rule is enabled upon creation.',
		routing: {
			send: {
				type: 'body',
				property: 'isEnabled',
			},
		},
	},
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyIfResourceCreateDetectionRule,
		},
		default: '',
		description: 'The query for the detection rule.',
		routing: {
			send: {
				type: 'body',
				property: 'queryCondition.queryText',
			},
		},
	},
	{
		displayName: 'Schedule',
		name: 'schedule',
		type: 'options',
		displayOptions: {
			show: showOnlyIfResourceCreateDetectionRule,
		},
		options: [
			{
				name: 'Continuous',
				value: '0',
			},
			{
				name: 'Every 1 Hour',
				value: '1H',
			},
			{
				name: 'Every 3 Hours',
				value: '3H',
			},
			{
				name: 'Every 12 Hours',
				value: '12H',
			},
			{
				name: 'Every 24 Hours',
				value: '24H',
			},
		],
		default: '1H',
		description: 'The schedule for the detection rule.',
		routing: {
			send: {
				type: 'body',
				property: 'schedule.period',
			},
		},
	},
	{
		displayName: 'Detection Action',
		name: 'detectionAction',
		type: 'json',
		required: false,
		displayOptions: {
			show: showOnlyIfResourceCreateDetectionRule,
		},
		default: '',
		description: 'The action to take when the detection rule is triggered.',
		routing: {
			send: {
				type: 'body',
				property: 'detectionAction',
			},
		},
	},
	{
		displayName: 'Response Actions',
		name: 'responseActions',
		type: 'json',
		required: false,
		displayOptions: {
			show: showOnlyIfResourceCreateDetectionRule,
		},
		default: '',
		description: 'The response actions to take when the detection rule is triggered.',
		routing: {
			send: {
				type: 'body',
				property: 'responseActions',
			},
		},
	},
]; 