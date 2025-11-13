import React, { createContext, useContext, useReducer } from 'react';

/* ================================
    INITIAL STATE
================================== */

const resumePath =
  process.env.PUBLIC_URL + '/AbidDasurkar_Frontend_NextJS_Developer.pdf';
const profileImagePath = process.env.PUBLIC_URL + '/user.jpg';

const initialState = {
  user: {
    name: 'Abid Dasurkar',
    title: 'Frontend Developer',
    tagline:
      'Frontend Developer | React & Next.js Expert | Cloud & DevOps | 3+ Years Building Scalable Web Applications',
    email: 'abiddasurkar@gmail.com',
    phone: '+91 8275434589',
    location: 'Pune, Maharashtra, India',
    github: 'https://github.com/abiddasurkar',
    linkedin: 'https://www.linkedin.com/in/abiddasurkar/',
    twitter: '',
    resumeUrl: resumePath,
    profileImage: profileImagePath,
    bio: `Frontend Developer at Synechron with 3+ years of hands-on experience building scalable, high-performance web applications using React and Next.js. 
Skilled in modern UI/UX development, TypeScript, and CI/CD automation with Docker and Azure. 
Certified Meta Front-End Developer with a passion for creating responsive, accessible, and visually engaging user interfaces.`,
  },
  theme: 'light',
  loading: false,
  navigation: {
    activeSection: null,
    scrollPosition: 0,
  },
};

/* ================================
    ACTION TYPES
================================== */
const ActionTypes = {
  SET_THEME: 'SET_THEME',
  SET_LOADING: 'SET_LOADING',
  SET_ACTIVE_SECTION: 'SET_ACTIVE_SECTION',
  SET_SCROLL_POSITION: 'SET_SCROLL_POSITION',
};

/* ================================
   REDUCER FUNCTION
================================== */
const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_THEME:
      return { ...state, theme: action.payload };

    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };

    case ActionTypes.SET_ACTIVE_SECTION:
      return {
        ...state,
        navigation: { ...state.navigation, activeSection: action.payload },
      };

    case ActionTypes.SET_SCROLL_POSITION:
      return {
        ...state,
        navigation: { ...state.navigation, scrollPosition: action.payload },
      };

    default:
      return state;
  }
};

/* ================================
    CONTEXT SETUP
================================== */
const AppContext = createContext();

/* ================================
    CONTEXT PROVIDER
================================== */
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // App-wide actions
  const actions = {
    setTheme: (theme) =>
      dispatch({ type: ActionTypes.SET_THEME, payload: theme }),
    setLoading: (loading) =>
      dispatch({ type: ActionTypes.SET_LOADING, payload: loading }),
    setActiveSection: (section) =>
      dispatch({ type: ActionTypes.SET_ACTIVE_SECTION, payload: section }),
    setScrollPosition: (position) =>
      dispatch({ type: ActionTypes.SET_SCROLL_POSITION, payload: position }),
  };

  return (
    <AppContext.Provider value={{ ...state, ...actions }}>
      {children}
    </AppContext.Provider>
  );
};

/* ================================
    CUSTOM HOOK
================================== */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
