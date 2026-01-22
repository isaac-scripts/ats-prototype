import type { Candidate } from '../types';
import { User, MapPin } from 'lucide-react';

interface CandidateListProps {
  candidates: Candidate[];
  selectedId: string;
  onSelect: (candidate: Candidate) => void;
}

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
  offer: 'Offer',
  hired: 'Hired',
  rejected: 'Rejected',
};

export default function CandidateList({ candidates, selectedId, onSelect }: CandidateListProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      {candidates.map((candidate) => (
        <button
          key={candidate.id}
          onClick={() => onSelect(candidate)}
          className={`w-full p-4 text-left border-b border-gray-100 hover:bg-gray-50 transition-colors ${
            selectedId === candidate.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
          }`}
        >
          <div className="flex items-start gap-3">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              {candidate.avatar ? (
                <img
                  src={candidate.avatar}
                  alt={candidate.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <User className="w-5 h-5 text-white" />
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-medium text-gray-900 truncate">{candidate.name}</h3>
                <span className="text-sm font-semibold text-blue-600">{candidate.matchScore}%</span>
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                <MapPin className="w-3 h-3" />
                <span className="truncate">{candidate.location}</span>
              </div>

              <div className="flex items-center justify-between mt-2">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[candidate.status]}`}
                >
                  {statusLabels[candidate.status]}
                </span>
                <span className="text-xs text-gray-400">
                  {new Date(candidate.appliedDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
