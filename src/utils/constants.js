import home from "../assets/sideNavLogos/home.svg";
import shorts from "../assets/sideNavLogos/shorts.svg";
import broadcast from "../assets/sideNavLogos/broadcast.svg";
import channels from "../assets/sideNavLogos/channels.svg";
import clapperboard from "../assets/sideNavLogos/clapperboard.svg";
import fashion from "../assets/sideNavLogos/fashion.svg";
import feedback from "../assets/sideNavLogos/feedback.svg";
import flag from "../assets/sideNavLogos/flag.svg";
import gaming from "../assets/sideNavLogos/gaming.svg";
import help from "../assets/sideNavLogos/help.svg";
import history from "../assets/sideNavLogos/history.svg";
import music from "../assets/sideNavLogos/history.svg";
import news from "../assets/sideNavLogos/news.svg";
import settings from "../assets/sideNavLogos/settings.svg";
import subscriptions from "../assets/sideNavLogos/subscription.svg";
import trending from "../assets/sideNavLogos/trending.svg";
import trophy from "../assets/sideNavLogos/trophy.svg";
import yourVideo from "../assets/sideNavLogos/yourVideo.svg";
import youtubeKids from "../assets/sideNavLogos/youtubeKids.svg";
import youtubeMusic from "../assets/sideNavLogos/youtubeMusic.svg";
import youtubeRound from "../assets/sideNavLogos/youtubeRound.svg";

export const ICONS = {
  WHAT_TO_WATCH: home,
  TAB_SHORTS: shorts,
  SUBSCRIPTIONS: subscriptions,
  VIDEO_LIBRARY_WHITE: yourVideo,
  WATCH_HISTORY: history,
  TRENDING: trending,
  MUSIC: music,
  CLAPPERBOARD: clapperboard,
  GAMING_LOGO: gaming,
  NEWS: news,
  TROPHY: trophy,
  FASHION_LOGO: fashion,
  BROADCAST: broadcast,
  ADD_CIRCLE: channels,
  YOUTUBE_ROUND: youtubeRound,
  YOUTUBE_MUSIC: youtubeMusic,
  YOUTUBE_KIDS_ROUND: youtubeKids,
  SETTINGS: settings,
  FLAG: flag,
  HELP: help,
  FEEDBACK: feedback,
};

export const API_KEY = "AIzaSyBoWf6cnKY9IXNVl4MKPWt2Fg3dWT6txxY";
export const ALL_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`;
export const COMMENTS_URL = `https://youtube.googleapis.com/youtube/v3/comments?key=${API_KEY}`;
