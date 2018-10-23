import {GroupingType} from '@app/modules/conversations/models/types';
import {Conversation} from '../../models/conversation.entity';

export function groupingMock<
    TArray, TField extends keyof TArray>(groups: any[],
                                           array: TArray[],
                                           fieldName: string) {
    const dict = {};
    groups.forEach((g: any) => {
        dict[JSON.stringify(g)] = array
            .filter(a => a[fieldName]['id'] === g['id']);
    });
    return dict;
}

export function getConversationPropByGrouping(groupingType: GroupingType): keyof Conversation {
    switch (groupingType) {
        case 'leader':
            return 'conv_leader';
        case 'medicine':
            return 'medicine';
        case 'liable':
            return 'conv_counterparty';
    }
}

export function getGroupingConversation(groupingType: GroupingType,
                                        conversations: Conversation[]): any[] {
    switch (groupingType) {
        case 'leader':
            return Array.from(new Set(conversations.map(c => c.conv_leader)).values());
        case 'medicine':
            return Array.from(new Set(conversations.map(c => c.medicine)).values());
        case 'liable':
            return Array.from(new Set(conversations.map(c => c.conv_counterparty)).values());

    }
}
