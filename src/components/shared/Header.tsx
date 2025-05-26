
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowLeft, Sun, Moon, User, LogOut } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  backPath?: string;
}

const Header = ({ title, showBack = true, backPath }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the back path based on current location
  const getBackPath = () => {
    if (backPath) return backPath;
    
    // If user is authenticated, go back to dashboard
    if (user) {
      if (location.pathname === '/dashboard') return '/';
      return '/dashboard';
    }
    
    // For non-authenticated users
    if (location.pathname === '/get-started') return '/intro';
    if (location.pathname === '/auth') return '/get-started';
    return '/intro';
  };

  const handleSignOut = () => {
    signOut();
    navigate('/intro');
  };

  const handleBack = () => {
    navigate(getBackPath());
  };

  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showBack && (
            <Button variant="ghost" onClick={handleBack} className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
          )}
          <Link to={user ? "/dashboard" : "/intro"} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NoteNexus
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {/* Navigation Menu for authenticated users */}
          {user && (
            <nav className="hidden md:flex items-center space-x-1">
              <Link to="/summaries">
                <Button variant="ghost" className="text-sm">
                  Summaries
                </Button>
              </Link>
              <Link to="/flashcards">
                <Button variant="ghost" className="text-sm">
                  Flashcards
                </Button>
              </Link>
              <Link to="/quizzes">
                <Button variant="ghost" className="text-sm">
                  Quizzes
                </Button>
              </Link>
              <Link to="/export">
                <Button variant="ghost" className="text-sm">
                  Export
                </Button>
              </Link>
            </nav>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:scale-110 transition-transform duration-200"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{user.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
