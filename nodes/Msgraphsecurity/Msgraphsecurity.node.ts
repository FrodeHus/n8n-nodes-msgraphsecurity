import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { secureScoreDescription } from './resources/secureScore';

export class Msgraphsecurity implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Msgraphsecurity',
		name: 'msgraphsecurity',
		icon: { light: 'file:msgraphsecurity.svg', dark: 'file:msgraphsecurity.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Msgraphsecurity API',
		defaults: {
			name: 'Msgraphsecurity',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'msgraphsecurityOAuth2Api', required: true }],
		requestDefaults: {
			baseURL: 'https://graph.microsoft.com/beta/',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Secure Score',
						value: 'secureScore',
						description: 'Operations on secure scores',
					},
				],
				default: 'secureScore',
			},
			...secureScoreDescription,
		],
	};
}
