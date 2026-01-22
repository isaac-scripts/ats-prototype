import { useState } from 'react';
import type { Candidate, TabType } from '../types';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Zap,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import ProfileTab from './tabs/ProfileTab';
import AssessmentTab from './tabs/AssessmentTab';
import AIInterviewTab from './tabs/AIInterviewTab';
import NotesTab from './tabs/NotesTab';
import ScorecardTab from './tabs/ScorecardTab';
import ActivityTab from './tabs/ActivityTab';
import AIAssistant from './ai-assistant/AIAssistant';
import PrepBriefModal from './ai-assistant/PrepBriefModal';

interface CandidateDetailProps {
  candidate: Candidate;
}

const tabs: { id: TabType; label: string }[] = [
  { id: 'profile', label: 'Profile' },
  { id: 'assessment', label: 'Assessment' },
  { id: 'ai-interview', label: 'AI Interview' },
  { id: 'notes', label: 'Notes' },
  { id: 'scorecard', label: 'Scorecard' },
  { id: 'activity', label: 'Activity' },
];

const statusColors: Record<Candidate['status'], string> = {
  new: 'bg-blue-100 text-blue-700',
  screening: 'bg-yellow-100 text-yellow-700',
  interview: 'bg-purple-100 text-purple-700',
  offer: 'bg-green-100 text-green-700',
  hired: 'bg-emerald-100 text-emerald-700',
  rejected: 'bg-gray-100 text-gray-500',
};

const statusLabels: Record<Candidate['status'], string> = {
  new: 'New',
  screening: 'Screening',
  interview: 'Interview',
  offer: 'Offer Extended',
  hired: 'Hired',
  rejected: 'Rejected',
};

export default function CandidateDetail({ candidate }: CandidateDetailProps) {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [isAssistantExpanded, setIsAssistantExpanded] = useState(true);
  const [showPrepBrief, setShowPrepBrief] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileTab profile={candidate.profile} />;
      case 'assessment':
        return <AssessmentTab assessment={candidate.assessment} />;
      case 'ai-interview':
        return <AIInterviewTab aiInterview={candidate.aiInterview} />;
      case 'notes':
        return <NotesTab notes={candidate.notes} />;
      case 'scorecard':
        return <ScorecardTab scorecard={candidate.scorecard} />;
      case 'activity':
        return <ActivityTab activities={candidate.activity} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-white" />
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-semibold text-gray-900">{candidate.name}</h2>
                <span
                  className={`text-sm px-3 py-1 rounded-full font-medium ${statusColors[candidate.status]}`}
                >
                  {statusLabels[candidate.status]}
                </span>
              </div>
              <p className="text-gray-600 mt-1">{candidate.appliedRole}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {candidate.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  {candidate.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {candidate.location}
                </span>
              </div>
            </div>
          </div>

          {/* Match Score & Prep Button */}
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{candidate.matchScore}%</div>
              <div className="text-xs text-gray-500">Match Score</div>
            </div>
            <button
              onClick={() => setShowPrepBrief(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-orange-500/25"
            >
              <Zap className="w-5 h-5" />
              60-Sec Prep
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mt-6 border-b border-gray-200 -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6">{renderTabContent()}</div>

        {/* AI Assistant Panel */}
        <div
          className={`border-l border-gray-200 bg-gray-50 transition-all duration-300 ${
            isAssistantExpanded ? 'w-96' : 'w-12'
          }`}
        >
          {isAssistantExpanded ? (
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                <h3 className="font-semibold text-gray-900">AI Assistant</h3>
                <button
                  onClick={() => setIsAssistantExpanded(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 rotate-90" />
                </button>
              </div>
              <AIAssistant candidate={candidate} onOpenPrepBrief={() => setShowPrepBrief(true)} />
            </div>
          ) : (
            <button
              onClick={() => setIsAssistantExpanded(true)}
              className="w-full h-full flex items-center justify-center hover:bg-gray-100"
            >
              <ChevronUp className="w-5 h-5 text-gray-500 rotate-90" />
            </button>
          )}
        </div>
      </div>

      {/* Prep Brief Modal */}
      {showPrepBrief && (
        <PrepBriefModal candidate={candidate} onClose={() => setShowPrepBrief(false)} />
      )}
    </div>
  );
}
