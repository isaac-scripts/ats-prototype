export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  avatar?: string;
  appliedRole: string;
  appliedDate: string;
  status: 'new' | 'screening' | 'interview' | 'offer' | 'hired' | 'rejected';
  matchScore: number;
  profile: CandidateProfile;
  assessment: Assessment;
  aiInterview: AIInterview;
  notes: Note[];
  scorecard: Scorecard;
  activity: Activity[];
  prepBrief: PrepBrief;
}

export interface CandidateProfile {
  summary: string;
  experience: WorkExperience[];
  education: Education[];
  skills: string[];
  resumeUrl?: string;
  customQuestions: CustomQuestion[];
}

export interface WorkExperience {
  company: string;
  title: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  graduationDate: string;
  gpa?: string;
}

export interface CustomQuestion {
  question: string;
  answer: string;
}

export interface Assessment {
  overallScore: number;
  completedDate: string;
  sections: AssessmentSection[];
}

export interface AssessmentSection {
  name: string;
  score: number;
  maxScore: number;
  percentile: number;
}

export interface AIInterview {
  status: 'pending' | 'completed' | 'scheduled';
  scheduledDate?: string;
  completedDate?: string;
  duration?: number;
  overallScore?: number;
  evaluation?: AIEvaluation;
  transcript?: TranscriptEntry[];
}

export interface AIEvaluation {
  summary: string;
  strengths: string[];
  concerns: string[];
  recommendation: 'strong_yes' | 'yes' | 'maybe' | 'no' | 'strong_no';
  scores: {
    communication: number;
    technicalDepth: number;
    problemSolving: number;
    cultureFit: number;
  };
}

export interface TranscriptEntry {
  speaker: 'ai' | 'candidate';
  text: string;
  timestamp: string;
}

export interface Note {
  id: string;
  author: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
  tags?: string[];
}

export interface Scorecard {
  evaluations: ScorecardEvaluation[];
}

export interface ScorecardEvaluation {
  id: string;
  evaluator: string;
  evaluatorRole: string;
  interviewType: string;
  date: string;
  overallRating: number;
  recommendation: 'strong_yes' | 'yes' | 'maybe' | 'no' | 'strong_no';
  criteria: ScorecardCriterion[];
  notes: string;
}

export interface ScorecardCriterion {
  name: string;
  rating: number;
  maxRating: number;
  notes?: string;
}

export interface Activity {
  id: string;
  type: 'applied' | 'screened' | 'interview_scheduled' | 'interview_completed' | 'assessment_completed' | 'note_added' | 'status_changed' | 'email_sent';
  description: string;
  timestamp: string;
  actor?: string;
  metadata?: Record<string, string>;
}

export interface PrepBrief {
  quickSummary: string;
  strengths: PrepItem[];
  concerns: PrepItem[];
  suggestedQuestions: string[];
  previousFeedback: {
    communication: number;
    technical: number;
    evaluationCount: number;
  };
  alreadyAsked: string[];
  needsCoverage: string[];
  interviewerFocus: {
    name: string;
    focus: string[];
  }[];
}

export interface PrepItem {
  text: string;
  source?: string;
}

export type TabType = 'profile' | 'assessment' | 'ai-interview' | 'notes' | 'scorecard' | 'activity';
