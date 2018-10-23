import {Conversation, ConversationAccent} from '../../models/conversation.entity';
import {Task} from '../../models/task.entity';
import {Employee} from "../../models/employee.entity";
import {Organization} from "../../models/organization.entity";
import {Medicine} from "../../models/medicine.entity";
import {InteractionScheme} from "../../models/interaction-scheme.entity";
import {Phase} from "../../models/phase.entity";
import {Indicator} from "../../models/indicator.entity";

const conversationsMock: Conversation[] = [];

const
    conv_names: string[] = [
        "Синагис®", "Пикамилон", "Ренимприл", "Кемерувир", ""
    ],
    conv_risks: string[] = ["Сложный процесс упаковки, 30% дефекта", "Слабое исполнение результатов переговоров", "Отмена встречи", "Изменение в законодательстве"],
    conv_accents: ConversationAccent[] = [
        ConversationAccent.COUNTERPARTY,
        ConversationAccent.MEDICINE,
        ConversationAccent.MNN,
        ConversationAccent.NOSOLOGY
    ],
    conv_tasks: Task[] = [
        {
            id: 1, name: 'task1', status: 0, deadline: new Date('2018-12-10'), prority: 0,
            taskEExecutor: null, taskEmitter: null, taskLiable: null, taskMPExecutor: null, controllers: null
        },
        {
            id: 1, name: 'task2', status: 0, deadline: new Date('2018-11-10'), prority: 0,
            taskEExecutor: null, taskEmitter: null, taskLiable: null, taskMPExecutor: null, controllers: null
        },
        {
            id: 1, name: 'task3', status: 0, deadline: new Date('2018-10-10'), prority: 0,
            taskEExecutor: null, taskEmitter: null, taskLiable: null, taskMPExecutor: null, controllers: null
        },
        {
            id: 1, name: 'task4', status: 0, deadline: new Date('2018-10-10'), prority: 0,
            taskEExecutor: null, taskEmitter: null, taskLiable: null, taskMPExecutor: null, controllers: null
        },
        {
            id: 1, name: 'task5', status: 0, deadline: new Date('2018-10-10'), prority: 0,
            taskEExecutor: null, taskEmitter: null, taskLiable: null, taskMPExecutor: null, controllers: null
        },
    ],
    conv_employee: Employee[] = [

        {
            id: 1,
            name: 'Паршина В. В.',
            photo: 'parshina.png',
            position: 'Группа анализа и планирования',
            archival: false,
            created: new Date('1970-01-01'),
            updated: new Date('1970-01-01'),
        },
        {
            id: 2,
            name: 'Перминов А. А.',
            photo: 'perminov.png',
            position: 'Группа анализа и планирования',
            archival: false,
            created: new Date('1970-01-01'),
            updated: new Date('1970-01-01'),
        },
        {
            id: 3,
            name: 'Потапов А. В.',
            photo: 'potapov.png',
            position: 'Группа разработки',
            archival: false,
            created: new Date('1970-01-01'),
            updated: new Date('1970-01-01'),
        },
        {
            id: 3,
            name: 'Печенин А. В.',
            photo: 'pechenin.png',
            position: 'Группа разработки',
            archival: false,
            created: new Date('1970-01-01'),
            updated: new Date('1970-01-01'),
        }
    ],
    conv_counterparties: Organization[] = [
        {
            id: 1,
            name: 'Johnson & Johnson',
            photo: 'l_jonson.png',
            employees: [],
            competitor: null,
            conversations: [],
            conversations_competitors: [],
            counterparty: true,
        },
        {
            id: 2,
            name: 'Merck',
            photo: 'l_merck.png',
            employees: [],
            competitor: null,
            conversations: [],
            conversations_competitors: [],
            counterparty: true,
        },
        {
            id: 2,
            name: 'Celgene',
            photo: 'l_celgene.png',
            employees: [],
            competitor: null,
            conversations: [],
            conversations_competitors: [],
            counterparty: true,
        }
    ],
    conv_medicine: Medicine[] = [
        {
            id: 1,
            name: 'Синагис®',
            mnn: {
                id: 1,
                name: 'Паливизумаб1'
            },
            nosology: {
                id: 1,
                name: 'B97.4 Респираторно-синцитиал...'
            },
        },
        {
            id: 2,
            name: 'Пикамилон®',
            mnn: {
                id: 1,
                name: 'Паливизумаб2'
            },
            nosology: {
                id: 1,
                name: 'B97.4 Респираторно-синцитиал...'
            },
        },
        {
            id: 3,
            name: 'Ренимприл®',
            mnn: {
                id: 1,
                name: 'Паливизумаб3'
            },
            nosology: {
                id: 1,
                name: 'B97.4 Респираторно-синцитиал...'
            },
        },
        {
            id: 4,
            name: 'Кемерувир®',
            mnn: {
                id: 1,
                name: 'Паливизумаб4'
            },
            nosology: {
                id: 1,
                name: 'B97.4 Респираторно-синцитиал...'
            },
        },
    ],
    conv_interaction_schemas: InteractionScheme[] = [
        {id: 0, name: "Дистрибьюция"},
        {id: 1, name: "Прямые продажи"},
        {id: 2, name: null},
    ],
    conv_phases: Phase[] = [
        {id: 1},
        {id: 2},
        {id: 3},
    ],
    conv_indicators: Indicator[] = [
    {
        id: 0,
        archival: false,
        conversationId: 1,
        meetingId: null,
        values: {
            external: 20,
            internal: 10,
        },
        created: new Date('2018-10-11'),
        updated: new Date('2018-10-12')
    },
    {
        id: 1,
        archival: false,
        conversationId: 1,
        meetingId: null,
        values: {
            external: 8,
            internal: 10,
        },
        created: new Date('2018-10-11'),
        updated: new Date('2018-10-12')
    },
    {
        id: 0,
        archival: false,
        conversationId: 1,
        meetingId: null,
        values: {
            external: 20,
            internal: 10,
        },
        created: new Date('2018-10-11'),
        updated: new Date('2018-10-12')
    },
    {
        id: 1,
        archival: false,
        conversationId: 1,
        meetingId: null,
        values: {
            external: 8,
            internal: 10,
        },
        created: new Date('2018-10-11'),
        updated: new Date('2018-10-12')
    },
    {
        id: 0,
        archival: false,
        conversationId: 1,
        meetingId: null,
        values: {
            external: 20,
            internal: 10,
        },
        created: new Date('2018-10-11'),
        updated: new Date('2018-10-12')
    },
    {
        id: 1,
        archival: false,
        conversationId: 1,
        meetingId: null,
        values: {
            external: 8,
            internal: 10,
        },
        created: new Date('2018-10-11'),
        updated: new Date('2018-10-12')
    },
    {
        id: 0,
        archival: false,
        conversationId: 1,
        meetingId: null,
        values: {
            external: 20,
            internal: 10,
        },
        created: new Date('2018-10-11'),
        updated: new Date('2018-10-12')
    },
    {
        id: 1,
        archival: false,
        conversationId: 1,
        meetingId: null,
        values: {
            external: 8,
            internal: 10,
        },
        created: new Date('2018-10-11'),
        updated: new Date('2018-10-12')
    },
    {
        id: 0,
        archival: false,
        conversationId: 1,
        meetingId: null,
        values: {
            external: 20,
            internal: 10,
        },
        created: new Date('2018-10-11'),
        updated: new Date('2018-10-12')
    },
    {
        id: 1,
        archival: false,
        conversationId: 1,
        meetingId: null,
        values: {
            external: 8,
            internal: 10,
        },
        created: new Date('2018-10-11'),
        updated: new Date('2018-10-12')
    },
    {
        id: 0,
        archival: false,
        conversationId: 1,
        meetingId: null,
        values: {
            external: 20,
            internal: 10,
        },
        created: new Date('2018-10-11'),
        updated: new Date('2018-10-12')
    },
    {
        id: 1,
        archival: false,
        conversationId: 1,
        meetingId: null,
        values: {
            external: 8,
            internal: 10,
        },
        created: new Date('2018-10-11'),
        updated: new Date('2018-10-12')
    },
],
    count: number = 20;

const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min)
};

for (let i = 0; i < count; i++) {
    const
        id = i,
        name = conv_names[random(0, conv_names.length)],
        accent = conv_accents[random(0, conv_accents.length)],
        marginality = random(1, 100),
        interaction_schema = conv_interaction_schemas[random(0, conv_interaction_schemas.length)],
        medicine = conv_medicine[random(0, conv_medicine.length)],
        counterparty = conv_counterparties[random(0, conv_counterparties.length)],
        leader = conv_employee[random(0, conv_employee.length)],
        liable = conv_employee[random(0, conv_employee.length)],
        admin = conv_employee[random(0, conv_employee.length)],
        phase = conv_phases[random(0, conv_phases.length)],
        favorite = Boolean(random(0, 2)),
        indicators: any[] = [],
        tasks: any[] = [],
        risks: string[] = [];
    const
        countIndicators = random(0, 20),
        countTasks = random(0, 20),
        countRisks = random(0,4);
    for (let ii = 0; ii < countIndicators; ii++) {
        indicators.push(conv_indicators[random(0, conv_indicators.length)]);
    }

    for (let ii = 0; ii < countTasks; ii++) {
        tasks.push(conv_tasks[random(0, conv_tasks.length)]);
    }

    for (let ii = 0; ii < countRisks; ii++) {
        risks.push(conv_risks[random(0, conv_risks.length)]);
    }

    conversationsMock.push({
        id: id,
        name: name,
        accent: accent,
        marginality: marginality,
        interaction_schema: interaction_schema,
        phase: phase,
        medicine: medicine,
        conv_counterparty: counterparty,
        conv_leader: leader,
        conv_liable: liable,
        conv_admin: admin,
        favorite: favorite,
        indicators: indicators,
        tasks: tasks,
        risks: risks,
        archival: false,
        updated: new Date(),
        created: new Date()
    });
}

export default conversationsMock;
