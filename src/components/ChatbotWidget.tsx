import { useEffect, useState, useRef } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/chat";
const MILD_RED = "#ff5f5f";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [sessionId] = useState(() => crypto.randomUUID());
  const [stage, setStage] = useState<"greet" | "chat">("greet");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // 🔥 Auto-open after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      openChat();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // 🔽 Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const openChat = () => {
    setIsOpen(true);
    setMessages([
      { sender: "bot", text: "Hi 👋 Welcome to Howdway! I’m Lara." },
    ]);
    setStage("greet");
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await axios.post(API_URL, {
        session_id: sessionId,
        message: text,
      });

      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { sender: "bot", text: res.data.message }]);
      }, 1500);
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong. Please try again." },
      ]);
    }
  };

  const handleSayHi = async () => {
    setMessages((prev) => [...prev, { sender: "user", text: "hi" }]);
    setStage("chat");
    setIsTyping(true);

    try {
      const res = await axios.post(API_URL, {
        session_id: sessionId,
        message: "",
      });

      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { sender: "bot", text: res.data.message }]);
      }, 1500);
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong. Please try again." },
      ]);
    }
  };

  return (
    <>
      {/* 🚫 Floating Button ONLY when chat is closed */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-black text-2xl transition-all z-[9999]"
          style={{ backgroundColor: MILD_RED }}
        >
          💬
        </button>
      )}

      {/* 💬 Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-[#0b0d10] text-white rounded-2xl shadow-2xl border border-white/10 overflow-hidden animate-fadeIn z-[9999]">
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: MILD_RED }}
          >
            <span className="font-medium tracking-wide text-black">LARA</span>
            <button
              onClick={closeChat}
              className="text-xl text-black hover:opacity-70 transition"
              title="Minimize"
            >
              −
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 h-80 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={msg.sender === "user" ? "text-right" : "text-left"}>
                <div
                  className={`inline-block px-3 py-2 rounded-xl max-w-[85%] ${
                    msg.sender === "user"
                      ? "bg-white/70 text-black"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="text-left">
                <div className="inline-block px-3 py-2 rounded-xl bg-white/10 text-white">
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Say Hi Button */}
          {stage === "greet" && (
            <div className="p-3 border-t border-white/10 flex justify-end">
              <button
                onClick={handleSayHi}
                className="text-black px-4 py-2 rounded-lg text-sm transition"
                style={{ backgroundColor: MILD_RED }}
              >
                Say Hi
              </button>
            </div>
          )}

          {/* Input */}
          {stage === "chat" && (
            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                className="flex-1 bg-transparent border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage(input);
                }}
              />
              <button
                onClick={() => sendMessage(input)}
                className="text-black px-4 rounded-lg text-sm transition"
                style={{ backgroundColor: MILD_RED }}
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
