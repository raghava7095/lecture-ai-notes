
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Download, Calendar, FileText, BookOpen, CreditCard } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/shared/Header";

const Profile = () => {
  const { user } = useAuth();

  const downloadHistory = [
    {
      title: "Machine Learning Fundamentals - Stanford CS229",
      type: "Summary",
      date: "2024-01-15",
      size: "2.4 MB"
    },
    {
      title: "React Hooks Tutorial",
      type: "Flashcards",
      date: "2024-01-14",
      size: "1.2 MB"
    },
    {
      title: "Python Data Science Course",
      type: "Quiz",
      date: "2024-01-12",
      size: "856 KB"
    },
    {
      title: "Web Development Basics",
      type: "Complete Package",
      date: "2024-01-10",
      size: "5.8 MB"
    }
  ];

  const stats = [
    { label: "Videos Processed", value: "24", icon: FileText },
    { label: "Summaries Created", value: "24", icon: BookOpen },
    { label: "Flashcard Sets", value: "18", icon: CreditCard },
    { label: "Downloads", value: "42", icon: Download }
  ];

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
      <Header title="Profile" backPath="/dashboard" />

      <div className="container mx-auto px-4 py-12">
        {/* Profile Header */}
        <div className="mb-12 animate-fade-in">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{user?.name}</h1>
                  <div className="flex items-center space-x-2 mt-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-blue-100">{user?.email}</span>
                  </div>
                  <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-0">
                    Member since January 2024
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center animate-fade-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="pt-6">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Download History */}
        <Card className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download History</span>
            </CardTitle>
            <CardDescription>Your recently downloaded study materials</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {downloadHistory.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{item.date}</span>
                      </div>
                      <span>{item.size}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={getTypeColor(item.type)}>
                      {item.type}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      Re-download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Account Actions */}
        <Card className="mt-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your account preferences and data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start">
                <User className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" className="justify-start">
                <Download className="w-4 h-4 mr-2" />
                Export All Data
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
