import { useState } from 'react';
import type { Candidate } from '../../types';
import {
  Send,
  Zap,
  AlertTriangle,
  FileText,
  Lightbulb,
  User,
  Bot,
  MessageCircle,
  Target,
} from 'lucide-react';

interface AIAssistantProps {
  candidate: Candidate;
  onOpenPrepBrief: () => void;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const quickActions = [
  { id: 'red-flags', label: 'Red Flags', icon: AlertTriangle, color: 'text-red-500' },
  { id: 'summary', label: 'Resume Summary', icon: FileText, color: 'text-blue-500' },
  { id: 'fit-analysis', label: 'Role Fit Analysis', icon: Target, color: 'text-purple-500' },
  { id: 'strengths', label: 'Key Strengths', icon: Lightbulb, color: 'text-amber-500' },
];

const suggestionChips = [
  'What questions should I ask?',
  'Compare to other candidates',
  'What did previous interviewers focus on?',
  'Summarize AI interview',
];

export default function AIAssistant({ candidate, onOpenPrepBrief }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes('red flag') || lowerQuery.includes('concern')) {
      return `Based on the evaluation data for ${candidate.name}:

**Potential Red Flags:**
${candidate.prepBrief.concerns.map((c) => `- ${c.text} *(Source: ${c.source})*`).join('\n')}

**Recommendation:** Focus your questions on these areas to gather more information and make an informed decision.

Would you like me to suggest specific questions to probe these concerns?`;
    }

    if (lowerQuery.includes('summary') || lowerQuery.includes('background')) {
      return `**${candidate.name} - Quick Summary**

${candidate.profile.summary}

**Current Status:** ${candidate.status}
**Match Score:** ${candidate.matchScore}%

**Recent Experience:**
${candidate.profile.experience
  .slice(0, 2)
  .map((exp) => `- ${exp.title} at ${exp.company} (${exp.startDate} - ${exp.endDate || 'Present'})`)
  .join('\n')}

**Key Skills:** ${candidate.profile.skills.slice(0, 6).join(', ')}`;
    }

    if (lowerQuery.includes('fit') || lowerQuery.includes('analysis')) {
      const score = candidate.matchScore;
      const fitLevel = score >= 85 ? 'Strong' : score >= 70 ? 'Good' : score >= 50 ? 'Moderate' : 'Weak';

      return `**Role Fit Analysis for ${candidate.name}**

**Overall Fit:** ${fitLevel} (${score}% match)

**Strengths Aligned with Role:**
${candidate.prepBrief.strengths.slice(0, 3).map((s) => `- ${s.text}`).join('\n')}

**Gaps to Explore:**
${candidate.prepBrief.concerns.slice(0, 2).map((c) => `- ${c.text}`).join('\n')}

**Recommendation:** ${
        score >= 80
          ? 'Strong candidate worth prioritizing. Focus on validating cultural fit.'
          : score >= 60
          ? 'Promising candidate. Probe the identified gaps more deeply.'
          : 'May not be the right fit for this role. Consider alternative positions.'
      }`;
    }

    if (lowerQuery.includes('strength')) {
      return `**Key Strengths for ${candidate.name}:**

${candidate.prepBrief.strengths.map((s) => `- ${s.text} *(${s.source})*`).join('\n')}

These strengths were identified across the resume, assessment, and interview data.`;
    }

    if (lowerQuery.includes('question')) {
      return `**Suggested Questions for ${candidate.name}:**

${candidate.prepBrief.suggestedQuestions.map((q, i) => `${i + 1}. "${q}"`).join('\n\n')}

**Already Asked in Previous Rounds:**
${candidate.prepBrief.alreadyAsked.map((q) => `- ${q}`).join('\n')}

Avoid repeating these to maximize your interview time.`;
    }

    if (lowerQuery.includes('previous') || lowerQuery.includes('interviewer')) {
      if (candidate.prepBrief.interviewerFocus.length === 0) {
        return `No previous interviews have been conducted for ${candidate.name} yet. You'll be the first interviewer!`;
      }

      return `**Previous Interviewer Focus for ${candidate.name}:**

${candidate.prepBrief.interviewerFocus
  .map((i) => `**${i.name}:** Focused on ${i.focus.join(', ')}`)
  .join('\n\n')}

**Suggested Areas for You:**
${candidate.prepBrief.needsCoverage.map((area) => `- ${area}`).join('\n')}

This ensures comprehensive coverage across all interview rounds.`;
    }

    if (lowerQuery.includes('ai interview') || lowerQuery.includes('transcript')) {
      if (candidate.aiInterview.status !== 'completed') {
        return `The AI interview for ${candidate.name} has not been completed yet. Current status: ${candidate.aiInterview.status}.`;
      }

      const eval_ = candidate.aiInterview.evaluation;
      return `**AI Interview Summary for ${candidate.name}:**

${eval_?.summary}

**Scores:**
- Communication: ${eval_?.scores.communication}/5
- Technical Depth: ${eval_?.scores.technicalDepth}/5
- Problem Solving: ${eval_?.scores.problemSolving}/5
- Culture Fit: ${eval_?.scores.cultureFit}/5

**AI Recommendation:** ${eval_?.recommendation.replace('_', ' ').toUpperCase()}`;
    }

    // Default response
    return `I can help you prepare for your interview with ${candidate.name}. Here are some things I can help with:

- **Red flags** - Identify potential concerns
- **Resume summary** - Quick background overview
- **Role fit analysis** - How well they match the position
- **Suggested questions** - What to ask based on gaps
- **Previous interviewer focus** - What's already been covered

What would you like to know?`;
  };

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = generateResponse(text);
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickAction = (actionId: string) => {
    const prompts: Record<string, string> = {
      'red-flags': 'What are the red flags or concerns for this candidate?',
      summary: 'Give me a quick summary of this candidate\'s background',
      'fit-analysis': 'How well does this candidate fit the role?',
      strengths: 'What are the key strengths of this candidate?',
    };
    handleSend(prompts[actionId]);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Quick Actions */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action) => (
            <button
              key={action.id}
              onClick={() => handleQuickAction(action.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 transition-colors"
            >
              <action.icon className={`w-3.5 h-3.5 ${action.color}`} />
              {action.label}
            </button>
          ))}
        </div>

        {/* 60-Sec Prep Shortcut */}
        <button
          onClick={onOpenPrepBrief}
          className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium hover:from-amber-600 hover:to-orange-600 transition-all text-sm"
        >
          <Zap className="w-4 h-4" />
          Get 60-Second Prep Brief
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-6 h-6 text-purple-500" />
            </div>
            <p className="text-gray-600 text-sm">
              Ask me anything about {candidate.name}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {suggestionChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSend(chip)}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs text-gray-600 transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user'
                      ? 'bg-blue-500'
                      : 'bg-purple-100'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-purple-600" />
                  )}
                </div>
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-sm ${
                    message.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white border border-gray-200 text-gray-700'
                  }`}
                >
                  <div className="whitespace-pre-wrap prose prose-sm max-w-none">
                    {message.content.split('\n').map((line, i) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return <p key={i} className="font-semibold mt-2 mb-1">{line.replace(/\*\*/g, '')}</p>;
                      }
                      if (line.startsWith('- ')) {
                        return <p key={i} className="ml-2">{line}</p>;
                      }
                      if (line.match(/^\d+\./)) {
                        return <p key={i} className="ml-2">{line}</p>;
                      }
                      return <p key={i}>{line}</p>;
                    })}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-purple-600" />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about this candidate..."
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
