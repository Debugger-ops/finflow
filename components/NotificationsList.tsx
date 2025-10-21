"use client";
// app/components/NotificationsList.tsx
import React from 'react';

// Define the Notification type
export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
}

// Props for the NotificationsList component
interface NotificationsListProps {
  notifications: Notification[];
}

// NotificationsList component
const NotificationsList: React.FC<NotificationsListProps> = ({ notifications }) => {
  return (
    <div className="notifications-list">
      <h3>Recent Notifications</h3>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id} className="notification-item">
            <h4>{notification.title}</h4>
            <p>{notification.message}</p>
            <span className="notification-time">{notification.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsList;
