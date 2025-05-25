import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Brain, Play, Download, Clock, BookOpen } from "lucide-react";
import { useState } from "react";
import Header from "@/components/shared/Header";

const Summaries = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    console.log("Processing YouTube URL for summary:", youtubeUrl);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
    }, 3000);
  };

  const mockSummaries = [
    {
      title: "Introduction to Machine Learning - Stanford CS229",
      summary: "This lecture provides an overview of machine learning, covering topics such as supervised learning, unsupervised learning, and reinforcement learning. Key concepts include linear regression, logistic regression, and neural networks.",
      date: "2 hours ago",
      size: "2.4 MB"
    },
    {
      title: "React Hooks Explained",
      summary: "This tutorial explains React hooks, including useState, useEffect, and useContext. It covers how to use hooks to manage state and side effects in functional components.",
      date: "1 day ago",
      size: "1.2 MB"
    },
    {
      title: "Python Data Science Tutorial",
      summary: "This course covers the basics of Python for data science, including data manipulation with pandas, data visualization with matplotlib, and machine learning with scikit-learn.",
      date: "3 days ago",
      size: "856 KB"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header title="AI Summaries" />

      <div className="container mx-auto px-4 py-12">
        {/* URL Input Form */}
        <div className="max-w-3xl mx-auto mb-12 animate-fade-in">
          <Card className="border-0 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Generate AI Summary</CardTitle>
              <CardDescription>Paste a YouTube URL to generate a summary</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex gap-4">
                <Input
                  type="url"
                  placeholder="Paste YouTube URL here"
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" disabled={isProcessing}>
                  {isProcessing ? (
                    <>
                      <Clock className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Generate
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Recent Summaries */}
        <div className="max-w-3xl mx-auto animate-fade-in">
          <Card className="border-0 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Recent Summaries</CardTitle>
              <CardDescription>Your recently generated YouTube video summaries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockSummaries.map((summary, index) => (
                  <div key={index} className="p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{summary.title}</h3>
                        <p className="text-sm text-muted-foreground">{summary.date}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download ({summary.size})
                      </Button>
                    </div>
                    <p className="mt-2 text-sm">{summary.summary}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Summaries;
