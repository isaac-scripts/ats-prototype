import type { Activity } from '../../types';
import {
  FileText,
  Search,
  Calendar,
  CheckCircle,
  ClipboardList,
  MessageSquare,
  RefreshCw,
  Mail,
} from 'lucide-react';

interface ActivityTabProps {
  activities: Activity[];
}

const activityConfig: Record<Activity['type'], { icon: typeof FileText; color: string }> = {
  applied: { icon: FileText, color: 'bg-blue-100 text-blue-600' },
  screened: { icon: Search, color: 'bg-purple-100 text-purple-600' },
  interview_scheduled: { icon: Calendar, color: 'bg-amber-100 text-amber-600' },
  interview_completed: { icon: CheckCircle, color: 'bg-green-100 text-green-600' },
  assessment_completed: { icon: ClipboardList, color: 'bg-indigo-100 text-indigo-600' },
  note_added: { icon: MessageSquare, color: 'bg-gray-100 text-gray-600' },
  status_changed: { icon: RefreshCw, color: 'bg-teal-100 text-teal-600' },
  email_sent: { icon: Mail, color: 'bg-pink-100 text-pink-600' },
};

export default function ActivityTab({ activities }: ActivityTabProps) {
  // Sort activities by timestamp, newest first
  const sortedActivities = [...activities].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      });
    }

    if (diffInHours < 48) {
      return `Yesterday at ${date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      })}`;
    }

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const groupActivitiesByDate = () => {
    const groups: { [key: string]: Activity[] } = {};

    sortedActivities.forEach((activity) => {
      const date = new Date(activity.timestamp);
      const dateKey = date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      });

      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(activity);
    });

    return groups;
  };

  const groupedActivities = groupActivitiesByDate();

  return (
    <div className="space-y-6">
      {Object.entries(groupedActivities).map(([date, dateActivities]) => (
        <div key={date}>
          <h3 className="text-sm font-medium text-gray-500 mb-4">{date}</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

            {/* Activities */}
            <div className="space-y-4">
              {dateActivities.map((activity) => {
                const config = activityConfig[activity.type];
                const Icon = config.icon;

                return (
                  <div key={activity.id} className="relative flex gap-4">
                    {/* Icon */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${config.color}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white border border-gray-200 rounded-lg p-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-gray-900">{activity.description}</p>
                          {activity.actor && (
                            <p className="text-sm text-gray-500 mt-0.5">by {activity.actor}</p>
                          )}
                        </div>
                        <span className="text-xs text-gray-400 whitespace-nowrap ml-4">
                          {formatTimestamp(activity.timestamp)}
                        </span>
                      </div>

                      {/* Metadata */}
                      {activity.metadata && Object.keys(activity.metadata).length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {Object.entries(activity.metadata).map(([key, value]) => (
                            <span
                              key={key}
                              className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded"
                            >
                              {key}: {value}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}

      {activities.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>No activity recorded yet.</p>
        </div>
      )}
    </div>
  );
}
