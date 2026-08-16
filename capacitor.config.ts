import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.enigmatic.musicplayer',
  appName: 'Music Player',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    // This allows HTTP connections on iOS so the app can connect to your local backend
    cleartext: true
  }
};

export default config;
