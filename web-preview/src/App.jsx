import { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './index.css';

const N8N_WEBHOOK_URL = 'https://n8n.srv1154f02.hstgr.cloud/webhook/actioragent-test/chat';

// Navigation Component
function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <span className="nav-icon">🏠</span>
        <span className="nav-label">HOME</span>
      </Link>
      <Link to="/planner" className={`nav-item ${location.pathname === '/planner' ? 'active' : ''}`}>
        <span className="nav-icon">🗺️</span>
        <span className="nav-label">PLANNER</span>
      </Link>
      <Link to="/chat" className={`nav-item ${location.pathname === '/chat' ? 'active' : ''}`}>
        <span className="nav-icon">🤖</span>
        <span className="nav-label">CHAT</span>
      </Link>
      <Link to="/profile" className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>
        <span className="nav-icon">👤</span>
        <span className="nav-label">PROFILE</span>
      </Link>
    </nav>
  );
}

// Home Dashboard Screen
function HomeDashboard() {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="container">
        <div style={{ padding: '40px 0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="logo">PLUS</div>
            <div style={{ fontSize: '10px', color: '#6b7280', letterSpacing: '1px', marginTop: '8px' }}>
              MALAYSIA HIGHWAY AUTHORITY
            </div>
          </div>
          <div style={{ fontSize: '14px', fontWeight: '500' }}>04:52 PM</div>
        </div>

        <div className="traffic-status">
          <span className="live-dot"></span>
          <span>LIVE TRAFFIC: CLEAR</span>
        </div>

        <div className="quick-actions">
          <div className="action-card" onClick={() => navigate('/planner')}>
            <span className="action-icon">🗺️</span>
            <span className="action-label">PLAN<br />JOURNEY</span>
          </div>
          <div className="action-card" onClick={() => navigate('/cctv')}>
            <span className="action-icon">📹</span>
            <span className="action-label">LIVE<br />CCTV</span>
          </div>
          <div className="action-card">
            <span className="action-icon">🧮</span>
            <span className="action-label">TOLL<br />CALC</span>
          </div>
          <div className="action-card danger" onClick={() => navigate('/sos')}>
            <span className="action-icon">📞</span>
            <span className="action-label">SOS<br />EMERGENCY</span>
          </div>
        </div>

        <div className="section-title">WHAT'S HAPPENING @PLUSTRAФФK</div>
        <div className="card">
          <div style={{ background: '#0f2319', color: '#fff', padding: '4px 8px', borderRadius: '4px', display: 'inline-block', fontSize: '10px', fontWeight: '700', marginBottom: '8px' }}>
            SMARTLANE
          </div>
          <div style={{ fontSize: '10px', color: '#6b7280', marginBottom: '4px' }}>10:00 HRS</div>
          <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>SMARTLANE ACTIVATION</div>
          <div style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
            KM 303.1 KM 329.8 on Selangor Southville City ka Kuala Maktuba. Emergency lane open for use.
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

// Plan Journey Screen
function PlanJourney() {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="header">
        <button className="back-button" onClick={() => navigate('/')}>←</button>
        <div className="header-title">PLANNER</div>
        <div className="spacer"></div>
      </div>

      <div className="container">
        <div style={{ padding: '40px 0 16px' }}>
          <div style={{ fontSize: '48px', fontWeight: '800', lineHeight: '1', letterSpacing: '-1px' }}>PLAN</div>
          <div style={{ fontSize: '48px', fontWeight: '800', lineHeight: '1', letterSpacing: '-1px' }}>JOURNEY</div>
          <div style={{ fontSize: '10px', color: '#6b7280', marginTop: '16px', letterSpacing: '1px' }}>SYSTEM ROUTE 1.0</div>
          <div style={{ fontSize: '16px', fontWeight: '500', marginTop: '4px' }}>04:45 PM</div>
        </div>

        <div style={{ height: '1px', background: '#e5e7eb', margin: '24px 0' }}></div>

        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#e5e7eb' }}></div>
            <div>
              <div style={{ fontSize: '10px', color: '#6b7280', letterSpacing: '1px', marginBottom: '4px' }}>ORIGIN</div>
              <div style={{ fontSize: '16px', color: '#6b7280' }}>SELECT ENTRY PLAZA</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#008a45' }}></div>
            <div>
              <div style={{ fontSize: '10px', color: '#6b7280', letterSpacing: '1px', marginBottom: '4px' }}>DESTINATION</div>
              <div style={{ fontSize: '16px', color: '#6b7280' }}>SELECT EXIT PLAZA</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <div className="section-title" style={{ padding: '16px 0 8px' }}>VEHICLE TYPE</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
            {['🚗', '🏍️', '🚌', '🚚'].map((icon, i) => (
              <div key={i} style={{
                aspectRatio: '1',
                border: i === 0 ? '2px solid #0f2319' : '2px solid #e5e7eb',
                background: i === 0 ? '#0f2319' : '#fff',
                color: i === 0 ? '#fff' : '#0f2319',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '32px',
                cursor: 'pointer'
              }}>
                <span>{icon}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'fixed', bottom: '80px', left: '50%', transform: 'translateX(-50%)', padding: '0 24px', maxWidth: '430px', width: '100%' }}>
          <button className="btn-primary" onClick={() => navigate('/results')}>
            🧭 CALCULATE ROUTE
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

// Journey Results Screen
function JourneyResults() {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="header">
        <button className="back-button" onClick={() => navigate('/planner')}>←</button>
        <div className="header-title">JOURNEY RESULTS</div>
        <div className="spacer"></div>
      </div>

      <div style={{ paddingBottom: '120px' }}>
        <div className="headline">1H 45M</div>
        <div className="subtitle">Subang Jaya to Ayer Keroh</div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">TOLL</div>
            <div className="stat-value">RM 18.50</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">FUEL</div>
            <div className="stat-value">RM 24.30</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">DISTANCE</div>
            <div className="stat-value">142 KM</div>
          </div>
        </div>

        <div className="section-title">UPCOMING R&R</div>

        <div className="list-item">
          <div>
            <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Seremban R&R (Southbound)</div>
            <div style={{ fontSize: '10px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>
              42 km away • Petrol • Food Court
            </div>
          </div>
          <span className="list-item-icon">⛽</span>
        </div>

        <div className="list-item">
          <div>
            <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Pedas Linggi Lay-by</div>
            <div style={{ fontSize: '10px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>
              88 km away • Prayer Room • Toilets
            </div>
          </div>
          <span style={{ fontSize: '24px', color: '#6b7280' }}>🚻</span>
        </div>

        <div style={{ position: 'fixed', bottom: '80px', left: '50%', transform: 'translateX(-50%)', padding: '0 24px', maxWidth: '430px', width: '100%' }}>
          <button className="btn-primary">
            🧭 START NAVIGATION
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

// Emergency SOS Screen
function EmergencySOS() {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="header">
        <button className="back-button" onClick={() => navigate('/')}>←</button>
        <div className="header-title">Emergency SOS</div>
        <div className="spacer"></div>
      </div>

      <div className="container">
        <div style={{ textAlign: 'center', padding: '60px 0 40px' }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '60px',
            background: '#008a45',
            margin: '0 auto 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px',
            boxShadow: '0 8px 24px rgba(0, 138, 69, 0.3)',
            cursor: 'pointer'
          }}>
            📞
          </div>
          <div style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>NADIA RAHMAN</div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>+60 12-345 6789</div>
        </div>

        <div style={{ marginBottom: '100px' }}>
          <div style={{ fontSize: '10px', fontWeight: '700', color: '#6b7280', letterSpacing: '1.5px', marginBottom: '16px' }}>
            HEADING TO
          </div>
          {['Northbound - To Perlis / Penang', 'Southbound - To Johor Bahru'].map((dir, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 0',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '12px',
                border: `2px solid ${i === 0 ? '#008a45' : '#e5e7eb'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {i === 0 && <div style={{ width: '12px', height: '12px', borderRadius: '6px', background: '#008a45' }}></div>}
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600' }}>{dir}</div>
            </div>
          ))}
        </div>

        <div style={{ position: 'fixed', bottom: '80px', left: '50%', transform: 'translateX(-50%)', padding: '0 24px', maxWidth: '430px', width: '100%' }}>
          <button className="btn-primary">
            📞 CALL FOR ASSISTANCE
          </button>
          <div style={{ textAlign: 'center', fontSize: '10px', color: '#6b7280', marginTop: '12px', letterSpacing: '1px' }}>
            PLUS RONDA WILL BE DISPATCHED TO YOUR LOCATION
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

// CCTV Feed Screen  
function CCTVFeed() {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="header">
        <button className="back-button" onClick={() => navigate('/')}>←</button>
        <div className="header-title">LIVE TRAFFIC FEED</div>
        <span style={{ fontSize: '20px', cursor: 'pointer' }}>🔍</span>
      </div>

      <div style={{ padding: '0 0 100px' }}>
        <div style={{ display: 'flex', gap: '8px', padding: '16px 24px' }}>
          <div style={{
            flex: 1,
            textAlign: 'center',
            padding: '12px',
            borderBottom: '2px solid #008a45',
            fontSize: '12px',
            fontWeight: '700',
            color: '#008a45',
            letterSpacing: '1px'
          }}>
            NORTHBOUND
          </div>
          <div style={{
            flex: 1,
            textAlign: 'center',
            padding: '12px',
            fontSize: '12px',
            fontWeight: '700',
            color: '#6b7280',
            letterSpacing: '1px'
          }}>
            SOUTHBOUND
          </div>
        </div>

        <div style={{ background: '#fff', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span className="live-dot" style={{ background: '#10b981' }}></span>
          <span style={{ flex: 1, fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>LIVE NETWORK • E1 HIGHWAY</span>
          <button className="btn-secondary" style={{ width: 'auto', padding: '6px 12px', fontSize: '12px' }}>FILTER</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', padding: '0 24px' }}>
          {[
            { img: '/traffic2.png', filter: 'none' },
            { img: '/traffic1.png', filter: 'none' },
            { img: '/traffic2.png', filter: 'brightness(0.7) saturate(1.2)' },
            { img: '/traffic1.png', filter: 'brightness(1.1) contrast(1.1)' },
            { img: '/traffic2.png', filter: 'brightness(0.85) hue-rotate(10deg)' },
            { img: '/traffic1.png', filter: 'brightness(0.9) saturate(0.9)' },
          ].map((cam, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                aspectRatio: '16/9',
                background: '#000',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src={cam.img}
                  alt={`Traffic camera KM 45${i + 1}.4`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: cam.filter
                  }}
                />
                <span style={{
                  position: 'absolute',
                  top: '8px',
                  left: '8px',
                  background: '#ef4444',
                  color: '#fff',
                  fontSize: '8px',
                  fontWeight: '700',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px'
                }}>
                  ⚡ LIVE
                </span>
              </div>
              <div style={{ padding: '8px' }}>
                <div style={{ fontSize: '10px', fontWeight: '700', marginBottom: '4px' }}>KM 45{i + 1}.4 LOCATION</div>
                <div style={{ fontSize: '9px', color: '#6b7280' }}>5:9 PM AWAY</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

// Chatbot Screen
function Chatbot() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { id: 1, role: 'bot', text: 'Hi! I\'m your PLUS Highway assistant. Ask me about routes, tolls, traffic conditions, or anything else!' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg = { id: Date.now(), role: 'user', text: trimmed };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      const botText = data.output || data.response || data.reply || data.text || data.message || JSON.stringify(data);

      setMessages(prev => [...prev, { id: Date.now(), role: 'bot', text: botText }]);
    } catch (err) {
      setMessages(prev => [...prev, { id: Date.now(), role: 'error', text: `Connection error: ${err.message}. Make sure your n8n workflow is active.` }]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="header">
        <button className="back-button" onClick={() => navigate('/')}>←</button>
        <div className="header-title">PLUS ASSISTANT</div>
        <div className="spacer"></div>
      </div>

      <div className="chat-messages">
        {messages.map(msg => (
          <div key={msg.id} className={`chat-bubble ${msg.role === 'user' ? 'chat-bubble-user' :
              msg.role === 'error' ? 'chat-error' :
                'chat-bubble-bot'
            }`}>
            {msg.role === 'bot' && <div className="bot-label">PLUS AI</div>}
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="typing-indicator">
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        <input
          ref={inputRef}
          className="chat-input"
          type="text"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <button
          className="chat-send-btn"
          onClick={sendMessage}
          disabled={!input.trim() || isLoading}
        >
          ➤
        </button>
      </div>

      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/planner" element={<PlanJourney />} />
        <Route path="/results" element={<JourneyResults />} />
        <Route path="/sos" element={<EmergencySOS />} />
        <Route path="/cctv" element={<CCTVFeed />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/profile" element={<HomeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
