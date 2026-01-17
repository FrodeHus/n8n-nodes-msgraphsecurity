import { INodeProperties } from "n8n-workflow"; 
import { commonOdataProperties } from "../../shared/odataProperties";

const showOnlyIfResourceIsGetAllDetectionRule = {
    operation: ['getAll'],
    resource: ['detectionRule'],
}

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