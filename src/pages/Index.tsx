
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Brain, BookOpen, Download, Zap, Users, Trophy, Clock } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Processing YouTube URL:", youtubeUrl);
    // This will connect to backend later
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Summaries",
      description: "Get concise, intelligent summaries of any YouTube video using GPT-4",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Smart Flashcards",
      description: "Automatically generated flashcards for effective learning and retention",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Trophy,
      title: "Interactive Quizzes",
      description: "Test your knowledge with AI-generated multiple choice questions",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Download,
      title: "Export Everything",
      description: "Download your notes, flashcards, and quizzes as beautiful PDFs",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "10K+", label: "Videos Processed", icon: PlayCircle },
    { number: "50K+", label: "Notes Generated", icon: BookOpen },
    { number: "25K+", label: "Active Learners", icon: Users },
    { number: "95%", label: "Success Rate", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NoteNexus
            </span>
          </div>
          <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            🚀 AI-Powered Learning Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Transform YouTube Videos into
            <span className="block">Smart Study Notes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Paste any YouTube link and get AI-generated summaries, flashcards, and quizzes. 
            Make learning from videos 10x more effective.
          </p>

          {/* URL Input Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-2 p-2 bg-white rounded-xl shadow-lg border">
              <Input
                type="url"
                placeholder="Paste YouTube URL here... (e.g., https://youtube.com/watch?v=...)"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                className="flex-1 border-0 focus-visible:ring-0 text-lg"
              />
              <Button 
                type="submit" 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
              >
                <Zap className="w-5 h-5 mr-2" />
                Generate Notes
              </Button>
            </div>
          </form>

          {/* Demo Video Preview */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1">
              <div className="bg-gray-900 rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <PlayCircle className="w-16 h-16 mx-auto mb-4 animate-pulse-slow" />
                  <p className="text-lg">Demo: Watch NoteNexus in Action</p>
                  <p className="text-sm text-gray-300 mt-2">See how we transform a 1-hour lecture into actionable notes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white/60 backdrop-blur-sm py-16 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Everything You Need to Learn Smarter
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform transforms passive video watching into active learning experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How NoteNexus Works</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              From YouTube link to comprehensive study materials in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Paste & Process",
                description: "Simply paste any YouTube URL and our AI extracts the video transcript using advanced speech recognition"
              },
              {
                step: "02", 
                title: "AI Analysis",
                description: "GPT-4 analyzes the content and generates intelligent summaries, flashcards, and quiz questions"
              },
              {
                step: "03",
                title: "Study & Export",
                description: "Review your materials, practice with flashcards, take quizzes, and export everything as PDF"
              }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ready to Supercharge Your Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students who are already learning smarter with NoteNexus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8">
              <Clock className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">NoteNexus</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 NoteNexus. Transform learning with AI.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
