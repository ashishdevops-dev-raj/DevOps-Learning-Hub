'use client'

import { useState } from 'react'
import { linuxQuestions } from './linux-questions'
import { gitQuestions } from './git-questions'
import { dockerQuestions } from './docker-questions'
import { kubernetesQuestions } from './kubernetes-questions'
import { ansibleQuestions } from './ansible-questions'
import { awsQuestions } from './aws-questions'
import { jenkinsQuestions } from './jenkins-questions'
import { terraformQuestions } from './terraform-questions'
import { pythonQuestions } from './python-questions'
import { shellScriptingQuestions } from './shell-scripting-questions'
import { monitoringQuestions } from './monitoring-questions'

const interviewQuestions = [
  // Linux Questions (100 questions)
  ...linuxQuestions,

  // Git Questions (100 questions)
  ...gitQuestions,

  // Docker Questions (100 questions)
  ...dockerQuestions,

  // Kubernetes Questions (100 questions)
  ...kubernetesQuestions,

  // Terraform Questions (100 questions)
  ...terraformQuestions,

  // Ansible Questions (100 questions)
  ...ansibleQuestions,

  // Monitoring Questions (100 questions)
  ...monitoringQuestions,

  // AWS Questions (100 questions)
  ...awsQuestions,

  // Jenkins Questions (100 questions)
  ...jenkinsQuestions,

  // Python Questions (100 questions)
  ...pythonQuestions,

  // Shell Scripting Questions (100 questions)
  ...shellScriptingQuestions,
]

export default function InterviewPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>('All')
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const topics = ['All', ...Array.from(new Set(interviewQuestions.map(q => q.topic)))]
  const filteredQuestions = selectedTopic === 'All' 
    ? interviewQuestions 
    : interviewQuestions.filter(q => q.topic === selectedTopic)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Interview Preparation</h1>
      <p className="text-gray-600 mb-8">
        Comprehensive DevOps interview questions covering Linux, Git, Docker, Kubernetes, Terraform, Ansible, Monitoring, AWS, Jenkins, Python, and Shell Scripting. Each topic includes 100+ questions organized by difficulty level. 
        Questions sourced from <a href="https://github.com/ashishdevops-dev-raj/DevOps_Interview_Prep" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">DevOps Interview Prep repository</a>.
      </p>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Filter by Topic</h2>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-4 py-2 rounded-lg transition ${
                selectedTopic === topic
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredQuestions.length} question{filteredQuestions.length !== 1 ? 's' : ''}
        </div>
      </div>

      <div className="space-y-4">
        {filteredQuestions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded font-medium">
                    {item.topic}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded font-medium ${
                    item.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    item.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.difficulty}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.question}
                </h3>
              </div>
            </div>
            
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="mt-4 text-primary-600 hover:text-primary-700 font-medium transition"
            >
              {expandedIndex === index ? 'Hide Answer' : 'Show Answer'}
            </button>
            
            {expandedIndex === index && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700 whitespace-pre-line">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredQuestions.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No questions found for the selected topic.
        </div>
      )}
    </div>
  )
}
