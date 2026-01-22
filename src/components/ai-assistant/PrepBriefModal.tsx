import type { Candidate } from '../../types';
import {
  X,
  Zap,
  CheckCircle,
  AlertTriangle,
  MessageSquare,
  BarChart3,
  Users,
  Clock,
  Target,
  Copy,
  Check,
} from 'lucide-react';
import { useState } from 'react';

interface PrepBriefModalProps {
  candidate: Candidate;
  onClose: () => void;
}

export default function PrepBriefModal({ candidate, onClose }: PrepBriefModalProps) {
  const [copied, setCopied] = useState(false);
  const { prepBrief } = candidate;

  const handleCopy = () => {
    const text = `
60-Second Prep Brief for ${candidate.name}
==========================================

Quick Summary:
${prepBrief.quickSummary}

Strengths to Probe:
${prepBrief.strengths.map((s) => `- ${s.text}`).join('\n')}

Areas to Explore:
${prepBrief.concerns.map((c) => `- ${c.text}`).join('\n')}

Suggested Questions:
${prepBrief.suggestedQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n')}

Already Asked:
${prepBrief.alreadyAsked.map((q) => `- ${q}`).join('\n')}

Still Needs Coverage:
${prepBrief.needsCoverage.map((area) => `- ${area}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStarRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    return (
      <span className="text-yellow-500">
        {'★'.repeat(fullStars)}
        {hasHalf && '½'}
        {'☆'.repeat(5 - fullStars - (hasHalf ? 1 : 0))}
      </span>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">60-Second Prep Brief</h2>
                <p className="text-amber-100 text-sm">{candidate.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Quick Summary */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold text-gray-900">Quick Summary</h3>
            </div>
            <p className="text-gray-600 leading-relaxed bg-blue-50 p-4 rounded-lg border border-blue-100">
              {prepBrief.quickSummary}
            </p>
          </section>

          {/* Strengths & Concerns Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Strengths */}
            <section className="bg-green-50 rounded-lg p-4 border border-green-100">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-green-800">Strengths to Probe</h3>
              </div>
              <ul className="space-y-2">
                {prepBrief.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5">+</span>
                    <div>
                      <p className="text-gray-700">{strength.text}</p>
                      {strength.source && (
                        <p className="text-xs text-gray-500 mt-0.5">Source: {strength.source}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Concerns */}
            <section className="bg-amber-50 rounded-lg p-4 border border-amber-100">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-amber-800">Areas to Explore</h3>
              </div>
              <ul className="space-y-2">
                {prepBrief.concerns.map((concern, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-amber-500 mt-0.5">!</span>
                    <div>
                      <p className="text-gray-700">{concern.text}</p>
                      {concern.source && (
                        <p className="text-xs text-gray-500 mt-0.5">Source: {concern.source}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Suggested Questions */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="w-5 h-5 text-purple-500" />
              <h3 className="font-semibold text-gray-900">Suggested Questions</h3>
            </div>
            <div className="space-y-2">
              {prepBrief.suggestedQuestions.map((question, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 text-sm">"{question}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* Previous Feedback */}
          {prepBrief.previousFeedback.evaluationCount > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-5 h-5 text-indigo-500" />
                <h3 className="font-semibold text-gray-900">
                  Previous Feedback ({prepBrief.previousFeedback.evaluationCount} evaluations)
                </h3>
              </div>
              <div className="flex items-center gap-8 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500">Communication</p>
                  <div className="flex items-center gap-2">
                    {getStarRating(prepBrief.previousFeedback.communication)}
                    <span className="text-sm font-medium">
                      {prepBrief.previousFeedback.communication.toFixed(1)}/5
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Technical</p>
                  <div className="flex items-center gap-2">
                    {getStarRating(prepBrief.previousFeedback.technical)}
                    <span className="text-sm font-medium">
                      {prepBrief.previousFeedback.technical.toFixed(1)}/5
                    </span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Interview Coverage */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Already Asked */}
            {prepBrief.alreadyAsked.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <h3 className="font-semibold text-gray-900">Already Asked</h3>
                </div>
                <div className="space-y-1">
                  {prepBrief.alreadyAsked.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-500 line-through"
                    >
                      <Check className="w-4 h-4 text-green-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Needs Coverage */}
            {prepBrief.needsCoverage.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-blue-500" />
                  <h3 className="font-semibold text-gray-900">Still Needs Coverage</h3>
                </div>
                <div className="space-y-1">
                  {prepBrief.needsCoverage.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <div className="w-4 h-4 border-2 border-blue-500 rounded" />
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Interviewer Focus History */}
          {prepBrief.interviewerFocus.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-teal-500" />
                <h3 className="font-semibold text-gray-900">Previous Interviewer Focus</h3>
              </div>
              <div className="space-y-2">
                {prepBrief.interviewerFocus.map((interviewer, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="font-medium text-gray-800 text-sm">
                      {interviewer.name}
                    </span>
                    <div className="flex gap-2">
                      {interviewer.focus.map((focus) => (
                        <span
                          key={focus}
                          className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded text-xs"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Generated from {candidate.scorecard.evaluations.length + (candidate.aiInterview.status === 'completed' ? 1 : 0)} data sources
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Close & Start Interview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
