import React, { useState, useEffect } from 'react';
import { Slider } from "./components/slider";
import { Switch } from "./components/switch";
import { Button } from "./components/button";
import { Progress } from "./components/progress";
import { Copy, Sun, Moon } from 'lucide-react';
import { Alert, AlertDescription } from './components/alert';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [copyAlert, setCopyAlert] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const generatePassword = () => {
    let chars = '';
    if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) chars += 'abcdefghijklmñnopqrstuvwxyz';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+[]{}|;:,.<>?';

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(newPassword);
    calculateStrength(newPassword);
  };

  const calculateStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score += 20;
    if (pwd.length >= 12) score += 20;
    if (/[A-Z]/.test(pwd)) score += 20;
    if (/[a-z]/.test(pwd)) score += 20;
    if (/[0-9]/.test(pwd)) score += 20;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 20;
    setStrength(score);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopyAlert(true);
    setTimeout(() => setCopyAlert(false), 2000);
  };

  const getStrengthText = (strength) => {
    if (strength <= 20) return 'Muy débil';
    if (strength <= 40) return 'Débil';
    if (strength <= 60) return 'Moderada';
    if (strength <= 80) return 'Fuerte';
    return 'Muy fuerte';
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className={`w-full max-w-md p-6 rounded-lg shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex justify-end mb-4">
        <Button
          variant="outline"
          size="small"
          onClick={() => setDarkMode(!darkMode)}
          className="transition-transform duration-300 hover:scale-110"
        >
          {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
        </div>
        
        <h1 className="text-2xl font-bold mb-6 text-center">PassGen</h1>
        
        <div className="mb-6">
  <div className="flex justify-between items-center mb-2">
    <label className="text-sm font-medium">Longitud de la contraseña:</label>
    <span className="text-sm font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded">{length}</span>
  </div>
  <Slider
    value={length}
    onValueChange={setLength}
    max={64}
    min={8}
    step={1}
  />
  <div className="flex justify-between text-xs text-gray-500 mt-1">
    <span>8</span>
    <span>36</span>
    <span>64</span>
  </div>
</div>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Incluir mayúsculas</span>
            <Switch checked={includeUppercase} onCheckedChange={setIncludeUppercase} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Incluir minúsculas</span>
            <Switch checked={includeLowercase} onCheckedChange={setIncludeLowercase} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Incluir números</span>
            <Switch checked={includeNumbers} onCheckedChange={setIncludeNumbers} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Incluir símbolos</span>
            <Switch checked={includeSymbols} onCheckedChange={setIncludeSymbols} />
          </div>
        </div>
        
        <Button 
          onClick={generatePassword}
          variant="primary"
          size="large"
          className="w-full mb-4 transition-transform duration-300 hover:scale-105"
        >
          Generar Contraseña
        </Button>
        
        {password && (
          <div className="mb-4 relative">
            <div className={`p-2 pr-10 rounded transition-all duration-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <p className="break-all">{password}</p>
            </div>
            <Button
              variant="icon"
              size="small"
              onClick={copyToClipboard}
              className="absolute top-2 right-2 transition-transform duration-300"
            >
              <Copy className="h-5 w-5" />
            </Button>
          </div>
        )}
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <label>Fortaleza de la contraseña:</label>
            <span className="font-semibold">{getStrengthText(strength)}</span>
          </div>
          <Progress value={strength} />
        </div>
        
        {copyAlert && (
          <Alert className="mb-4 transition-all duration-300">
            <AlertDescription>Contraseña copiada al portapapeles</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;