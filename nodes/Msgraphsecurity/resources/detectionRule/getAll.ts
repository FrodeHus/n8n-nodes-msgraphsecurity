import { INodeProperties } from "n8n-workflow"; 
import { commonOdataProperties } from "../../shared/odataProperties";

const showOnlyIfResourceIsGetAllDetectionRule = {
	resource: ['customDetectionRule'],
	operation: ['getAll'],
};

export const getAllDetectionRuleDescription: INodeProperties[] = [
	{
		...commonOdataProperties,
		displayOptions: {
			show: {
				...showOnlyIfResourceIsGetAllDetectionRule,
			},
		},
	},
];