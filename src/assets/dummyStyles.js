export const headerStyles = {
  // Layout styles
  container: "sticky top-6 z-50 px-4",
  innerContainer: "max-w-6xl mx-auto",
  mainWrapper:
    "backdrop-blur-md bg-gradient-to-r from-[#1e1b4b]/90 via-[#312e81]/90 to-[#4c1d95]/90 border border-white/10 rounded-2xl p-3 flex items-center gap-4 shadow-xl",

  // Logo section
  logoContainer: "flex items-center gap-3",
  logoImage: "w-10 h-10 flex items-center justify-center overflow-hidden",
  logoImg: "w-full h-full object-contain",
  logoText: "hidden sm:block",
  logoTitle:
    "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-blue-300 font-semibold text-2xl leading-none drop-shadow-md",

  // Search section
  searchForm:
    "flex-1 flex items-center justify-center md:justify-start relative",
  searchWrapper: "w-full max-w-xl relative",
  searchInput:
    "w-full rounded-full border border-fuchsia-400/30 bg-[#1e1b4b]/40 text-white/90 py-2 pl-4 pr-12 text-sm placeholder:text-slate-400 focus:outline-none ring-2 ring-fuchsia-500/30 focus:ring-fuchsia-400/60 transition",
  searchButton:
    "absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-500 text-white text-sm shadow-md hover:scale-[1.05] transition",

  // Navigation section
  navContainer: "hidden md:flex items-center gap-4",
  navButtons:
    "text-sm text-slate-200 hover:text-fuchsia-300 transition font-medium",
  authContainer: "flex items-center gap-2",

  loginButton:
    "px-3 py-1 rounded-full text-sm bg-transparent border border-fuchsia-400/40 text-fuchsia-200 hover:bg-fuchsia-500/20 transition",
  signupButton:
    "px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-500 text-white text-sm shadow-md hover:scale-[1.05] transition",

  // Mobile menu
  mobileMenuButton: "md:hidden ml-auto",
  menuToggleButton:
    "p-2 rounded-md bg-[#1e1b4b]/80 border border-fuchsia-500/30 text-white",
  menuIcon: "w-5 h-5 text-fuchsia-200",
  mobileMenu:
    "mt-2 p-3 bg-[#1e1b4b]/90 rounded-lg shadow-lg border border-fuchsia-500/30 absolute right-4 top-20 w-[90%] max-w-xs backdrop-blur-lg",
  mobileNav: "flex flex-col gap-2",
  mobileNavButton:
    "text-sm text-fuchsia-100 text-left w-full hover:text-fuchsia-300",
  mobileAuthContainer: "mt-3 flex gap-2",
  mobileAuthButton:
    "flex-1 px-3 py-2 rounded-full text-white font-medium shadow-md",
  mobileLogin: "bg-indigo-700/70 hover:bg-indigo-600",
  mobileSignup: "bg-fuchsia-600/80 hover:bg-fuchsia-500",
};

export const liveMatchStyles = {
  container: "space-y-4",

  headerContainer:
    "backdrop-blur-lg bg-gradient-to-r from-indigo-900/50 via-purple-900/40 to-fuchsia-900/40 p-3 rounded-2xl flex items-center justify-between shadow-lg border border-white/10",
  titleWrapper: "live-title",
  title: "title",
  dotPulse: "dot-pulse",
  dotBase: "dot-base",
  subtitle: "text-xs text-fuchsia-200",

  quotaAlert:
    "rounded-2xl p-3 bg-fuchsia-100/20 border border-fuchsia-300/30 text-fuchsia-200 text-sm backdrop-blur-md",

  loadingContainer: "p-6",
  errorContainer: "p-6 text-rose-400",

  matchesGrid: "grid grid-cols-1 lg:grid-cols-2 gap-6",

  matchCard:
    "group relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-700/60 via-fuchsia-600/40 to-purple-700/50 hover:scale-[1.02] transition-all duration-200 shadow-2xl border border-white/10",
  matchCardInner:
    "rounded-2xl bg-[#0f0c29]/70 backdrop-blur-md p-4 h-full flex flex-col justify-between border border-white/10",

  matchHeader: "flex items-start justify-between",
  matchStatus: "text-sm font-semibold text-fuchsia-200 truncate max-w-[60%]",
  matchTime: "text-xs text-indigo-300",

  teamsContainer: "mt-4 flex items-center justify-between gap-4",
  teamContainer: "flex items-center gap-3 min-w-0",
  teamContainerReversed: "flex items-center gap-3 min-w-0 justify-end",
  teamName: "text-sm font-semibold text-white truncate",
  teamScore: "text-xs text-indigo-200 mt-1",
  vsText: "text-xs text-fuchsia-400",

  matchFooter: "mt-4 flex items-center justify-between text-xs text-slate-300",
  detailsButton:
    "px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-500 text-white text-xs shadow-md hover:scale-[1.05] transition",
  matchId: "text-xs text-slate-400 hidden sm:block",
  venue: "text-xs text-indigo-200",

  flagImage: "w-12 h-8 object-cover rounded-md shadow-md flex-shrink-0",
  emojiContainer: "w-12 h-10 flex items-center justify-center text-2xl",
  initialsContainer:
    "w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white shadow",

  noMatchesContainer:
    "rounded-2xl p-4 bg-indigo-900/40 text-sm text-slate-200 backdrop-blur-md",
  rawDataPre:
    "max-h-64 overflow-auto text-xs bg-indigo-950/50 p-3 rounded text-fuchsia-200",

  refreshButton:
    "px-3 py-1 rounded-full bg-fuchsia-700/40 text-fuchsia-100 text-sm shadow-sm hover:bg-fuchsia-600/60",

  liveTitle: `
.live-title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.title {
  background: linear-gradient(90deg, #e879f9, #a855f7, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
}

.dot-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #f43f5e;
  position: relative;
  animation: pulse 1.5s infinite;
}

.dot-base {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #f43f5e;
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(244, 63, 94, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(244, 63, 94, 0);
  }
}
  `,
};

// Color palette for team initials
export const colorPalette = [
  ["#f472b6", "#a855f7"],
  ["#22d3ee", "#6366f1"],
  ["#facc15", "#f97316"],
  ["#14b8a6", "#3b82f6"],
  ["#9333ea", "#ec4899"],
  ["#0ea5e9", "#7e22ce"],
  ["#f43f5e", "#8b5cf6"],
];

// Helper function to pick colors for team initials
export const pickColors = (s) => {
  if (!s) return colorPalette[0];
  const sum = [...s].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return colorPalette[sum % colorPalette.length];
};

// Helper function to get gradient style for team initials
export const getGradientStyle = (c1, c2) => ({
  background: `linear-gradient(90deg, ${c1} 0%, ${c1} 50%, ${c2} 50%, ${c2} 100%)`,
});

export const matchDetailStyles = {
  // Main container
  container: "space-y-6",

  // Header section
  headerContainer:
    "backdrop-blur-md bg-white/60 p-3 rounded-2xl border border-white/30 flex items-center justify-between",
  headerTitle: "text-sm text-slate-800 font-medium",
  headerSubtitle: "text-xs text-slate-500",
  headerButtonGroup: "flex items-center gap-3",
  lastUpdatedText: "text-xs text-slate-500",
  refreshButton:
    "px-3 py-1 rounded-full bg-white border border-white/30 text-sm",
  rawToggleButton:
    "px-3 py-1 rounded-full bg-white/30 border border-white/30 text-xs text-slate-600",

  // Loading/error states
  loadingContainer: "p-6",
  errorContainer: "p-6 text-rose-600",

  // Main content grid
  mainGrid: "grid grid-cols-1 lg:grid-cols-3 gap-6",
  leftColumn: "lg:col-span-2 space-y-4",
  scoreboardContainer: "mt-4",

  // Raw data section
  rawDataContainer:
    "rounded-2xl p-4 bg-white border border-white/30 text-sm text-slate-600",
  rawDataTitle: "font-medium mb-2",
  rawDataSectionTitle: "text-xs mb-2",
  rawDataPre: "max-h-40 overflow-auto bg-slate-50 p-3 rounded",

  // Sidebar sections
  sidebarContainer: "space-y-4",
  summaryCard: "rounded-2xl border border-white/30 bg-white p-4",
  summaryTitle: "text-sm font-medium text-slate-700 mb-2",
  summaryText: "text-sm text-slate-600",
  venueText: "text-xs text-slate-500 mt-2",

  // Players section
  playersCard: "rounded-2xl border border-white/30 bg-white p-4",
  playersTitle: "text-sm font-medium text-slate-700 mb-2",
  noPlayersText: "text-sm text-slate-500 mt-2",
};

// src/assets/dummyStyles.js

export const matchCardStyles = {
  // Main container
  card: "rounded-2xl overflow-hidden shadow-sm border border-white/30 cursor-pointer hover:shadow-md transition",

  // Header section
  header:
    "backdrop-blur-md bg-white/60 px-4 py-3 flex items-center justify-between",
  venue: "text-sm text-slate-700 font-medium",
  time: "text-xs text-slate-600",

  // Main content
  content: "bg-white p-5",
  teamsContainer: "flex items-center justify-between",
  teamsWrapper: "flex items-center gap-6",

  // Team sections
  teamContainer: "text-center",
  teamInfo: "flex items-center gap-2",
  flagContainer:
    "w-10 h-10 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center",
  flagImage: "w-full h-full object-cover",
  flagEmoji: "text-xl",
  flagInitials: "text-sm font-medium text-slate-700",
  teamName: "text-sm text-slate-500",
  teamScore: "text-2xl font-semibold text-slate-800 mt-2",

  // VS separator
  vs: "text-slate-400",

  // Status section
  statusContainer: "text-right",
  status: "text-sm font-semibold",
  statusLive: "text-emerald-600",
  statusDefault: "text-slate-600",
  matchId: "text-xs text-slate-400 mt-1",

  // Scorecard link
  scorecard: "mt-4 text-sm text-slate-600",

  // Footer
  footer:
    "backdrop-blur-md bg-white/60 px-4 py-2 flex items-center justify-between text-xs text-slate-600 border-t border-white/30",
  details: "opacity-80",
};

export const playerListStyles = {
  // Empty state
  noPlayersContainer:
    "p-4 bg-white rounded-xl shadow-sm text-sm text-slate-500",

  // Main list container
  listContainer: "space-y-3",

  // Player item
  playerItem:
    "w-full text-left p-3 rounded-lg bg-white border border-white/30 hover:shadow-sm flex items-center gap-4",

  // Avatar container
  avatarContainer: "flex-shrink-0",

  // Avatar styles
  avatarImage: "w-full h-full rounded-full object-cover",
  avatarFallback:
    "w-full h-full rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-medium",

  // Player info section
  playerInfo: "flex-1",
  playerMainInfo: "flex items-center justify-between",
  playerName: "font-medium text-slate-800",
  playerDetails: "text-xs text-slate-500",
  playerStats: "text-sm text-slate-700",
  playerBio: "text-xs text-slate-500 mt-1 line-clamp-2",
};

// Avatar size configuration
export const avatarSizes = {
  compact: {
    width: 36,
    height: 36,
  },
  default: {
    width: 44,
    height: 44,
  },
};

export const scoreboardStyles = {
  // Main container
  container:
    "rounded-2xl p-[1px] bg-gradient-to-br from-cyan-100/40 via-blue-50/30 to-indigo-100/30 overflow-hidden",
  innerContainer: "rounded-2xl bg-white/85 backdrop-blur-sm",

  // Header section
  header: "px-5 py-4 flex items-start justify-between",
  title: "text-sm text-slate-700 font-medium",
  matchId: "text-xs text-slate-500 mt-1",
  updateStatus: "text-xs text-slate-500",

  // Content area
  content: "p-6 space-y-4",
  loading: "text-sm text-slate-500",
  error: "text-sm text-rose-600",

  // Teams header
  teamsHeader: "rounded-2xl p-4 bg-white border border-white/30",
  teamsContainer: "flex items-center gap-4 justify-between",
  teamWrapper: "flex items-center gap-4 min-w-0",
  teamFlagContainer: "flex items-center gap-3",
  flagImage: "w-8 h-6 object-cover rounded-sm shadow-sm",
  flagEmoji: "w-8 h-6 flex items-center justify-center text-lg",
  flagInitials:
    "w-8 h-8 rounded-full flex items-center justify-center font-semibold text-white text-xs",
  teamInfo: "min-w-0",
  teamName: "text-sm font-semibold text-slate-900 truncate",
  teamMeta: "text-xs text-slate-500 truncate",
  vs: "text-xs text-slate-400",

  // Innings sections
  inningsContainer: "space-y-4",
  inningsItem: "rounded-2xl overflow-hidden",
  inningsHeader:
    "flex items-center justify-between p-3 cursor-pointer backdrop-blur-md bg-white/60",
  inningsTitle: "text-sm font-medium text-slate-800",
  inningsSummary: "text-xs text-slate-500",
  inningsScore: "text-sm text-slate-700",
  inningsOvers: "text-xs text-slate-500",

  // Expanded innings content
  expandedInnings: "bg-white p-4 grid grid-cols-1 md:grid-cols-2 gap-4",
  sectionTitle: "text-xs text-slate-500 mb-2 font-medium",

  // Batsmen and bowlers lists
  batsmenList: "space-y-2",
  batsmanItem: "p-2 rounded-md bg-slate-50 flex items-center justify-between",
  batsmanInfo: "min-w-0",
  batsmanName: "font-medium text-slate-800 truncate",
  batsmanOutDesc: "text-xs text-slate-500 truncate",
  batsmanStats: "text-right text-sm text-slate-600 min-w-[96px]",
  batsmanExtras: "text-xs text-slate-500",

  bowlersList: "space-y-2",
  bowlerItem: "p-2 rounded-md bg-slate-50 flex items-center justify-between",
  bowlerName: "font-medium text-slate-800 truncate",
  bowlerStats: "text-xs text-slate-600",

  // No data states
  noData: "rounded-2xl p-4 bg-white/90 text-sm text-slate-600",
  noBatsmen: "text-sm text-slate-500",
  noBowlers: "text-sm text-slate-500",

  // Raw data display
  rawPayload: "text-sm text-slate-600 mb-2",
  rawPre: "text-xs max-h-60 overflow-auto bg-slate-50 p-3 rounded",
  rawToggle: "px-3 py-1 rounded-full bg-white border border-white/30 text-xs",
  rawWrapper: "text-xs mt-3 max-h-64 overflow-auto bg-white p-3 rounded border",

  // Footer
  footer:
    "px-5 py-3 text-xs text-slate-600 bg-white/60 backdrop-blur-md flex items-center justify-between border-t border-white/30",
  footerDetails: "opacity-80",
};

export const scoreCardStyles = {
  // Main container
  container: "space-y-4",

  // No data states
  noDataContainer: "p-4 bg-white rounded-xl shadow-sm text-sm text-slate-600",
  emptyStateContainer:
    "p-6 bg-white rounded-xl shadow-sm text-sm text-slate-600",

  // Innings container
  inningsContainer: "rounded-2xl border border-white/30 overflow-hidden",

  // Header section
  header:
    "backdrop-blur-md bg-white/60 px-5 py-3 flex items-center justify-between",
  headerTitle: "text-sm text-slate-700 font-medium",
  headerScore: "text-xs text-slate-500 mt-1",
  expandButton: "text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-800",

  // Body section
  body: "bg-white p-5 space-y-4",

  // Batting section
  battingSection: "text-sm font-medium text-slate-700 mb-2",
  battingTableContainer:
    "w-full overflow-x-auto rounded-lg border border-slate-100",
  battingTable: "w-full text-sm",
  tableHeader: "text-left text-xs text-slate-500",
  tableHeaderCell: "px-3 py-2",
  tableRow: "border-t last:border-b",
  tableCell: "px-3 py-2",
  batsmanName: "font-medium text-slate-700",
  batsmanDesc: "text-xs text-slate-500",
  noBatsmenText: "text-sm text-slate-500",

  // Bowling section
  bowlingSection: "text-sm font-medium text-slate-700 mb-2",
  bowlersGrid: "grid grid-cols-1 md:grid-cols-2 gap-2",
  bowlerCard: "p-3 rounded-lg bg-slate-50",
  bowlerHeader: "flex items-center justify-between",
  bowlerName: "font-medium text-slate-700",
  bowlerRole: "text-xs text-slate-500",
  bowlerStats: "text-sm text-slate-700",
  bowlerDetails: "mt-2 text-xs text-slate-500",
  noBowlersText: "text-sm text-slate-500",

  // Summary section
  summarySection: "text-sm text-slate-600",
  summaryTitle: "font-medium text-slate-700 mb-1",

  // Collapsed preview
  collapsedPreview: "bg-white p-4 text-sm text-slate-600",

  // Footer section
  footer:
    "backdrop-blur-md bg-white/60 px-5 py-3 text-xs text-slate-600 border-t border-white/30 flex items-center justify-between",
  oversText: "opacity-80",
};

export const upcomingMatchesStyles = {
  // Main container
  container: "space-y-4",

  // Header section
  headerContainer:
    "backdrop-blur-md bg-white/50 p-3 rounded-2xl flex items-center justify-between",
  headerTitle: "text-sm font-semibold text-slate-800",
  headerSubtitle: "text-xs text-slate-500",
  lastUpdatedText: "text-xs text-slate-500",
  refreshButton: "px-3 py-1 rounded-full bg-white shadow-sm text-sm",

  // Quota mode alert
  quotaAlert: "rounded-2xl p-3 bg-amber-50 text-amber-800 text-sm",

  // Groups container
  groupsContainer: "space-y-6",

  // Series section
  seriesSection: "relative",
  seriesHeader: "mb-3 flex items-center justify-between",
  seriesTitle: "text-sm font-semibold text-slate-800",
  seriesMatchCount: "text-xs text-slate-500",
  seriesLabel: "text-xs text-slate-500 hidden sm:block",

  // Matches grid
  matchesGrid: "grid grid-cols-1 md:grid-cols-2 gap-5",

  // Match article
  matchArticle:
    "group relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-100 via-blue-50 to-indigo-100 transform-gpu transition-all duration-200 hover:scale-[1.02] shadow-md",
  matchArticleInner:
    "rounded-2xl bg-white/80 backdrop-blur-md p-4 h-full flex flex-col justify-between",

  // Match header (time and venue)
  matchHeader: "flex items-center justify-between",
  matchTime: "text-xs text-slate-600",
  matchVenue: "text-xs text-slate-400",

  // Teams section
  teamsContainer: "mt-3 flex items-center justify-between gap-4",
  teamContainer: "flex items-center gap-3 min-w-0",
  teamContainerReversed: "flex items-center gap-3 min-w-0 justify-end",
  teamName: "text-sm font-semibold text-slate-900 truncate",
  teamStatus: "text-xs text-slate-500 mt-1",
  vsText: "text-xs text-slate-400",

  // Match footer
  matchFooter: "mt-4 flex items-center justify-between text-xs text-slate-600",
  detailsButton:
    "px-3 py-1 rounded-full bg-white/70 text-xs shadow-sm hover:bg-white",
  matchId: "text-xs text-slate-400 hidden sm:block",
  matchDate: "text-xs text-slate-500",

  // Flag styles
  flagImage: "w-10 h-7 object-cover rounded-md shadow-sm flex-shrink-0",
  emojiContainer: "w-10 h-8 flex items-center justify-center text-xl",
  initialsContainer:
    "w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white shadow",

  // No matches state
  noMatchesContainer: "rounded-2xl p-4 bg-white/90 text-sm text-slate-600",
  rawDataPre: "max-h-64 overflow-auto text-xs bg-slate-50 p-3 rounded",

  // Loading/error states
  loadingContainer: "p-6",
  errorContainer: "p-6 text-rose-600",
};

export const homeStyles = {
  root: "min-h-screen relative bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-slate-100 overflow-x-hidden font-sans",

  blob1:
    "pointer-events-none absolute -top-36 -left-36 w-[520px] h-[520px] rounded-full opacity-60 blur-3xl",
  blob1Gradient:
    "radial-gradient(circle at 30% 30%, rgba(139,92,246,0.4), rgba(79,70,229,0.3) 90%, transparent 90%)",
  blob2:
    "pointer-events-none absolute -top-20 right-[-120px] w-[520px] h-[520px] rounded-full opacity-50 blur-3xl",
  blob2Gradient:
    "radial-gradient(circle at 70% 20%, rgba(236,72,153,0.5), rgba(244,114,182,0.3) 100%, transparent 100%)",

  headerContainer: "fixed inset-x-0 top-7 z-50",

  main: "max-w-6xl mx-auto px-6 pt-20 md:pt-24",
  section: "mb-16",

  heroWrapper: "relative",
  heroBox:
    "relative mt-5 overflow-visible rounded-3xl px-6 md:px-10 lg:px-12 py-16 md:py-10 bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-600 shadow-xl",
  heroSpotlight: "absolute inset-0 pointer-events-none",
  heroSpotlightGradient:
    "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.08), rgba(255,255,255,0.02) 20%, transparent 40%)",
  heroContent:
    "relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center",

  heroText: "text-center md:text-left",
  heroTitle:
    "text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-lg",
  heroSubtitle: "mt-4 text-white/90 text-sm md:text-base max-w-2xl",

  heroButtons: "mt-6 flex flex-wrap gap-3 justify-center md:justify-start",
  primaryButton:
    "px-5 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-medium shadow-lg hover:scale-[1.03] transition",
  secondaryButton:
    "px-5 py-3 rounded-full bg-white/10 border border-white/25 text-white text-sm hover:bg-white/20 transition",

  heroFeatures: "mt-6 hidden md:flex gap-4 text-sm text-white/80",
  featureTag:
    "bg-white/20 px-3 py-2 rounded-lg border border-white/30 backdrop-blur-md",

  heroShadow: "absolute inset-0 rounded-3xl pointer-events-none",

  gridSection: "grid grid-cols-1 lg:grid-cols-3 gap-6",
  mainContent: "lg:col-span-2 space-y-6",

  sectionHeader: "flex items-center justify-between mb-3",
  sectionTitle: "text-lg font-medium text-white",
  sectionSubtitle: "text-xs text-slate-300",

  liveStatus: "flex items-center gap-2",
  liveCount: "text-xs text-fuchsia-300",

  quickScoreCard:
    "rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-900/40 to-fuchsia-800/30 p-4 shadow-lg backdrop-blur-md",
  quickScoreHeader: "flex items-center justify-between mb-3",
  quickScoreTitle: "text-sm font-medium text-fuchsia-300",
  quickScoreStatus: "text-xs text-fuchsia-400",
  quickScoreContent: "text-sm text-slate-200 mb-3",
  quickScoreButton:
    "px-3 py-2 rounded-full bg-indigo-700/50 text-white text-sm hover:bg-indigo-600 transition",

  detailsSection: "mt-10",
  detailsCard:
    "rounded-2xl border border-white/10 bg-indigo-900/30 p-6 shadow-inner backdrop-blur-md",
  detailsTitle: "text-lg font-semibold text-fuchsia-200 mb-4",
  detailsContent: "space-y-6",
};


export const footerStyles = {
  // Main container
  container: "mt-12 mb-4 px-4",
  innerContainer: "max-w-6xl mx-auto",

  // Content section
  content:
    "backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4",

  // Logo and copyright section
  logoContainer: "flex items-center gap-3",
  copyright: "text-center text-xs text-slate-500 mt-3",

  // Navigation and social section
  navContainer: "flex items-center gap-6",
  nav: "hidden sm:flex items-center gap-4 text-sm text-slate-700",
  navLink: "hover:underline",

  // Social icons
  socialContainer: "flex items-center gap-3",
  socialLink: "p-2 rounded-md hover:bg-slate-100",
  socialIcon: "w-4 h-4 text-slate-700",
};
