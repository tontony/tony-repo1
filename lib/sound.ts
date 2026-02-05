'use client';

export class SoundPlayer {
  private audio: HTMLAudioElement | null = null;

  play(soundUrl: string): void {
    if (typeof window === 'undefined') return;
    
    try {
      // Stop any currently playing sound
      this.stop();
      
      // Create and play new sound
      this.audio = new Audio(soundUrl);
      this.audio.play().catch((error) => {
        console.warn('Sound playback failed:', error);
      });
    } catch (error) {
      console.warn('Sound initialization failed:', error);
    }
  }

  stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
  }

  // Play a success sound
  playSuccess(): void {
    this.playBeep(800, 200);
  }

  // Play an error sound
  playError(): void {
    this.playBeep(200, 300);
  }

  // Play a click sound
  playClick(): void {
    this.playBeep(600, 100);
  }

  // Generate a simple beep sound using Web Audio API
  private playBeep(frequency: number, duration: number): void {
    if (typeof window === 'undefined') return;
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration / 1000);
    } catch (error) {
      console.warn('Beep sound generation failed:', error);
    }
  }
}

export const soundPlayer = new SoundPlayer();
