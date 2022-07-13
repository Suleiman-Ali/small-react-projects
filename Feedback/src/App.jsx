import React, { Component, useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStatus from "./components/FeedbackStatus";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <Routes>
          {/* prettier-ignore */}
          <Route exact path="/" element={
          <>
              <FeedbackForm />
              <FeedbackStatus />
              <FeedbackList  />
              <AboutIconLink />

          </>
        } />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}
