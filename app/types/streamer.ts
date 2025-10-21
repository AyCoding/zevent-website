export interface Streamer {
  pseudo: string;
  avatar: string;
  photo?: string;
  twitch: string;
  online: boolean;
  cagnotte: number;
  live?: boolean;
  display: string;
  profileUrl: string;
  location: string;
  donationAmount: {
    number: number;
  };
}
