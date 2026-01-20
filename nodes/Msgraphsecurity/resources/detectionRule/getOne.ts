import { INodeProperties } from "n8n-workflow";

const showOnlyIfResourceIsDetectionRule = {
	operation: ['get'],
	resource: ['customDetectionRule'],
};

export const getOneDetectionRuleDescription: INodeProperties[] = [
    {
        displayName: 'Detection Rule ID',
        name: 'detectionRuleId',
        type: 'number',
        required: true,
        displayOptions: {
            show: showOnlyIfResourceIsDetectionRule,
        },
        default: 0,
        description: 'The unique identifier of the detection rule',
    },
]   