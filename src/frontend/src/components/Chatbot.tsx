import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

interface TextPart {
  type: "text" | "bold" | "link" | "br";
  content: string;
  href?: string;
}

const knowledgeBase: { keywords: string[]; response: string }[] = [
  {
    keywords: ["service", "package", "offer", "bespoke", "standard", "premium"],
    response:
      "We offer three website packages:\n\n**Bespoke** — Entry-level authority website with a clean, professional layout.\n**Standard** — Enhanced design with SEO optimization and a WhatsApp button.\n**Premium** — Fully custom design with booking form, AI Chatbot integration, and Google Map Pack optimization guidance.\n\nWould you like to book a strategy call to discuss which is right for you?",
  },
  {
    keywords: ["timeline", "how long", "time", "days", "delivery"],
    response:
      "Our process is efficient and structured:\n\n**Discovery call:** 15 minutes\n**Build:** 5–7 working days\n**Refinement:** 1–2 rounds\n**Launch:** after your approval\n\nWe move quickly without compromising quality.",
  },
  {
    keywords: ["payment", "price", "cost", "pay", "contract", "advance"],
    response:
      "Our payment structure is simple and fair:\n\n**50% advance** to begin the project\n**50% on successful completion**\n\nNo hidden fees. No surprises.",
  },
  {
    keywords: [
      "contact",
      "phone",
      "number",
      "reach",
      "call",
      "location",
      "address",
    ],
    response:
      "You can reach us here:\n\n📞 0090 7045509097\n📍 Kolkata, West Bengal – 700031\n\nOr book a 20-minute strategy call directly from our website.",
  },
  {
    keywords: ["what do you do", "who are you", "about", "ennoble", "agency"],
    response:
      "Site Web Ennoble builds refined, strategic 1–2 page authority websites for high-revenue local businesses.\n\nWe help established brands establish a permanent digital presence on Google — built to capture search intent and convert visitors into direct enquiries.",
  },
  {
    keywords: ["book", "strategy", "appointment", "schedule", "meeting"],
    response:
      "I'd love to connect you with our team. Click the link below to book your free 20-minute strategy call — we'll assess your current online presence and outline the best path forward.\n\n[Book a Strategy Call →](/#contact)",
  },
  {
    keywords: ["instagram", "social media", "facebook", "why website"],
    response:
      "Instagram attracts attention. Google captures intent.\n\nWhen clients are ready to buy, they search. Your website is your permanent digital landmark — working 24/7, owned by you, built to convert high-intent visitors into direct enquiries.",
  },
];

const fallback =
  "That's a great question. I'd recommend speaking directly with our team for a tailored answer. You can book a free 20-minute strategy call, or reach us at 0090 7045509097. We're happy to help.";

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const rule of knowledgeBase) {
    if (rule.keywords.some((kw) => lower.includes(kw))) {
      return rule.response;
    }
  }
  return fallback;
}

function parseText(text: string): TextPart[] {
  const rawParts = text.split(/(\*\*[^*]+\*\*|\[.+?\]\(.+?\)|\n)/g);
  return rawParts.map((part): TextPart => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return { type: "bold", content: part.slice(2, -2) };
    }
    if (/^\[.+?\]\(.+?\)$/.test(part)) {
      const match = part.match(/\[(.+?)\]\((.+?)\)/);
      if (match) {
        return { type: "link", content: match[1], href: match[2] };
      }
    }
    if (part === "\n") return { type: "br", content: "" };
    return { type: "text", content: part };
  });
}

function renderText(text: string) {
  const parts = parseText(text);
  return parts.map((part, idx) => {
    const key = `${part.type}-${idx}`;
    if (part.type === "bold") return <strong key={key}>{part.content}</strong>;
    if (part.type === "link")
      return (
        <a key={key} href={part.href} className="underline font-medium">
          {part.content}
        </a>
      );
    if (part.type === "br") return <br key={key} />;
    return <span key={key}>{part.content}</span>;
  });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      text: "Hello! Welcome to Site Web Ennoble. I'm here to answer any questions about our services, timeline, or pricing. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed || typing) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      text: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = getResponse(trimmed);
      const assistantMsg: Message = {
        id: `a-${Date.now()}`,
        role: "assistant",
        text: response,
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          data-ocid="chatbot.panel"
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[360px] h-[480px] flex flex-col bg-background border border-ennoble-border rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden"
          aria-label="Site Web Ennoble Digital Assistant"
          aria-live="polite"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-ennoble-border bg-ennoble-text">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-ennoble-yellow flex items-center justify-center flex-shrink-0">
                <MessageCircle size={14} className="text-ennoble-text" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-none">
                  Site Web Ennoble
                </p>
                <p className="text-xs text-white/50 mt-0.5">
                  Digital Assistant
                </p>
              </div>
            </div>
            <button
              type="button"
              data-ocid="chatbot.close_button"
              onClick={() => setOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-muted/30">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`chat-message max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-ennoble-text text-white rounded-br-sm"
                      : "bg-background border border-ennoble-border text-ennoble-text rounded-bl-sm shadow-xs"
                  }`}
                >
                  {renderText(msg.text)}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-background border border-ennoble-border rounded-xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-ennoble-subtext animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-ennoble-subtext animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-ennoble-subtext animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-ennoble-border bg-background">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                data-ocid="chatbot.input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                disabled={typing}
                className="flex-1 text-sm px-3.5 py-2.5 rounded-lg border border-ennoble-border bg-background text-ennoble-text placeholder:text-ennoble-subtext/60 focus:outline-none focus:ring-1 focus:ring-ennoble-text/20 disabled:opacity-50 transition"
              />
              <button
                type="button"
                data-ocid="chatbot.submit_button"
                onClick={sendMessage}
                disabled={!input.trim() || typing}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-ennoble-text text-white disabled:opacity-40 hover:bg-opacity-80 transition-all"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        type="button"
        data-ocid="chatbot.button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-4 sm:right-6 z-50 w-[52px] h-[52px] flex items-center justify-center rounded-full bg-ennoble-text text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.2)] transition-all hover:scale-105 active:scale-95"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
    </>
  );
}
