
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ArrowRight, CheckCircle, Users, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/shared/Header";

const GetStarted = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Free to Start",
      description: "Begin with our free tier - no credit card required"
    },
    {
      icon: Users,
      title: "Join 50K+ Learners",
      description: "Be part of our growing community of successful students"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get your first summary in under 60 seconds"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is encrypted and never shared with third parties"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header title="Get Started" />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16 animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Get Started?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create your free account and start transforming YouTube videos into powerful study materials today.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-left animate-fade-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <CardTitle className="text-3xl mb-2">Start Your Learning Journey</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Sign up now and get instant access to all features
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 transform hover:scale-105 transition-all duration-200">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Create Free Account
                  </Button>
                </Link>
                <Link to="/intro">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <p className="text-sm text-muted-foreground mb-4">Trusted by students from top universities</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-lg font-semibold">Stanford</div>
              <div className="text-lg font-semibold">MIT</div>
              <div className="text-lg font-semibold">Harvard</div>
              <div className="text-lg font-semibold">Berkeley</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
