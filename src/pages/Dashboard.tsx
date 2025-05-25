
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, CreditCard, FileDown, Plus, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/shared/Header";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  if (!user) {
    navigate('/auth');
    return null;
  }

  const recentVideos = [
    {
      title: "Introduction to Machine Learning - Stanford CS229",
      status: "Completed",
      date: "2 hours ago",
      progress: 100
    },
    {
      title: "React Hooks Explained",
      status: "Processing",
      date: "1 day ago",
      progress: 75
    },
    {
      title: "Python Data Science Tutorial",
      status: "Completed",
      date: "3 days ago",
      progress: 100
    }
  ];

  const stats = [
    { label: "Videos Processed", value: "24", icon: TrendingUp, color: "text-blue-600" },
    { label: "Hours Saved", value: "156", icon: Clock, color: "text-green-600" },
    { label: "Study Materials", value: "42", icon: BookOpen, color: "text-purple-600" },
    { label: "Downloads", value: "18", icon: FileDown, color: "text-orange-600" }
  ];

  const quickActions = [
    { 
      title: "AI Summaries", 
      icon: GraduationCap, 
      href: "/summaries", 
      color: "from-purple-500 to-pink-500",
      description: "Transform videos into concise summaries"
    },
    { 
      title: "Flashcards", 
      icon: BookOpen, 
      href: "/flashcards", 
      color: "from-blue-500 to-cyan-500",
      description: "Create interactive learning cards"
    },
    { 
      title: "Quizzes", 
      icon: CreditCard, 
      href: "/quizzes", 
      color: "from-green-500 to-emerald-500",
      description: "Test your knowledge with AI quizzes"
    },
    { 
      title: "Export", 
      icon: FileDown, 
      href: "/export", 
      color: "from-orange-500 to-red-500",
      description: "Download your materials as PDFs"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'Processing': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header title="Dashboard" showBack={false} />

      <div className="container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to transform more videos into learning materials?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 bg-card/60 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="pt-6">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Quick Actions</h2>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Process New Video
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.href}>
                <Card className="group text-center border-0 bg-card/60 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in h-full" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="pt-6">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Videos */}
        <Card className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Recent Activity</span>
            </CardTitle>
            <CardDescription>Your recently processed YouTube videos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentVideos.map((video, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      {video.status === 'Completed' ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : (
                        <Clock className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium">{video.title}</h4>
                      <p className="text-sm text-muted-foreground">{video.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {video.status === 'Processing' && (
                      <div className="w-24 bg-muted rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${video.progress}%` }}
                        />
                      </div>
                    )}
                    <Badge className={getStatusColor(video.status)}>
                      {video.status}
                    </Badge>
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

export default Dashboard;
