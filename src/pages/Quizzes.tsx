
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Trophy, Play, Download, Clock, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import Header from "@/components/shared/Header";

const Quizzes = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const mockQuestions = [
    {
      question: "What is React used for?",
      options: ["Building user interfaces", "Data analysis", "Machine learning", "Game development"],
      correctAnswer: "Building user interfaces"
    },
    {
      question: "What is a component in React?",
      options: ["A reusable UI element", "A database query", "A server-side function", "A CSS style"],
      correctAnswer: "A reusable UI element"
    },
    {
      question: "What is JSX?",
      options: ["A syntax extension to JavaScript", "A database language", "A server technology", "A type of CSS"],
      correctAnswer: "A syntax extension to JavaScript"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    console.log("Processing YouTube URL for quiz:", youtubeUrl);

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
    }, 3000);
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }

    const isCorrect = selectedAnswer === mockQuestions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      setShowResult(false);
      setSelectedAnswer("");
      if (currentQuestion < mockQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        alert(`Quiz completed! Your score: ${score + (isCorrect ? 1 : 0)}/${mockQuestions.length}`);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header title="Interactive Quizzes" />

      <div className="container mx-auto px-4 py-12">
        {/* Input Section */}
        <Card className="mb-8 animate-fade-in transform hover:scale-105 transition-all duration-300">
          <CardHeader>
            <CardTitle>Generate a Quiz</CardTitle>
            <CardDescription>Enter a YouTube URL to generate a quiz based on the video content</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex items-center space-x-4">
              <Input
                type="url"
                placeholder="Paste YouTube URL here"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" disabled={isProcessing} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                {isProcessing ? (
                  <>
                    <Clock className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Generate Quiz
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Quiz Section */}
        <Card className="animate-fade-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '100ms' }}>
          <CardHeader>
            <CardTitle>Quiz</CardTitle>
            <CardDescription>Answer the questions below</CardDescription>
          </CardHeader>
          <CardContent>
            {mockQuestions.length > 0 ? (
              <>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Question {currentQuestion + 1}/{mockQuestions.length}
                  </h3>
                  <p>{mockQuestions[currentQuestion].question}</p>
                </div>
                <RadioGroup onValueChange={handleAnswerSelect} value={selectedAnswer} className="space-y-2">
                  {mockQuestions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 hover:bg-muted/50 p-2 rounded transition-colors">
                      <RadioGroupItem value={option} id={`option-${index}`} className="peer h-4 w-4 shrink-0 rounded-full border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
                      <Label htmlFor={`option-${index}`} className="cursor-pointer peer-data-[state=checked]:text-primary">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <Button onClick={handleNextQuestion} disabled={showResult} className="mt-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                  {showResult ? "Loading next question..." : "Next Question"}
                </Button>
                {showResult && (
                  <div className="mt-4 animate-fade-in">
                    {selectedAnswer === mockQuestions[currentQuestion].correctAnswer ? (
                      <Badge variant="outline" className="bg-green-500 text-white animate-scale-in">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Correct!
                      </Badge>
                    ) : (
                      <Badge variant="destructive" className="bg-red-500 text-white animate-scale-in">
                        <XCircle className="mr-2 h-4 w-4" />
                        Incorrect! The correct answer was: {mockQuestions[currentQuestion].correctAnswer}
                      </Badge>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center animate-fade-in">
                <Trophy className="mx-auto h-12 w-12 text-yellow-500 mb-4 animate-pulse" />
                <p className="text-lg">No quiz generated yet. Please enter a YouTube URL to generate a quiz.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quizzes;
