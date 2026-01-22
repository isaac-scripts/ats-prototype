import type { Assessment } from '../../types';
import { Trophy, TrendingUp } from 'lucide-react';

interface AssessmentTabProps {
  assessment: Assessment;
}

export default function AssessmentTab({ assessment }: AssessmentTabProps) {
  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600 bg-green-50';
    if (percentage >= 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getBarColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      {/* Overall Score */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 text-sm">Overall Assessment Score</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-5xl font-bold">{assessment.overallScore}</span>
              <span className="text-2xl text-blue-200">/100</span>
            </div>
          </div>
          <Trophy className="w-16 h-16 text-yellow-300 opacity-80" />
        </div>
        <p className="text-blue-100 text-sm mt-3">
          Completed on {new Date(assessment.completedDate).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </div>

      {/* Section Scores */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Section Breakdown</h3>
        <div className="space-y-4">
          {assessment.sections.map((section) => {
            const percentage = Math.round((section.score / section.maxScore) * 100);
            return (
              <div key={section.name} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{section.name}</h4>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-sm font-semibold px-2 py-0.5 rounded ${getScoreColor(percentage)}`}
                    >
                      {section.score}/{section.maxScore}
                    </span>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${getBarColor(percentage)}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                  <TrendingUp className="w-4 h-4" />
                  <span>{section.percentile}th percentile</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Legend */}
      <div className="flex items-center gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span>80%+ Strong</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <span>60-79% Average</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span>&lt;60% Needs Work</span>
        </div>
      </div>
    </div>
  );
}
