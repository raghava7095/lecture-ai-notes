
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowLeft, Sun, Moon, User, LogOut, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const [isOpen, setIsOpen] = useState(false);

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

  const NavigationLinks = ({ mobile = false }) => (
    <>
      <Link 
        to="/dashboard" 
        onClick={() => mobile && setIsOpen(false)}
        className={mobile ? "block" : ""}
      >
        <Button variant="ghost" className={`text-sm ${mobile ? 'w-full justify-start h-12' : ''}`}>
          Dashboard
        </Button>
      </Link>
      <Link 
        to="/summaries" 
        onClick={() => mobile && setIsOpen(false)}
        className={mobile ? "block" : ""}
      >
        <Button variant="ghost" className={`text-sm ${mobile ? 'w-full justify-start h-12' : ''}`}>
          Summaries
        </Button>
      </Link>
      <Link 
        to="/flashcards" 
        onClick={() => mobile && setIsOpen(false)}
        className={mobile ? "block" : ""}
      >
        <Button variant="ghost" className={`text-sm ${mobile ? 'w-full justify-start h-12' : ''}`}>
          Flashcards
        </Button>
      </Link>
      <Link 
        to="/quizzes" 
        onClick={() => mobile && setIsOpen(false)}
        className={mobile ? "block" : ""}
      >
        <Button variant="ghost" className={`text-sm ${mobile ? 'w-full justify-start h-12' : ''}`}>
          Quizzes
        </Button>
      </Link>
      <Link 
        to="/export" 
        onClick={() => mobile && setIsOpen(false)}
        className={mobile ? "block" : ""}
      >
        <Button variant="ghost" className={`text-sm ${mobile ? 'w-full justify-start h-12' : ''}`}>
          Export
        </Button>
      </Link>
    </>
  );

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
          {/* Navigation Menu for authenticated users - Desktop */}
          {user && (
            <nav className="hidden md:flex items-center space-x-1">
              <NavigationLinks />
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

          {/* Mobile Navigation Sheet for authenticated users */}
          {user && (
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[50%] sm:w-[300px] p-0 animate-slide-in-right [&>button]:hidden"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-6 border-b">
                      <h2 className="text-lg font-semibold">Menu</h2>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(false)}
                        className="hover:scale-110 transition-transform duration-200"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex-1 py-6 px-4 space-y-2">
                      <NavigationLinks mobile={true} />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">{user.name}</span>
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
