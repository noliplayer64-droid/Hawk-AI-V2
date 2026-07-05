/*
==================================================
Hawk AI - script.js
Simple Offline Chatbot
HTML, CSS and JavaScript Only
==================================================
*/

// ==============================
// Element References
// ==============================

const chatHistory = document.getElementById("chatHistory");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const clearChatBtn = document.getElementById("clearChatBtn");

// ==============================
// Placeholder Responses
// ==============================

const responses = [
    "Interesting! Tell me more.",
    "I'm Hawk AI, running entirely offline.",
    "Thanks for your message!",
    "That's a good question.",
    "I'm currently using a built-in placeholder response system.",
    "Very interesting.",
    "Can you explain that a little more?",
    "I understand.",
    "That sounds fascinating.",
    "I'm always ready for another question.",
    "Thanks for chatting with Hawk AI!",
    "I'm here to help however I can."
];

// ==============================
// Utility Functions
// ==============================

/**
 * Automatically scrolls to the newest message.
 */
function
