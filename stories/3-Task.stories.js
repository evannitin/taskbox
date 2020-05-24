import React from 'react';
import { action } from '@storybook/addon-actions';

import Task from '../src/components/Task';


export default {
 component: Task,
 title: 'Task',
 // Our exports that end in "Data" are not stories.
 excludeStories: /.*Data$/,
}

export const taskData = {   
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updateAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData ={
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

export const Default = () => <Task task={{ ...taskData }} {...actionsData} />;

export const Pinned = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />;

export const Archived = () => (
  <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
);

//export const Default = () => <Task task={{taskData},{actionsData}}  />;

//export const Pinned = ()  => <Task onPinTask={actionsData}  />

//export const Pinned = ()  => <Task task={{taskData, state: 'TASK_PINNED'},{actionData}} />

// export const Archived =() =>(
//     <Task task={{taskData,state:'TASK_ARCHIVED'}, {actionsData}} />
// );
