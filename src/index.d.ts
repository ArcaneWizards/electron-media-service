export default class MediaService {
  constructor();
  startService(): void;
  stopService(): Promise<void>;
  on(action: 'play', callback: () => void): void;
  on(action: 'pause', callback: () => void): void;
  on(action: 'playPause', callback: () => void): void;
  on(action: 'next', callback: () => void): void;
  on(action: 'previous', callback: () => void): void;
  on(action: 'seek', callback: (toMs: number) => void): void;
  setMetaData(metadata: {
    title?: string;
    artist?: string;
    album?: string;
    albumArt?: string;
    state?: 'playing' | 'paused' | 'stopped';
    /** Progress through the track in milliseconds */
    currentTime?: number;
    /** Total length of the track in milliseconds */
    duration?: number;
  }): void;
}
