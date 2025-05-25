import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, BookOpen, CreditCard, Package, CheckCircle } from "lucide-react";
import Header from "@/components/shared/Header";

const Export = () => {
  const [selectedItems, setSelectedItems] = useState({
    transcript: true,
    summary: true,
    flashcards: true,
    quiz: false
  });
  const [isExporting, setIsExporting] = useState(false);
  const [exportComplete, setExportComplete] = useState(false);

  const exportOptions = [
    {
      id: 'transcript',
      title: 'Video Transcript',
      description: 'Complete text transcription of the video',
      size: '2.3 KB'
    },
    {
      id: 'summary',
      title: 'AI Summary',
      description: 'Key points and main concepts from the video',
      size: '1.1 KB'
    },
    {
      id: 'flashcards',
      title: 'Flashcards',
      description: 'Question and answer cards for study',
      size: '0.8 KB'
    },
    {
      id: 'quiz',
      title: 'Quiz Questions',
      description: 'Multiple choice questions with answers',
      size: '1.5 KB'
    }
  ];

  const handleItemToggle = (itemId: string) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId as keyof typeof prev]
    }));
  };

  const handleExport = () => {
    setIsExporting(true);
    // Simulate export process
    setTimeout(() => {
      setIsExporting(false);
      setExportComplete(true);
      setTimeout(() => setExportComplete(false), 3000);
    }, 2000);
  };

  const selectedCount = Object.values(selectedItems).filter(Boolean).length;
  const totalSize = exportOptions
    .filter(option => selectedItems[option.id as keyof typeof selectedItems])
    .reduce((acc, option) => acc + parseFloat(option.size), 0)
    .toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header title="Export & Download" />

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Download className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Export Everything
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download your notes, flashcards, and quizzes as beautiful PDFs
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Video Info */}
          <Card className="animate-fade-in border-0 shadow-xl bg-card/80 backdrop-blur-sm" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Current Session</span>
              </CardTitle>
              <CardDescription>
                Introduction to Machine Learning - Stanford CS229
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Duration: 1:24:30 • Processed: 2 minutes ago
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Ready to Export
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Export Options */}
          <Card className="animate-fade-in border-0 shadow-xl bg-card/80 backdrop-blur-sm" style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <CardTitle>Select Items to Export</CardTitle>
              <CardDescription>
                Choose which materials you want to include in your PDF
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {exportOptions.map((option, index) => (
                  <div 
                    key={option.id} 
                    className="flex items-center space-x-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors animate-fade-in"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <Checkbox
                      id={option.id}
                      checked={selectedItems[option.id as keyof typeof selectedItems]}
                      onCheckedChange={() => handleItemToggle(option.id)}
                    />
                    <div className="flex-1">
                      <Label htmlFor={option.id} className="text-base font-medium cursor-pointer">
                        {option.title}
                      </Label>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {option.size}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Export Summary */}
          <Card className="animate-fade-in border-0 shadow-xl bg-card/80 backdrop-blur-sm" style={{ animationDelay: '800ms' }}>
            <CardHeader>
              <CardTitle>Export Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Selected Items:</span>
                  <span className="font-medium">{selectedCount} of {exportOptions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Size:</span>
                  <span className="font-medium">{totalSize} KB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Format:</span>
                  <span className="font-medium">PDF</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Export Button */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <Button 
              onClick={handleExport}
              disabled={selectedCount === 0 || isExporting}
              className="w-full h-14 text-lg bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-200"
            >
              {isExporting ? (
                <>
                  <Loader className="w-5 h-5 mr-2 animate-spin" />
                  Generating PDF...
                </>
              ) : exportComplete ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Export Complete!
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Export as PDF
                </>
              )}
            </Button>
            {selectedCount === 0 && (
              <p className="text-sm text-muted-foreground mt-2">
                Please select at least one item to export
              </p>
            )}
          </div>

          {/* Preview Features */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '1200ms' }}>
            {[
              {
                title: "Beautiful Formatting",
                description: "Professional PDF layout with your branding"
              },
              {
                title: "Instant Download",
                description: "Ready to download in seconds"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center border-0 bg-card/60 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <FileText className="w-8 h-8 mx-auto mb-3 text-orange-600" />
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

export default Export;
