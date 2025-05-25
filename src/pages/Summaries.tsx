
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Brain, PlayCircle, Clock, Download, Copy, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Summaries = () => {
  const [url, setUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 3000);
  };

  const sampleSummary = {
    title: "Introduction to Machine Learning - Stanford CS229",
    duration: "1:24:30",
    keyPoints: [
      "Machine learning is a subset of artificial intelligence that focuses on algorithms that can learn from and make predictions on data",
      "Supervised learning uses labeled training data to learn a mapping from inputs to outputs",
      "Unsupervised learning finds hidden patterns in data without labeled examples",
      "The bias-variance tradeoff is fundamental to understanding model performance",
      "Feature engineering and selection are crucial for building effective models",
      "Cross-validation helps assess how well a model will generalize to unseen data"
    ],
    confidence: 95
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NoteNexus
            </span>
          </Link>
          <Link to="/auth">
            <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              Sign In
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            AI-Powered Summaries
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform lengthy YouTube videos into concise, intelligent summaries using GPT-4
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Input Section */}
          <Card className="animate-fade-in border-0 shadow-xl bg-card/80 backdrop-blur-sm" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PlayCircle className="w-5 h-5" />
                <span>Generate Summary</span>
              </CardTitle>
              <CardDescription>
                Paste a YouTube URL to get an AI-generated summary
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGenerate} className="space-y-4">
                <Input
                  type="url"
                  placeholder="https://youtube.com/watch?v=..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="h-12"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-12"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Generate Summary"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Sample Summary Result */}
          <Card className="animate-fade-in border-0 shadow-xl bg-card/80 backdrop-blur-sm" style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl mb-2">{sampleSummary.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{sampleSummary.duration}</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      <Star className="w-3 h-3 mr-1" />
                      {sampleSummary.confidence}% Confidence
                    </Badge>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Copy className="w-4 h-4 mr-1" />
                    Copy
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Key Points:</h3>
                <ul className="space-y-3">
                  {sampleSummary.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-3 animate-fade-in" style={{ animationDelay: `${600 + index * 100}ms` }}>
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '800ms' }}>
            {[
              {
                title: "AI-Powered",
                description: "Uses GPT-4 for intelligent content analysis",
                icon: Brain
              },
              {
                title: "Quick Processing",
                description: "Get summaries in under 2 minutes",
                icon: Clock
              },
              {
                title: "Export Ready",
                description: "Download as PDF or copy to clipboard",
                icon: Download
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center border-0 bg-card/60 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                <CardContent className="pt-6">
                  <feature.icon className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summaries;
