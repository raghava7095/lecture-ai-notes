import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, BookOpen, CreditCard, FileDown, User, LogOut } from "lucide-react";
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
      <Header title="Dashboard" showBack={false} />

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
