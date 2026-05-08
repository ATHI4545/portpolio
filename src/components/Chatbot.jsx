import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle } from 'lucide-react';

// Knowledge Base - Train the chatbot with all details
const KNOWLEDGE_BASE = {
  greeting: {
    patterns: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    response: "Hey there! 👋 I'm Athityaa's AI assistant. I can tell you about his skills, projects, experience, and more. What would you like to know?"
  },
  about: {
    patterns: ['who is athityaa', 'tell me about athityaa', 'about you', 'introduce yourself', 'who are you', 'tell me about yourself'],
    response: "I'm Athityaa A, an AI & Full Stack Developer with a passion for creating intelligent solutions. I'm currently a B.Tech student at K.S. Rangasamy College of Technology (2023-2027) with a CGPA of 8.7/10. I specialize in AI, Data Science, and Full-Stack Development. I have completed 2 internships and worked on 5+ projects!"
  },
  skills: {
    patterns: ['what are your skills', 'skills', 'technologies', 'what can you do', 'expertise', 'programming languages'],
    response: "💻 Here are my key skills:\n\n🐍 Programming: Python (85%), Java (75%), C (70%)\n🌐 Web Dev: JavaScript (78%), React.js (82%), HTML & CSS (88%)\n☁️ Tools: Firebase (80%), MongoDB (75%), MySQL (78%)\n🤖 AI/Data: Machine Learning (78%), Data Analytics (82%), Power BI (75%), Tableau (72%)\n\nTop Skills: Problem-Solving (88%), React.js (82%), HTML & CSS (88%)"
  },
  projects: {
    patterns: ['projects', 'portfolio', 'what have you built', 'show me your work', 'past projects', 'what projects'],
    response: "🚀 I've worked on 5 exciting projects:\n\n1. **Protein Bind Analysis** - AI-powered drug discovery chatbot using NVIDIA API & Python\n2. **Car Showroom Booking** - Full-stack booking web app with 3D model integration\n3. **AI Roadmap Generator** - Personalized learning path recommender\n4. **Sales Market Analysis** - BI dashboard with Power BI & Tableau\n5. **House Price Prediction** - ML model for real estate pricing\n\nCheck them out in my portfolio!"
  },
  experience: {
    patterns: ['experience', 'internship', 'work experience', 'jobs', 'what have you worked on', 'career'],
    response: "💼 My Professional Experience:\n\n**Code Core High Tech Solutions** (Jun 2024 - Jan 2025)\n• Data Analytics Intern • Coimbatore\n• Skills: Data Analysis, Python, Problem-Solving\n\n**SkySphere Technologies** (Mar 2025 - May 2025)\n• Web Developer Intern • Sathiyamangalam\n• Skills: Full-Stack Development, React.js, Firebase\n\nBoth roles gave me practical experience in real-world projects!"
  },
  education: {
    patterns: ['education', 'college', 'degree', 'university', 'study', 'academic'],
    response: "🎓 Education:\n\n**B.Tech in Computer Science** (2023-2027)\nK.S. Rangasamy College of Technology, Tiruchengode\nCGPA: 8.7/10 (up to 5th Semester)\n\n**12th Grade**: 81.7%\n\nCurrently focusing on AI & Data Science specialization!"
  },
  achievements: {
    patterns: ['achievements', 'awards', 'accomplishments', 'what have you achieved', 'recognition'],
    response: "🏆 Key Achievements:\n\n• Protein binding analysis: 500+ interactions analyzed\n• Fixed 15+ critical bugs in production code\n• Processed 5,000+ customer records in data projects\n• 2nd Place Technical Presentation Award\n• 300+ LeetCode problems solved\n• Improved team efficiency by 40% with optimized solutions"
  },
  contact: {
    patterns: ['contact', 'email', 'phone', 'how to reach', 'get in touch', 'reach out', 'messaging'],
    response: "📧 Contact Info:\n\n📧 Email: athikuti4@gmail.com\n📱 Phone: +91 9345664042\n📍 Location: Tiruchengode, Tamil Nadu\n\n🔗 Social Links:\n• GitHub: github.com/ATHI4545\n• LinkedIn: linkedin.com/in/athityaa\n\nFeel free to reach out!"
  },
  help: {
    patterns: ['help', 'what can you do', 'commands', 'options', 'menu', "what's available"],
    response: "ℹ️ I can help you with:\n\n• About me (type: 'about')\n• Skills & Technologies (type: 'skills')\n• Projects (type: 'projects')\n• Work Experience (type: 'experience')\n• Education (type: 'education')\n• Achievements (type: 'achievements')\n• Contact Info (type: 'contact')\n• Resume (type: 'resume')\n• LeetCode Stats (type: 'leetcode')\n\nJust ask naturally, and I'll help! 😊"
  },
  resume: {
    patterns: ['resume', 'cv', 'download resume', 'my resume', 'curriculum'],
    response: "📄 Resume:\n\nYou can download my resume from the hero section. It contains:\n• Complete education details\n• All internship experiences\n• Technical skills breakdown\n• Project descriptions\n• Certifications\n\n[Download: Athityaa_Resume_.pdf]"
  },
  leetcode: {
    patterns: ['leetcode', 'coding problems', 'dsa', 'competitive programming', 'problems solved'],
    response: "💡 LeetCode Stats:\n\n• 300+ problems solved\n• Strong in Data Structures & Algorithms\n• Focus areas: Arrays, Trees, Graphs, Dynamic Programming\n• Consistent weekly practice\n\nProfile: Check my activity on LeetCode for detailed stats!"
  },
  certificates: {
    patterns: ['certificates', 'certifications', 'certificates', 'certs', 'diploma'],
    response: "🎖️ Certifications:\n\n• Code Core High Tech Solutions (Data Analytics Intern)\n• SkySphere Technologies (Web Developer Intern)\n\nBoth certificates are available in my portfolio. You can view and download them from the Experience section!"
  }
};

// Function to find best matching response
function findResponse(userMessage) {
  const message = userMessage.toLowerCase().trim();
  
  for (const [key, data] of Object.entries(KNOWLEDGE_BASE)) {
    for (const pattern of data.patterns) {
      if (message.includes(pattern)) {
        return data.response;
      }
    }
  }
  
  // Default response if no match found
  return "That's a great question! 🤔 I'm still learning, but I have information about:\n\n• My background & education\n• Skills & expertise\n• Projects I've worked on\n• Work experience & internships\n• Achievements & awards\n• How to contact me\n\nTry asking about any of these topics!";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! 👋 I'm Athityaa's AI Assistant. Ask me anything about his skills, projects, experience, or how to reach him!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate bot thinking time and generate response
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        text: findResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, response]);
      setIsLoading(false);
    }, 600);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-[#0066cc] to-[#00d9ff] text-white shadow-lg hover:shadow-xl flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[32rem] bg-gradient-to-b from-[#0d1b2a] to-[#0a0e27] rounded-2xl border border-[#00d9ff] border-opacity-30 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0066cc] to-[#00d9ff] p-4 flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold">Athityaa's AI Assistant</h3>
                <p className="text-xs text-gray-200">Always here to help 🤖</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-[#0066cc] to-[#00d9ff] text-white rounded-br-none'
                        : 'bg-[#1a2a3a] border border-[#00d9ff] border-opacity-20 text-gray-100 rounded-bl-none'
                    } text-sm leading-relaxed whitespace-pre-wrap`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#1a2a3a] border border-[#00d9ff] border-opacity-20 px-4 py-3 rounded-lg rounded-bl-none">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-[#00d9ff] rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-[#00d9ff] rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-[#00d9ff] rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-[#00d9ff] border-opacity-20 p-4 bg-[#0a0e27] bg-opacity-50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me about Athityaa..."
                  className="flex-1 bg-[#1a2a3a] border border-[#00d9ff] border-opacity-30 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-[#00d9ff] focus:border-opacity-60 text-sm placeholder-gray-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !input.trim()}
                  className="bg-gradient-to-r from-[#0066cc] to-[#00d9ff] text-white p-2 rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #0066cc, #00d9ff);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #00d9ff, #00ffff);
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </>
  );
}
