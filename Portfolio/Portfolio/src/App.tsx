import { Suspense, lazy, useCallback, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { Nav } from "./components/Nav";
import { RouteFallback } from "./components/spinner/RouteFallback";

const Home = lazy(() => import("./page/Home"));
const Projects = lazy(() => import("./page/Projects"));
const Contact = lazy(() => import("./page/Contact"));
const Stack = lazy(() => import("./page/Stack"));
const Timeline = lazy(() => import("./page/Timeline"));

const ROUTE_ORDER = [
  "/",
  "/stack",
  "/timeline",
  "/projects",
  "/contact",
] as const;

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={
            <Suspense fallback={<RouteFallback />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="timeline"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Timeline />
            </Suspense>
          }
        />
        <Route
          path="projects"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="stack"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Stack />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();

  const goStep = useCallback(
    (dir: 1 | -1) => {
      const currentPath =
        location.pathname === "/" ? "/" : `/${location.pathname.split("/")[1]}`;
      const idx = ROUTE_ORDER.indexOf(
        currentPath as (typeof ROUTE_ORDER)[number]
      );

      if (idx === -1) return;

      const nextIdx = Math.min(ROUTE_ORDER.length - 1, Math.max(0, idx + dir));

      if (nextIdx !== idx) {
        navigate(ROUTE_ORDER[nextIdx]);
      }
    },
    [location.pathname, navigate]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goStep(1);
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goStep(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goStep]);

  return (
    <div className="min-h-screen">
      <Nav />
      <AnimatedRoutes />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <AppShell />
      </MotionConfig>
    </Router>
  );
}