import type { CandidateProfile } from '../../types';
import { Briefcase, GraduationCap, FileText, MessageSquare } from 'lucide-react';

interface ProfileTabProps {
  profile: CandidateProfile;
}

export default function ProfileTab({ profile }: ProfileTabProps) {
  return (
    <div className="space-y-6">
      {/* Summary */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Summary</h3>
        <p className="text-gray-600 leading-relaxed">{profile.summary}</p>
      </section>

      {/* Skills */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          Work Experience
        </h3>
        <div className="space-y-4">
          {profile.experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-blue-200 pl-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500">
                  {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-2">{exp.description}</p>
              {exp.highlights.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          Education
        </h3>
        <div className="space-y-3">
          {profile.education.map((edu, index) => (
            <div key={index} className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">
                  {edu.degree} in {edu.field}
                </h4>
                <p className="text-gray-600">{edu.institution}</p>
                {edu.gpa && <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>}
              </div>
              <span className="text-sm text-gray-500">{formatDate(edu.graduationDate)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Questions */}
      {profile.customQuestions.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Application Questions
          </h3>
          <div className="space-y-4">
            {profile.customQuestions.map((qa, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <p className="font-medium text-gray-900 mb-2">{qa.question}</p>
                <p className="text-gray-600">{qa.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Resume Link */}
      {profile.resumeUrl && (
        <section>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
          >
            <FileText className="w-5 h-5" />
            View Resume
          </a>
        </section>
      )}
    </div>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}
