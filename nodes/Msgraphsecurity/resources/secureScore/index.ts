import { INodeProperties } from "n8n-workflow";

const showOnlyIfOperationIsSecureScore = {
            operation: ['secureScore'],
} 

export const secureScoreDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyIfOperationIsSecureScore,
        },
        options: [
            {
                name: 'Get',
                value: 'get',
                description: 'Get the secure score',
                action: 'Get the secure score',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/secureScores?$top=1',
                    },
                },
            },
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all secure scores',
                action: 'Get all secure scores',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/secureScores',
                    },
                },  
            }
        ],
        default: 'get',         
    },


]