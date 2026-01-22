import type { AIInterview } from '../../types';
import {
  Bot,
  User,
  Clock,
  CheckCircle2,
  Calendar,
  ThumbsUp,
  ThumbsDown,
  AlertCircle,
} from 'lucide-react';

interface AIInterviewTabProps {
  aiInterview: AIInterview;
}

const recommendationConfig = {
  strong_yes: { label: 'Strong Yes', color: 'text-green-600 bg-green-50', icon: ThumbsUp },
  yes: { label: 'Yes', color: 'text-green-600 bg-green-50', icon: ThumbsUp },
  maybe: { label: 'Maybe', color: 'text-yellow-600 bg-yellow-50', icon: AlertCircle },
  no: { label: 'No', color: 'text-red-600 bg-red-50', icon: ThumbsDown },
  strong_no: { label: 'Strong No', color: 'text-red-600 bg-red-50', icon: ThumbsDown },
};

export default function AIInterviewTab({ aiInterview }: AIInterviewTabProps) {
  if (aiInterview.status === 'pending') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Bot className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">AI Interview Pending</h3>
        <p className="text-gray-500">The candidate has not yet completed the AI interview.</p>
      </div>
    );
  }

  if (aiInterview.status === 'scheduled') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Calendar className="w-8 h-8 text-blue-500" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">AI Interview Scheduled</h3>
        <p className="text-gray-500">
          Scheduled for{' '}
          {new Date(aiInterview.scheduledDate!).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
          })}
        </p>
      </div>
    );
  }

  const { evaluation, transcript } = aiInterview;
  const recConfig = evaluation ? recommendationConfig[evaluation.recommendation] : null;

  return (
    <div className="space-y-6">
      {/* Status Header */}
      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
        <CheckCircle2 className="w-6 h-6 text-green-600" />
        <div className="flex-1">
          <p className="font-medium text-green-800">Interview Completed</p>
          <p className="text-sm text-green-600">
            {new Date(aiInterview.completedDate!).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{aiInterview.duration} min</span>
        </div>
      </div>

      {evaluation && (
        <>
          {/* AI Recommendation */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="text-sm text-gray-500">AI Recommendation</p>
              {recConfig && (
                <div className={`flex items-center gap-2 mt-1 ${recConfig.color} px-3 py-1 rounded-full w-fit`}>
                  <recConfig.icon className="w-4 h-4" />
                  <span className="font-semibold">{recConfig.label}</span>
                </div>
              )}
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Overall Score</p>
              <p className="text-3xl font-bold text-blue-600">{aiInterview.overallScore}</p>
            </div>
          </div>

          {/* Summary */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Evaluation Summary</h3>
            <p className="text-gray-600 leading-relaxed">{evaluation.summary}</p>
          </section>

          {/* Scores Grid */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Score Breakdown</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(evaluation.scores).map(([key, value]) => (
                <div key={key} className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${(value / 5) * 100}%` }}
                      />
                    </div>
                    <span className="font-semibold text-gray-900">{value}/5</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Strengths & Concerns */}
          <div className="grid md:grid-cols-2 gap-6">
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-green-500" />
                Strengths
              </h3>
              <ul className="space-y-2">
                {evaluation.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="text-green-500 mt-1">+</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                Concerns
              </h3>
              <ul className="space-y-2">
                {evaluation.concerns.map((concern, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="text-amber-500 mt-1">!</span>
                    {concern}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </>
      )}

      {/* Transcript */}
      {transcript && transcript.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Interview Transcript</h3>
          <div className="space-y-4 bg-gray-50 rounded-lg p-4">
            {transcript.map((entry, index) => (
              <div
                key={index}
                className={`flex gap-3 ${entry.speaker === 'ai' ? '' : 'flex-row-reverse'}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    entry.speaker === 'ai'
                      ? 'bg-purple-100 text-purple-600'
                      : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  {entry.speaker === 'ai' ? (
                    <Bot className="w-4 h-4" />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                </div>
                <div
                  className={`flex-1 max-w-[80%] ${entry.speaker === 'ai' ? '' : 'text-right'}`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      entry.speaker === 'ai'
                        ? 'bg-white border border-gray-200'
                        : 'bg-blue-500 text-white'
                    }`}
                  >
                    <p className="text-sm">{entry.text}</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{entry.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
