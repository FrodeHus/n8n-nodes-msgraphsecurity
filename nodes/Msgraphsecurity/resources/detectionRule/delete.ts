import { INodeProperties } from "n8n-workflow";

const showIfDeleteDetectionRule = {
    operation: ['delete'],
    resource: ['detectionRule'],
}

export const deleteDetectionRuleDescription: INodeProperties[] = [
    {
        displayName: 'Detection Rule ID',
        name: 'detectionRuleId',
        type: 'number',
        required: true,
        displayOptions: {       
            show: showIfDeleteDetectionRule,
        },
        default: 0,
        description: 'The unique identifier of the detection rule to delete.',
    },
];