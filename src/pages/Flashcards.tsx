import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play, RotateCcw, Download, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Header from "@/components/shared/Header";

const Flashcards = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const sampleFlashcards = [
    {
      question: "What is Machine Learning?",
      answer: "Machine Learning is a subset of artificial intelligence that focuses on algorithms that can learn from and make predictions on data without being explicitly programmed for every task."
    },
    {
      question: "What is the difference between supervised and unsupervised learning?",
      answer: "Supervised learning uses labeled training data to learn a mapping from inputs to outputs, while unsupervised learning finds hidden patterns in data without labeled examples."
    },
    {
      question: "What is the bias-variance tradeoff?",
      answer: "The bias-variance tradeoff is the balance between a model's ability to minimize bias (error from overly simplistic assumptions) and variance (error from sensitivity to small fluctuations in training data)."
    },
    {
      question: "What is cross-validation?",
      answer: "Cross-validation is a technique used to assess how well a model will generalize to unseen data by partitioning the data and testing the model on different subsets."
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % sampleFlashcards.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + sampleFlashcards.length) % sampleFlashcards.length);
    setIsFlipped(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header title="Smart Flashcards" />

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Smart Flashcards
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automatically generated flashcards for effective learning and retention
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Flashcard Counter */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {currentCard + 1} of {sampleFlashcards.length}
            </Badge>
          </div>

          {/* Flashcard */}
          <div className="relative perspective-1000 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Card 
              className={`h-80 cursor-pointer transition-all duration-700 transform-style-preserve-3d border-0 shadow-2xl ${isFlipped ? 'rotate-y-180' : ''}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front */}
              <div className={`absolute inset-0 backface-hidden ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
                <CardContent className="h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-lg">
                  <BookOpen className="w-12 h-12 text-blue-600 mb-6" />
                  <h2 className="text-xl font-semibold text-center mb-4">Question</h2>
                  <p className="text-lg text-center leading-relaxed">
                    {sampleFlashcards[currentCard].question}
                  </p>
                  <p className="text-sm text-muted-foreground mt-6">Click to reveal answer</p>
                </CardContent>
              </div>

              {/* Back */}
              <div className={`absolute inset-0 backface-hidden rotate-y-180 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
                <CardContent className="h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <h2 className="text-xl font-semibold text-center mb-4">Answer</h2>
                  <p className="text-base text-center leading-relaxed">
                    {sampleFlashcards[currentCard].answer}
                  </p>
                  <p className="text-sm text-muted-foreground mt-6">Click to flip back</p>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Button 
              variant="outline" 
              onClick={prevCard}
              className="transform hover:scale-105 transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => setIsFlipped(!isFlipped)}
              className="transform hover:scale-105 transition-all duration-200"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Flip Card
            </Button>
            
            <Button 
              variant="outline" 
              onClick={nextCard}
              className="transform hover:scale-105 transition-all duration-200"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Export Button */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200">
              <Download className="w-4 h-4 mr-2" />
              Export Flashcards as PDF
            </Button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 animate-fade-in" style={{ animationDelay: '1000ms' }}>
            {sampleFlashcards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentCard(index);
                  setIsFlipped(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentCard 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 scale-125' 
                    : 'bg-muted hover:bg-muted-foreground/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
