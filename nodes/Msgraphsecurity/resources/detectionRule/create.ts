import { INodeProperties } from "n8n-workflow";

const showOnlyIfResourceCreateDetectionRule = {
    operation: ['create'],
    resource: ['detectionRule'],
}

export const createDetectionRuleDescription: INodeProperties[] = [
    {
        displayName: 'Detection Rule Body',
        name: 'detectionRuleBody',
        type: 'json',
        required: true,
        displayOptions: {
            show: showOnlyIfResourceCreateDetectionRule,
        },
        default: '',
        description: 'The JSON body for the new detection rule.',
    },
];