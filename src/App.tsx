import { useState } from 'react';
import { mockCandidates } from './data/mockData';
import type { Candidate } from './types';
import CandidateList from './components/CandidateList';
import CandidateDetail from './components/CandidateDetail';

function App() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate>(mockCandidates[0]);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Candidate List Sidebar */}
      <div className="w-80 border-r border-gray-200 bg-white flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900">Applications</h1>
          <p className="text-sm text-gray-500 mt-1">Senior Frontend Engineer</p>
        </div>
        <CandidateList
          candidates={mockCandidates}
          selectedId={selectedCandidate.id}
          onSelect={setSelectedCandidate}
        />
      </div>

      {/* Candidate Detail View */}
      <div className="flex-1 overflow-hidden">
        <CandidateDetail candidate={selectedCandidate} />
      </div>
    </div>
  );
}

export default App;
