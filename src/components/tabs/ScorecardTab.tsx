import type { Scorecard } from '../../types';
import { Star, ThumbsUp, ThumbsDown, AlertCircle, User } from 'lucide-react';

interface ScorecardTabProps {
  scorecard: Scorecard;
}

const recommendationConfig = {
  strong_yes: { label: 'Strong Yes', color: 'text-green-600 bg-green-50', icon: ThumbsUp },
  yes: { label: 'Yes', color: 'text-green-600 bg-green-50', icon: ThumbsUp },
  maybe: { label: 'Maybe', color: 'text-yellow-600 bg-yellow-50', icon: AlertCircle },
  no: { label: 'No', color: 'text-red-600 bg-red-50', icon: ThumbsDown },
  strong_no: { label: 'Strong No', color: 'text-red-600 bg-red-50', icon: ThumbsDown },
};

export default function ScorecardTab({ scorecard }: ScorecardTabProps) {
  if (scorecard.evaluations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Star className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Scorecards Yet</h3>
        <p className="text-gray-500">Evaluations will appear here after interviews are completed.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {scorecard.evaluations.map((evaluation) => {
        const recConfig = recommendationConfig[evaluation.recommendation];
        const RecIcon = recConfig.icon;

        return (
          <div
            key={evaluation.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{evaluation.evaluator}</h4>
                    <p className="text-sm text-gray-500">{evaluation.evaluatorRole}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{evaluation.interviewType}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(evaluation.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Overall Rating & Recommendation */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Overall Rating</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= evaluation.overallRating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 font-semibold text-gray-900">
                      {evaluation.overallRating}/5
                    </span>
                  </div>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${recConfig.color}`}>
                  <RecIcon className="w-4 h-4" />
                  <span className="font-medium">{recConfig.label}</span>
                </div>
              </div>

              {/* Criteria Scores */}
              <div className="space-y-3 mb-6">
                {evaluation.criteria.map((criterion) => (
                  <div key={criterion.name} className="flex items-center justify-between">
                    <span className="text-gray-600">{criterion.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: criterion.maxRating }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < criterion.rating ? 'bg-blue-500' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 w-10 text-right">
                        {criterion.rating}/{criterion.maxRating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Notes */}
              {evaluation.notes && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-500 mb-1">Notes</p>
                  <p className="text-gray-700">{evaluation.notes}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
