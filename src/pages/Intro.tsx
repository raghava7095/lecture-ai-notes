
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, BookOpen, Download, Zap, Users, Trophy, Clock, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/shared/Header";

const Intro = () => {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "University Student",
      content: "NoteNexus has revolutionized how I study. I can now process hour-long lectures in minutes!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Professional Developer",
      content: "The AI summaries are incredibly accurate. Perfect for keeping up with tech tutorials.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "High School Teacher",
      content: "My students love the flashcards feature. It's made learning more engaging and effective.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header title="About NoteNexus" showBack={false} />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
            🚀 Transform Your Learning Experience
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome to NoteNexus
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            The most powerful AI-driven platform for converting YouTube videos into comprehensive study materials. 
            Join thousands of students and professionals who have transformed their learning journey.
          </p>
          <Link to="/get-started">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 transform hover:scale-105 transition-all duration-200">
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started Now
            </Button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent animate-fade-in">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Everything you need to transform passive video watching into active learning
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm animate-fade-in transform hover:scale-[1.05]" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl py-16 text-white mb-16">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">How NoteNexus Works</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              From YouTube link to comprehensive study materials in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto px-8">
            {[
              {
                step: "01",
                title: "Paste YouTube URL",
                description: "Simply paste any YouTube video link and our AI will extract the transcript"
              },
              {
                step: "02", 
                title: "AI Processing",
                description: "GPT-4 analyzes the content and generates summaries, flashcards, and quizzes"
              },
              {
                step: "03",
                title: "Study & Export",
                description: "Access your materials instantly and export everything as beautiful PDFs"
              }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold animate-bounce" style={{ animationDelay: `${index * 300}ms`, animationDuration: '2s' }}>
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Join thousands of satisfied learners worldwide
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Download Section */}
        <section className="text-center bg-card/60 backdrop-blur-sm rounded-2xl py-16 mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access NoteNexus on any device, anywhere. No downloads required - it's all web-based!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8">
                <Clock className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950 px-8">
              Watch Demo
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Intro;
