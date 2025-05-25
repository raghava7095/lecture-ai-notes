import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Download, FileText, BookOpen, CreditCard, Loader2 } from "lucide-react";
import Header from "@/components/shared/Header";

const Export = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  const exportableItems = [
    {
      id: "ml-summary",
      title: "Machine Learning Fundamentals - Stanford CS229",
      type: "Summary",
      date: "2024-01-15",
      size: "2.4 MB"
    },
    {
      id: "react-flashcards",
      title: "React Hooks Tutorial",
      type: "Flashcards",
      date: "2024-01-14",
      size: "1.2 MB"
    },
    {
      id: "python-quiz",
      title: "Python Data Science Course",
      type: "Quiz",
      date: "2024-01-12",
      size: "856 KB"
    },
    {
      id: "web-dev-complete",
      title: "Web Development Basics",
      type: "Complete Package",
      date: "2024-01-10",
      size: "5.8 MB"
    }
  ];

  const handleItemToggle = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === exportableItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(exportableItems.map(item => item.id));
    }
  };

  const handleExport = async () => {
    if (selectedItems.length === 0) return;
    
    setIsExporting(true);
    setExportProgress(0);
    
    // Simulate export progress
    for (let i = 0; i <= 100; i += 10) {
      setExportProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    setIsExporting(false);
    setExportProgress(0);
    
    // In a real app, this would trigger the actual download
    console.log('Exporting items:', selectedItems);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Summary': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'Flashcards': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'Quiz': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      case 'Complete Package': return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header title="Export" backPath="/dashboard" />

      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Export Your Study Materials
          </h1>
          <p className="text-xl text-muted-foreground">
            Download your summaries, flashcards, and quizzes as beautiful PDFs
          </p>
        </div>

        {/* Export Controls */}
        <Card className="mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Select Items to Export</span>
            </CardTitle>
            <CardDescription>Choose which study materials you want to download</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="select-all"
                  checked={selectedItems.length === exportableItems.length}
                  onCheckedChange={handleSelectAll}
                />
                <Label htmlFor="select-all" className="font-medium">
                  Select All ({exportableItems.length} items)
                </Label>
              </div>
              <Badge variant="outline">
                {selectedItems.length} selected
              </Badge>
            </div>

            <div className="space-y-3">
              {exportableItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id={item.id}
                      checked={selectedItems.includes(item.id)}
                      onCheckedChange={() => handleItemToggle(item.id)}
                    />
                    <Label htmlFor={item.id} className="flex-1 cursor-pointer">
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span>{item.date}</span>
                          <span>{item.size}</span>
                        </div>
                      </div>
                    </Label>
                  </div>
                  <Badge className={getTypeColor(item.type)}>
                    {item.type}
                  </Badge>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <Button 
                onClick={handleExport}
                disabled={selectedItems.length === 0 || isExporting}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isExporting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Exporting... {exportProgress}%
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Export Selected ({selectedItems.length})
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Export Format Options */}
        <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
          <CardHeader>
            <CardTitle>Export Options</CardTitle>
            <CardDescription>Customize your export preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: FileText, title: "PDF Format", description: "High-quality PDF documents" },
                { icon: BookOpen, title: "Include Images", description: "Embed all diagrams and screenshots" },
                { icon: CreditCard, title: "Compact Size", description: "Optimized for smaller file sizes" }
              ].map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border">
                  <option.icon className="w-5 h-5 text-blue-600" />
                  <div>
                    <h4 className="font-medium">{option.title}</h4>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Export;
