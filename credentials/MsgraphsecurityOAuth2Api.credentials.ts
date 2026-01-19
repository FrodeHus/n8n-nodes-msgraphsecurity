import type { Icon, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class MsgraphsecurityOAuth2Api implements ICredentialType {
	name = 'msgraphsecurityOAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'Msgraphsecurity OAuth2 API';
	icon: Icon = {
		light: 'file:../icons/msgraph.svg',
		dark: 'file:../icons/msgraph.dark.svg',
	};
	// Link to your community node's README
	documentationUrl =
		'https://github.com/FrodeHus/n8n-nodes-msgraphsecurity?tab=readme-ov-file#credentials';
	test: ICredentialTestRequest = {
		request: {
			method: 'GET',
			baseURL: 'https://graph.microsoft.com/beta/security',
			url: '/secureScores',
		},
	};

	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'clientCredentials',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'string',
			default: 'https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: 'https://graph.microsoft.com/.default',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
	];
}
