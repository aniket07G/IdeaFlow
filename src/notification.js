import notifee, {
    TimestampTrigger,
    TriggerType,
    AndroidImportance,
    EventType,
} from '@notifee/react-native';

export const createNotificationChannel = async () => {
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        importance: AndroidImportance.HIGH,
    });
    console.log('Notification channel created:', channelId);
};

export const scheduleNotification = async (id, name) => {
  const date = new Date(Date.now() + 10 * 1000);

  const trigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(),
  };

  await notifee.createTriggerNotification(
    {
      id: `task-${id}`,
      title: 'Your Idea is Live!',
      body: `You've just added a fresh idea: ${name}`,
      android: {
        channelId: 'default',
        smallIcon: 'ic_launcher',
      },
    },
    trigger
  );
};


export const cancelNotification = async (taskId) => {
    await notifee.cancelNotification(`task-${taskId}`);
};
