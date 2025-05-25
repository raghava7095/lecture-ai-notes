
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, BookOpen, CreditCard, FileDown, User, LogOut, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  const recentVideos = [
    {
      title: "Introduction to Machine Learning - Stanford CS229",
      status: "Processed",
      date: "2 hours ago"
    },
    {
      title: "React Hooks Explained",
      status: "Processing",
      date: "1 day ago"
    },
    {
      title: "Python Data Science Tutorial",
      status: "Completed",
      date: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NoteNexus
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span className="text-sm">{user?.name}</span>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Welcome back, {user?.name}!</h1>
          <p className="text-xl text-muted-foreground">
            Ready to transform more videos into learning materials?
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { title: "AI Summaries", icon: Brain, href: "/summaries", color: "purple" },
            { title: "Flashcards", icon: BookOpen, href: "/flashcards", color: "blue" },
            { title: "Quizzes", icon: CreditCard, href: "/quizzes", color: "green" },
            { title: "Export", icon: FileDown, href: "/export", color: "orange" }
          ].map((action, index) => (
            <Link key={index} to={action.href}>
              <Card className="text-center border-0 bg-card/60 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="pt-6">
                  <action.icon className={`w-8 h-8 mx-auto mb-3 text-${action.color}-600`} />
                  <h3 className="font-semibold">{action.title}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent Videos */}
        <Card className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <CardHeader>
            <CardTitle>Recent Videos</CardTitle>
            <CardDescription>Your recently processed YouTube videos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentVideos.map((video, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div>
                    <h4 className="font-medium">{video.title}</h4>
                    <p className="text-sm text-muted-foreground">{video.date}</p>
                  </div>
                  <Badge variant={video.status === 'Completed' ? 'default' : video.status === 'Processing' ? 'secondary' : 'outline'}>
                    {video.status}
                  </Badge>
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
