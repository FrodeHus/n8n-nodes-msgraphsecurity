import { INodeProperties } from "n8n-workflow";
import { commonOdataProperties } from "../../shared/odataProperties";

const showOnlyIfOperationIsGetMany = {
    resource: ['secureScore'],
    operation: ['getMany'],
};

export const getManySecureScoreDescription: INodeProperties[] = [
	{
		...commonOdataProperties,
		displayOptions: {
			show: {
				...showOnlyIfOperationIsGetMany,
			},
		},
	},
];