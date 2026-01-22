import type { Candidate } from '../types';

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    appliedRole: 'Senior Frontend Engineer',
    appliedDate: '2024-01-15',
    status: 'interview',
    matchScore: 87,
    profile: {
      summary: 'Experienced frontend engineer with 6 years of experience building scalable web applications. Strong focus on React ecosystem and performance optimization.',
      experience: [
        {
          company: 'Google',
          title: 'Software Engineer III',
          startDate: '2021-03',
          endDate: null,
          description: 'Lead frontend development for Google Cloud Console features.',
          highlights: [
            'Led team of 4 engineers on Cloud Storage UI redesign',
            'Reduced page load time by 40% through code splitting',
            'Mentored 2 junior engineers'
          ]
        },
        {
          company: 'Stripe',
          title: 'Frontend Engineer',
          startDate: '2019-01',
          endDate: '2021-02',
          description: 'Built payment dashboard components and checkout flows.',
          highlights: [
            'Implemented new checkout experience increasing conversion by 15%',
            'Created shared component library used by 5 teams'
          ]
        },
        {
          company: 'StartupXYZ',
          title: 'Junior Developer',
          startDate: '2017-06',
          endDate: '2018-12',
          description: 'Full-stack development for B2B SaaS platform.',
          highlights: [
            'Built customer portal from scratch',
            'Integrated third-party APIs'
          ]
        }
      ],
      education: [
        {
          institution: 'UC Berkeley',
          degree: 'B.S.',
          field: 'Computer Science',
          graduationDate: '2017-05',
          gpa: '3.7'
        }
      ],
      skills: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Node.js', 'AWS', 'Jest', 'Cypress'],
      customQuestions: [
        {
          question: 'Why are you interested in this role?',
          answer: 'I\'m excited about the opportunity to work on a product that impacts millions of users. Your focus on developer experience aligns with my passion for building intuitive interfaces.'
        },
        {
          question: 'Describe a challenging technical problem you solved.',
          answer: 'At Google, I optimized a dashboard that was loading 50+ components. I implemented virtualization and lazy loading, reducing initial load time from 8s to 2s.'
        }
      ]
    },
    assessment: {
      overallScore: 85,
      completedDate: '2024-01-18',
      sections: [
        { name: 'JavaScript Fundamentals', score: 45, maxScore: 50, percentile: 92 },
        { name: 'React & State Management', score: 42, maxScore: 50, percentile: 88 },
        { name: 'System Design', score: 35, maxScore: 50, percentile: 72 },
        { name: 'Problem Solving', score: 40, maxScore: 50, percentile: 85 }
      ]
    },
    aiInterview: {
      status: 'completed',
      completedDate: '2024-01-20',
      duration: 35,
      overallScore: 82,
      evaluation: {
        summary: 'Sarah demonstrated strong technical knowledge in React and frontend development. Communication was excellent, with clear and structured responses. Some gaps identified in system design experience at scale.',
        strengths: [
          'Excellent communication skills - explains complex concepts clearly',
          'Deep React knowledge with practical examples',
          'Strong problem-solving approach',
          'Good cultural fit indicators'
        ],
        concerns: [
          'Limited experience with large-scale distributed systems',
          'Gap in employment not fully explained (2022-2023 shows continuous but resume unclear)',
          'System design responses lacked depth on scalability'
        ],
        recommendation: 'yes',
        scores: {
          communication: 4.5,
          technicalDepth: 3.8,
          problemSolving: 4.0,
          cultureFit: 4.2
        }
      },
      transcript: [
        { speaker: 'ai', text: 'Hi Sarah, thanks for joining. Can you start by telling me about your current role at Google?', timestamp: '00:00:15' },
        { speaker: 'candidate', text: 'Sure! I\'m currently a Software Engineer III at Google, working on the Cloud Console team. I lead frontend development for storage-related features, managing a small team of 4 engineers.', timestamp: '00:00:45' },
        { speaker: 'ai', text: 'That sounds interesting. Can you walk me through a technical challenge you faced recently?', timestamp: '00:01:30' },
        { speaker: 'candidate', text: 'One major challenge was optimizing our dashboard performance. We had over 50 components loading simultaneously, causing 8-second load times. I led the effort to implement React.lazy and Suspense for code splitting, along with virtualization for large lists. We got it down to under 2 seconds.', timestamp: '00:02:45' },
        { speaker: 'ai', text: 'How did you approach the system design for that optimization?', timestamp: '00:03:30' },
        { speaker: 'candidate', text: 'We analyzed the component tree, identified critical path components, and prioritized what needed to load first. For the architecture, we... honestly, the backend team handled most of the infrastructure decisions. I focused on the frontend optimization strategies.', timestamp: '00:04:30' }
      ]
    },
    notes: [
      {
        id: 'n1',
        author: 'Mike Johnson',
        content: 'Strong React skills confirmed in phone screen. Recommend moving forward with technical interview. She was very articulate about her Google experience.',
        createdAt: '2024-01-17T10:30:00Z',
        tags: ['phone-screen', 'positive']
      },
      {
        id: 'n2',
        author: 'Lisa Park',
        content: 'Concerns about system design depth - suggest probing more on architecture decisions in next round. Her answers felt more tactical than strategic.',
        createdAt: '2024-01-19T14:15:00Z',
        tags: ['technical', 'concern']
      }
    ],
    scorecard: {
      evaluations: [
        {
          id: 'sc1',
          evaluator: 'Mike Johnson',
          evaluatorRole: 'Engineering Manager',
          interviewType: 'Phone Screen',
          date: '2024-01-17',
          overallRating: 4,
          recommendation: 'yes',
          criteria: [
            { name: 'Communication', rating: 5, maxRating: 5, notes: 'Excellent clarity' },
            { name: 'Technical Knowledge', rating: 4, maxRating: 5 },
            { name: 'Experience Relevance', rating: 4, maxRating: 5 },
            { name: 'Culture Fit', rating: 4, maxRating: 5 }
          ],
          notes: 'Strong candidate with relevant experience. Recommend for technical round.'
        },
        {
          id: 'sc2',
          evaluator: 'Lisa Park',
          evaluatorRole: 'Senior Engineer',
          interviewType: 'Technical Screen',
          date: '2024-01-19',
          overallRating: 3,
          recommendation: 'maybe',
          criteria: [
            { name: 'Coding Skills', rating: 4, maxRating: 5, notes: 'Clean code, good patterns' },
            { name: 'System Design', rating: 3, maxRating: 5, notes: 'Needs more depth' },
            { name: 'Problem Solving', rating: 4, maxRating: 5 },
            { name: 'Technical Communication', rating: 4, maxRating: 5 }
          ],
          notes: 'Good frontend skills but system design needs more exploration. Suggest architecture-focused follow-up.'
        }
      ]
    },
    activity: [
      { id: 'a1', type: 'applied', description: 'Applied for Senior Frontend Engineer', timestamp: '2024-01-15T09:00:00Z' },
      { id: 'a2', type: 'screened', description: 'Resume screened by recruiting team', timestamp: '2024-01-15T14:30:00Z', actor: 'John Recruiter' },
      { id: 'a3', type: 'assessment_completed', description: 'Completed technical assessment', timestamp: '2024-01-18T16:00:00Z' },
      { id: 'a4', type: 'interview_scheduled', description: 'Phone screen scheduled with Mike Johnson', timestamp: '2024-01-16T11:00:00Z' },
      { id: 'a5', type: 'interview_completed', description: 'Phone screen completed', timestamp: '2024-01-17T15:00:00Z', actor: 'Mike Johnson' },
      { id: 'a6', type: 'note_added', description: 'Mike Johnson added interview notes', timestamp: '2024-01-17T15:30:00Z' },
      { id: 'a7', type: 'interview_completed', description: 'AI Interview completed', timestamp: '2024-01-20T10:00:00Z' },
      { id: 'a8', type: 'status_changed', description: 'Status changed to Interview', timestamp: '2024-01-20T11:00:00Z', actor: 'System' }
    ],
    prepBrief: {
      quickSummary: 'Software engineer with 6 years experience, currently at Google. Strong match (87%) for Senior Frontend role. Previous interviewers noted excellent React skills but flagged concerns about system design depth.',
      strengths: [
        { text: '6 years React experience (mentioned in resume, assessment, and AI interview)', source: 'Multiple sources' },
        { text: 'Led team of 4 at Google Cloud Console', source: 'Resume' },
        { text: 'Strong communication score from AI interview (4.5/5)', source: 'AI Interview' },
        { text: 'Performance optimization expertise - reduced load time by 75%', source: 'AI Interview' }
      ],
      concerns: [
        { text: 'System design experience unclear - previous evaluator noted "needs more depth"', source: 'Scorecard - Lisa Park' },
        { text: 'Limited distributed systems experience', source: 'AI Interview' },
        { text: 'Answers tend to be tactical vs strategic on architecture', source: 'Notes' }
      ],
      suggestedQuestions: [
        'Walk me through how you would design a real-time collaborative document editor from scratch.',
        'Tell me about a time you had to make a significant architectural decision. What was your process?',
        'How do you approach scaling a frontend application to handle millions of users?',
        'Describe a situation where you disagreed with a technical decision. How did you handle it?'
      ],
      previousFeedback: {
        communication: 4.5,
        technical: 3.5,
        evaluationCount: 3
      },
      alreadyAsked: [
        'Tell me about yourself / current role',
        'Describe a technical challenge you solved',
        'Why are you interested in this role?'
      ],
      needsCoverage: [
        'System design & architecture',
        'Leadership & mentorship style',
        'Conflict resolution',
        'Long-term career goals'
      ],
      interviewerFocus: [
        { name: 'Mike Johnson (Phone)', focus: ['Background', 'Communication', 'Culture fit'] },
        { name: 'Lisa Park (Technical)', focus: ['Coding', 'React knowledge', 'Problem solving'] },
        { name: 'AI Interview', focus: ['Technical depth', 'Communication', 'General assessment'] }
      ]
    }
  },
  {
    id: '2',
    name: 'Marcus Williams',
    email: 'marcus.w@email.com',
    phone: '+1 (555) 234-5678',
    location: 'New York, NY',
    appliedRole: 'Senior Frontend Engineer',
    appliedDate: '2024-01-12',
    status: 'interview',
    matchScore: 78,
    profile: {
      summary: 'Full-stack developer transitioning to frontend focus. 5 years experience with strong JavaScript and emerging React skills.',
      experience: [
        {
          company: 'Bloomberg',
          title: 'Software Developer',
          startDate: '2020-06',
          endDate: null,
          description: 'Full-stack development for financial data platforms.',
          highlights: [
            'Built real-time data visualization dashboards',
            'Migrated legacy jQuery apps to React'
          ]
        },
        {
          company: 'Deloitte Digital',
          title: 'Junior Developer',
          startDate: '2018-08',
          endDate: '2020-05',
          description: 'Consulting on enterprise web applications.',
          highlights: [
            'Delivered 6 client projects on schedule',
            'Specialized in performance optimization'
          ]
        }
      ],
      education: [
        {
          institution: 'NYU',
          degree: 'M.S.',
          field: 'Computer Science',
          graduationDate: '2018-05'
        }
      ],
      skills: ['JavaScript', 'React', 'Vue.js', 'Python', 'SQL', 'D3.js', 'WebSocket'],
      customQuestions: [
        {
          question: 'Why are you interested in this role?',
          answer: 'I want to specialize in frontend development and your team\'s focus on modern React patterns aligns with my career goals.'
        }
      ]
    },
    assessment: {
      overallScore: 72,
      completedDate: '2024-01-14',
      sections: [
        { name: 'JavaScript Fundamentals', score: 40, maxScore: 50, percentile: 80 },
        { name: 'React & State Management', score: 32, maxScore: 50, percentile: 65 },
        { name: 'System Design', score: 38, maxScore: 50, percentile: 78 },
        { name: 'Problem Solving', score: 42, maxScore: 50, percentile: 88 }
      ]
    },
    aiInterview: {
      status: 'completed',
      completedDate: '2024-01-16',
      duration: 32,
      overallScore: 75,
      evaluation: {
        summary: 'Marcus shows strong problem-solving abilities and good JavaScript fundamentals. React experience is developing but not yet senior-level. Strong system design thinking from full-stack background.',
        strengths: [
          'Strong problem-solving approach',
          'Good system design fundamentals',
          'Excellent JavaScript knowledge',
          'Eager to learn and grow'
        ],
        concerns: [
          'React experience is intermediate, not senior level',
          'May need ramp-up time on advanced React patterns',
          'Less experience with frontend-specific tooling'
        ],
        recommendation: 'maybe',
        scores: {
          communication: 3.8,
          technicalDepth: 3.5,
          problemSolving: 4.2,
          cultureFit: 4.0
        }
      },
      transcript: []
    },
    notes: [
      {
        id: 'n1',
        author: 'Emily Chen',
        content: 'Interesting background with Bloomberg. Good systems thinking but React skills need validation.',
        createdAt: '2024-01-13T09:00:00Z',
        tags: ['initial-review']
      }
    ],
    scorecard: {
      evaluations: [
        {
          id: 'sc1',
          evaluator: 'Emily Chen',
          evaluatorRole: 'Tech Lead',
          interviewType: 'Phone Screen',
          date: '2024-01-15',
          overallRating: 3,
          recommendation: 'maybe',
          criteria: [
            { name: 'Communication', rating: 4, maxRating: 5 },
            { name: 'Technical Knowledge', rating: 3, maxRating: 5 },
            { name: 'Experience Relevance', rating: 3, maxRating: 5 },
            { name: 'Culture Fit', rating: 4, maxRating: 5 }
          ],
          notes: 'Good potential but may need mentorship on React. Consider for mid-level role?'
        }
      ]
    },
    activity: [
      { id: 'a1', type: 'applied', description: 'Applied for Senior Frontend Engineer', timestamp: '2024-01-12T11:00:00Z' },
      { id: 'a2', type: 'screened', description: 'Resume screened', timestamp: '2024-01-12T16:00:00Z' },
      { id: 'a3', type: 'assessment_completed', description: 'Completed technical assessment', timestamp: '2024-01-14T14:00:00Z' },
      { id: 'a4', type: 'interview_completed', description: 'AI Interview completed', timestamp: '2024-01-16T11:00:00Z' }
    ],
    prepBrief: {
      quickSummary: 'Full-stack developer from Bloomberg with 5 years experience. Match score 78%. Strong problem-solver but React skills are intermediate level - may be better fit for mid-level role.',
      strengths: [
        { text: 'Strong problem-solving score (4.2/5)', source: 'AI Interview' },
        { text: 'System design thinking from full-stack background', source: 'AI Interview' },
        { text: 'Real-time data visualization experience', source: 'Resume' }
      ],
      concerns: [
        { text: 'React experience is intermediate, not senior level', source: 'AI Interview' },
        { text: 'May need ramp-up time on advanced patterns', source: 'Scorecard' },
        { text: 'Evaluator suggested considering for mid-level role', source: 'Notes' }
      ],
      suggestedQuestions: [
        'What advanced React patterns have you implemented? (hooks, context, suspense)',
        'How do you stay current with frontend ecosystem changes?',
        'Walk me through your largest React project architecture.',
        'How would you mentor more junior developers on React best practices?'
      ],
      previousFeedback: {
        communication: 3.8,
        technical: 3.3,
        evaluationCount: 2
      },
      alreadyAsked: ['Background and experience', 'Why frontend focus?'],
      needsCoverage: ['Advanced React patterns', 'Leadership capability', 'Code review approach'],
      interviewerFocus: [
        { name: 'Emily Chen (Phone)', focus: ['Background', 'React assessment'] }
      ]
    }
  },
  {
    id: '3',
    name: 'Priya Patel',
    email: 'priya.patel@email.com',
    phone: '+1 (555) 345-6789',
    location: 'Seattle, WA',
    appliedRole: 'Senior Frontend Engineer',
    appliedDate: '2024-01-18',
    status: 'screening',
    matchScore: 92,
    profile: {
      summary: 'Frontend architect with 8 years of experience. Specialized in building design systems and component libraries at scale.',
      experience: [
        {
          company: 'Amazon',
          title: 'Senior Frontend Engineer',
          startDate: '2019-04',
          endDate: null,
          description: 'Lead frontend architecture for AWS Console.',
          highlights: [
            'Architected design system used by 200+ engineers',
            'Reduced bundle size by 60% across services',
            'Led accessibility initiative achieving WCAG 2.1 AA'
          ]
        },
        {
          company: 'Microsoft',
          title: 'Frontend Engineer',
          startDate: '2016-07',
          endDate: '2019-03',
          description: 'Developed Office 365 web applications.',
          highlights: [
            'Core contributor to Fluent UI',
            'Built real-time collaboration features'
          ]
        }
      ],
      education: [
        {
          institution: 'University of Washington',
          degree: 'B.S.',
          field: 'Computer Science',
          graduationDate: '2016-06',
          gpa: '3.9'
        }
      ],
      skills: ['React', 'TypeScript', 'Design Systems', 'Accessibility', 'Performance', 'Webpack', 'Micro-frontends'],
      customQuestions: [
        {
          question: 'Why are you interested in this role?',
          answer: 'I\'m looking to lead frontend architecture at a growing company where I can have more direct impact on product direction.'
        }
      ]
    },
    assessment: {
      overallScore: 94,
      completedDate: '2024-01-20',
      sections: [
        { name: 'JavaScript Fundamentals', score: 48, maxScore: 50, percentile: 98 },
        { name: 'React & State Management', score: 47, maxScore: 50, percentile: 96 },
        { name: 'System Design', score: 45, maxScore: 50, percentile: 92 },
        { name: 'Problem Solving', score: 46, maxScore: 50, percentile: 94 }
      ]
    },
    aiInterview: {
      status: 'scheduled',
      scheduledDate: '2024-01-25T14:00:00Z'
    },
    notes: [
      {
        id: 'n1',
        author: 'HR Team',
        content: 'Excellent profile - fast track for interviews. Has competing offer from Meta.',
        createdAt: '2024-01-18T15:00:00Z',
        tags: ['priority', 'competing-offer']
      }
    ],
    scorecard: {
      evaluations: []
    },
    activity: [
      { id: 'a1', type: 'applied', description: 'Applied for Senior Frontend Engineer', timestamp: '2024-01-18T08:00:00Z' },
      { id: 'a2', type: 'screened', description: 'Resume screened - flagged as priority', timestamp: '2024-01-18T10:00:00Z' },
      { id: 'a3', type: 'assessment_completed', description: 'Completed technical assessment (94%)', timestamp: '2024-01-20T12:00:00Z' },
      { id: 'a4', type: 'interview_scheduled', description: 'AI Interview scheduled', timestamp: '2024-01-21T09:00:00Z' }
    ],
    prepBrief: {
      quickSummary: 'Frontend architect from Amazon with 8 years experience. Exceptional match (92%). Has competing Meta offer - needs expedited process. Specialized in design systems and accessibility.',
      strengths: [
        { text: 'Exceptional assessment score (94%)', source: 'Assessment' },
        { text: 'Led design system used by 200+ engineers at Amazon', source: 'Resume' },
        { text: 'Strong accessibility expertise (WCAG 2.1 AA)', source: 'Resume' },
        { text: 'Microsoft Fluent UI contributor', source: 'Resume' }
      ],
      concerns: [
        { text: 'Has competing offer from Meta - timeline pressure', source: 'Notes' },
        { text: 'May have high compensation expectations', source: 'Inferred' }
      ],
      suggestedQuestions: [
        'What draws you to our company over Meta?',
        'How do you approach building design systems that scale across many teams?',
        'Tell me about the accessibility initiative you led - what were the biggest challenges?',
        'What\'s your vision for frontend architecture in the next 5 years?'
      ],
      previousFeedback: {
        communication: 0,
        technical: 0,
        evaluationCount: 0
      },
      alreadyAsked: [],
      needsCoverage: ['All areas - first interview'],
      interviewerFocus: []
    }
  },
  {
    id: '4',
    name: 'James O\'Brien',
    email: 'james.obrien@email.com',
    phone: '+1 (555) 456-7890',
    location: 'Austin, TX',
    appliedRole: 'Senior Frontend Engineer',
    appliedDate: '2024-01-10',
    status: 'offer',
    matchScore: 85,
    profile: {
      summary: 'Product-minded frontend engineer with startup experience. Built 3 products from 0 to 1.',
      experience: [
        {
          company: 'TechStartup (YC W21)',
          title: 'Co-founder & CTO',
          startDate: '2021-01',
          endDate: '2023-12',
          description: 'Built and scaled B2B SaaS product to $2M ARR.',
          highlights: [
            'Architected entire frontend from scratch',
            'Grew engineering team from 1 to 8',
            'Company acquired in 2023'
          ]
        },
        {
          company: 'Shopify',
          title: 'Frontend Developer',
          startDate: '2018-03',
          endDate: '2020-12',
          description: 'Merchant dashboard team.',
          highlights: [
            'Led checkout redesign project',
            'Reduced cart abandonment by 12%'
          ]
        }
      ],
      education: [
        {
          institution: 'UT Austin',
          degree: 'B.S.',
          field: 'Computer Science',
          graduationDate: '2018-05'
        }
      ],
      skills: ['React', 'Next.js', 'Product Thinking', 'Team Leadership', 'TypeScript', 'Node.js'],
      customQuestions: []
    },
    assessment: {
      overallScore: 82,
      completedDate: '2024-01-12',
      sections: [
        { name: 'JavaScript Fundamentals', score: 42, maxScore: 50, percentile: 85 },
        { name: 'React & State Management', score: 44, maxScore: 50, percentile: 90 },
        { name: 'System Design', score: 40, maxScore: 50, percentile: 82 },
        { name: 'Problem Solving', score: 38, maxScore: 50, percentile: 78 }
      ]
    },
    aiInterview: {
      status: 'completed',
      completedDate: '2024-01-14',
      duration: 40,
      overallScore: 88,
      evaluation: {
        summary: 'James brings exceptional product sense and startup experience. Strong technical foundation with excellent leadership demonstrated. Some gaps in latest React patterns due to broad CTO responsibilities.',
        strengths: [
          'Exceptional product thinking',
          'Proven leadership - grew team to 8',
          'Full product lifecycle experience',
          'Strong business acumen'
        ],
        concerns: [
          'May be overqualified - looking for IC role after CTO',
          'Some gaps in latest React ecosystem (focused on business)',
          'Salary expectations may be high'
        ],
        recommendation: 'strong_yes',
        scores: {
          communication: 4.8,
          technicalDepth: 3.9,
          problemSolving: 4.5,
          cultureFit: 4.6
        }
      },
      transcript: []
    },
    notes: [
      {
        id: 'n1',
        author: 'Hiring Manager',
        content: 'Excellent culture fit. Product thinking is exactly what we need. Extending offer.',
        createdAt: '2024-01-20T16:00:00Z',
        tags: ['positive', 'offer']
      }
    ],
    scorecard: {
      evaluations: [
        {
          id: 'sc1',
          evaluator: 'David Kim',
          evaluatorRole: 'Hiring Manager',
          interviewType: 'Final Round',
          date: '2024-01-19',
          overallRating: 5,
          recommendation: 'strong_yes',
          criteria: [
            { name: 'Technical Skills', rating: 4, maxRating: 5 },
            { name: 'Product Thinking', rating: 5, maxRating: 5 },
            { name: 'Leadership', rating: 5, maxRating: 5 },
            { name: 'Culture Fit', rating: 5, maxRating: 5 }
          ],
          notes: 'Exceptional candidate. Recommend immediate offer.'
        }
      ]
    },
    activity: [
      { id: 'a1', type: 'applied', description: 'Applied for Senior Frontend Engineer', timestamp: '2024-01-10T10:00:00Z' },
      { id: 'a2', type: 'status_changed', description: 'Status changed to Offer', timestamp: '2024-01-20T17:00:00Z' },
      { id: 'a3', type: 'email_sent', description: 'Offer letter sent', timestamp: '2024-01-21T09:00:00Z' }
    ],
    prepBrief: {
      quickSummary: 'Former startup CTO (YC W21, acquired) with 6 years experience. Exceptional product sense and leadership. Offer extended - pending acceptance.',
      strengths: [
        { text: 'Built product from 0 to $2M ARR', source: 'Resume' },
        { text: 'Strong yes from all interviewers', source: 'Scorecard' },
        { text: 'Exceptional communication (4.8/5)', source: 'AI Interview' }
      ],
      concerns: [
        { text: 'May be overqualified for IC role', source: 'AI Interview' },
        { text: 'Compensation expectations', source: 'Notes' }
      ],
      suggestedQuestions: [],
      previousFeedback: {
        communication: 4.8,
        technical: 4.0,
        evaluationCount: 2
      },
      alreadyAsked: [],
      needsCoverage: [],
      interviewerFocus: []
    }
  },
  {
    id: '5',
    name: 'Amanda Foster',
    email: 'amanda.f@email.com',
    phone: '+1 (555) 567-8901',
    location: 'Denver, CO',
    appliedRole: 'Senior Frontend Engineer',
    appliedDate: '2024-01-08',
    status: 'rejected',
    matchScore: 45,
    profile: {
      summary: 'Backend developer looking to transition to frontend. 4 years of Python/Django experience.',
      experience: [
        {
          company: 'DataCorp',
          title: 'Backend Developer',
          startDate: '2020-01',
          endDate: null,
          description: 'Building data processing pipelines and APIs.',
          highlights: [
            'Built ETL pipelines processing 1M records/day',
            'Designed RESTful APIs'
          ]
        }
      ],
      education: [
        {
          institution: 'Colorado State',
          degree: 'B.S.',
          field: 'Information Systems',
          graduationDate: '2019-12'
        }
      ],
      skills: ['Python', 'Django', 'PostgreSQL', 'HTML', 'CSS', 'Basic JavaScript'],
      customQuestions: []
    },
    assessment: {
      overallScore: 48,
      completedDate: '2024-01-10',
      sections: [
        { name: 'JavaScript Fundamentals', score: 22, maxScore: 50, percentile: 35 },
        { name: 'React & State Management', score: 18, maxScore: 50, percentile: 25 },
        { name: 'System Design', score: 32, maxScore: 50, percentile: 65 },
        { name: 'Problem Solving', score: 28, maxScore: 50, percentile: 55 }
      ]
    },
    aiInterview: {
      status: 'completed',
      completedDate: '2024-01-12',
      duration: 25,
      overallScore: 42,
      evaluation: {
        summary: 'Amanda has strong backend skills but lacks the frontend experience required for this senior role. Recommend keeping in pipeline for backend positions.',
        strengths: [
          'Strong backend fundamentals',
          'Good problem-solving approach',
          'Eager to learn'
        ],
        concerns: [
          'No production React experience',
          'JavaScript knowledge is basic',
          'Not ready for senior frontend role'
        ],
        recommendation: 'no',
        scores: {
          communication: 3.5,
          technicalDepth: 2.0,
          problemSolving: 3.2,
          cultureFit: 3.8
        }
      },
      transcript: []
    },
    notes: [
      {
        id: 'n1',
        author: 'Recruiter',
        content: 'Skills mismatch for frontend role. Referred to backend team for future opportunities.',
        createdAt: '2024-01-13T11:00:00Z',
        tags: ['rejected', 'referral']
      }
    ],
    scorecard: {
      evaluations: []
    },
    activity: [
      { id: 'a1', type: 'applied', description: 'Applied for Senior Frontend Engineer', timestamp: '2024-01-08T14:00:00Z' },
      { id: 'a2', type: 'status_changed', description: 'Status changed to Rejected', timestamp: '2024-01-13T12:00:00Z' },
      { id: 'a3', type: 'email_sent', description: 'Rejection email sent with backend referral', timestamp: '2024-01-13T12:30:00Z' }
    ],
    prepBrief: {
      quickSummary: 'Backend developer seeking frontend transition. Insufficient frontend experience for senior role. Rejected but referred to backend team.',
      strengths: [
        { text: 'Strong backend/Python skills', source: 'Resume' },
        { text: 'Good problem-solving fundamentals', source: 'AI Interview' }
      ],
      concerns: [
        { text: 'No production React experience', source: 'Assessment' },
        { text: 'JavaScript knowledge is basic (25th percentile)', source: 'Assessment' }
      ],
      suggestedQuestions: [],
      previousFeedback: {
        communication: 3.5,
        technical: 2.0,
        evaluationCount: 1
      },
      alreadyAsked: [],
      needsCoverage: [],
      interviewerFocus: []
    }
  }
];
