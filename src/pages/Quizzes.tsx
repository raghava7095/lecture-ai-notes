
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Trophy, Check, X, Brain, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

const Quizzes = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const sampleQuiz = [
    {
      question: "What is the primary goal of supervised learning?",
      options: [
        "To find hidden patterns in unlabeled data",
        "To learn a mapping from inputs to outputs using labeled training data",
        "To reduce the dimensionality of data",
        "To cluster similar data points together"
      ],
      correct: 1
    },
    {
      question: "Which of the following is NOT a type of machine learning?",
      options: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Deterministic Learning"
      ],
      correct: 3
    },
    {
      question: "What does cross-validation help us achieve?",
      options: [
        "Increase model complexity",
        "Assess how well a model generalizes to unseen data",
        "Reduce training time",
        "Eliminate the need for testing data"
      ],
      correct: 1
    }
  ];

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    
    if (parseInt(selectedAnswer) === sampleQuiz[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < sampleQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  const getScoreColor = () => {
    const percentage = (score / sampleQuiz.length) * 100;
    if (percentage >= 80) return "from-green-500 to-emerald-500";
    if (percentage >= 60) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-500";
  };

  if (showResult) {
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
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="animate-fade-in">
              <div className={`w-24 h-24 bg-gradient-to-r ${getScoreColor()} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Quiz Complete!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Here's how you performed on the Machine Learning quiz
              </p>
            </div>

            <Card className="animate-fade-in border-0 shadow-xl bg-card/80 backdrop-blur-sm" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="text-2xl">Your Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className={`text-6xl font-bold bg-gradient-to-r ${getScoreColor()} bg-clip-text text-transparent mb-2`}>
                    {score}/{sampleQuiz.length}
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {Math.round((score / sampleQuiz.length) * 100)}% Correct
                  </p>
                </div>

                <div className="space-y-4">
                  {sampleQuiz.map((question, index) => {
                    const userAnswer = parseInt(answers[index]);
                    const isCorrect = userAnswer === question.correct;
                    return (
                      <div key={index} className="p-4 rounded-lg border bg-muted/20">
                        <div className="flex items-start space-x-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isCorrect ? 'bg-green-500' : 'bg-red-500'
                          }`}>
                            {isCorrect ? (
                              <Check className="w-4 h-4 text-white" />
                            ) : (
                              <X className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium mb-2">{question.question}</p>
                            <p className="text-sm text-muted-foreground">
                              Your answer: {question.options[userAnswer]}
                            </p>
                            {!isCorrect && (
                              <p className="text-sm text-green-600 mt-1">
                                Correct: {question.options[question.correct]}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Button 
                  onClick={resetQuiz}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Interactive Quizzes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge with AI-generated multiple choice questions
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Progress */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Question {currentQuestion + 1} of {sampleQuiz.length}
            </Badge>
            <div className="w-full bg-muted rounded-full h-2 mt-4">
              <div 
                className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / sampleQuiz.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <Card className="animate-fade-in border-0 shadow-xl bg-card/80 backdrop-blur-sm" style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <CardTitle className="text-xl">
                {sampleQuiz[currentQuestion].question}
              </CardTitle>
              <CardDescription>
                Select the best answer from the options below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                <div className="space-y-4">
                  {sampleQuiz[currentQuestion].options.map((option, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors animate-fade-in"
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label 
                        htmlFor={`option-${index}`} 
                        className="flex-1 cursor-pointer text-base leading-relaxed"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>

              <Button 
                onClick={handleNext}
                disabled={!selectedAnswer}
                className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200"
              >
                {currentQuestion === sampleQuiz.length - 1 ? "Finish Quiz" : "Next Question"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
